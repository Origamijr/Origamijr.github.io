(function () {

const PALETTE_HEX = [
  '#ffffff', '#B1DCF2', '#D1F0BF', '#FFC5D3', '#C3BDFF',
  '#FFD49C', '#AEFFDC', '#E3A9FF', '#FFFA9A', '#777799',
];
const NO_CLUE_BG = '#feeffe';
const NO_CLUE_FILL = '#5d4d5d';
const VALUE_SHIFT = 100;

function shiftHex(hex, amount) {
  const n = parseInt(hex.slice(1), 16);
  const clamp = v => Math.max(0, Math.min(255, v));
  const r = clamp(((n >> 16) & 255) - amount);
  const g = clamp(((n >> 8) & 255) - amount);
  const b = clamp((n & 255) - amount);
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}
function colorFor(hueIdx, filled) {
  const hex = PALETTE_HEX[hueIdx];
  return filled ? shiftHex(hex, VALUE_SHIFT) : hex;
}

function mod(n, m) { return ((n % m) + m) % m; }

let CELL = 48;
function recomputeCellSize() {
  CELL = Math.max(8, Math.floor(Math.max(window.innerWidth, window.innerHeight) / 10));
}

const HIDDEN_NIBBLE = 10;
function decodeBoard(b64, rows, cols) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  const clueMap = new Map();
  const n = rows * cols;
  for (let i = 0; i < n; i++) {
    const byte = bytes[i >> 1];
    const nib = (i % 2 === 0) ? (byte >> 4) & 0xF : byte & 0xF;
    if (nib !== HIDDEN_NIBBLE) clueMap.set(`${Math.floor(i / cols)},${i % cols}`, nib);
  }
  return clueMap;
}

const LEVELS = [
  { file: '/extras/torsaic/torsaic_5x5_2.json',  shuffled: false, vx: -1, vy: -1 },
  { file: '/extras/torsaic/torsaic_7x7_3.json',  shuffled: false, vx:  1, vy:  1 },
  { file: '/extras/torsaic/torsaic_9x9_5.json',  shuffled: false, vx:  1, vy:  1 },
  { file: '/extras/torsaic/torsaic_11x11_5.json', shuffled: true, vx:  1, vy:  1 },
];
const SPEED = 16;

let boardPools = {};
async function loadPools() {
  const files = [...new Set(LEVELS.map(l => l.file))];
  for (const f of files) {
    const res = await fetch(f);
    boardPools[f] = await res.json();
  }
}

function shuffledPermutation(n, rand) {
  const p = [...Array(n).keys()];
  for (let i = p.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  return p;
}
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------------- DOM setup: create canvas + popup, no HTML edits needed ---------------- */
const canvas = document.createElement('canvas');
canvas.id = 'mosaic-bg-canvas';
Object.assign(canvas.style, {
  position: 'fixed', inset: '0', zIndex: '-1', pointerEvents: 'none',
});
document.body.prepend(canvas);

const popup = document.createElement('div');
popup.id = 'mosaic-bg-popup';
Object.assign(popup.style, {
  display: 'none', position: 'fixed', inset: '0', background: 'rgba(0,0,0,0.6)',
  alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', zIndex: '9999',
});
const popupInner = document.createElement('div');
Object.assign(popupInner.style, {
  background: '#fafafa', padding: '28px 36px', borderRadius: '10px',
  textAlign: 'center', color: '#222',
});
popup.appendChild(popupInner);
document.body.appendChild(popup);

const ctx = canvas.getContext('2d');
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  recomputeCellSize();
}
window.addEventListener('resize', resize);
resize();

/* ---------------- Game state (unchanged from the standalone version) ---------------- */
let levelIndex = 0;
let ROWS, COLS, clueMap, colorMap, playerState;
let scrollX = 0, scrollY = 0;
let won = false;
let runStartTime = null;

function startLevel(idx) {
  levelIndex = idx;
  const level = LEVELS[idx];
  const pool = boardPools[level.file];
  const b64 = pool.boards[Math.floor(Math.random() * pool.boards.length)];

  ROWS = pool.rows;
  COLS = pool.cols;
  clueMap = decodeBoard(b64, ROWS, COLS);

  if (level.shuffled) {
    const rand = mulberry32(Date.now() ^ (idx * 2654435761));
    colorMap = shuffledPermutation(10, rand);
  } else {
    colorMap = [...Array(10).keys()];
  }

  playerState = Array.from({ length: ROWS }, () => new Array(COLS).fill(0));
  scrollX = 0;
  scrollY = 0;
  won = false;
  if (runStartTime === null) runStartTime = performance.now();
}

function neighborSum(r, c) {
  let s = 0;
  for (let dr = -1; dr <= 1; dr++)
    for (let dc = -1; dc <= 1; dc++)
      s += playerState[mod(r + dr, ROWS)][mod(c + dc, COLS)];
  return s;
}
function checkVictory() {
  for (const [key, value] of clueMap) {
    const [r, c] = key.split(',').map(Number);
    if (neighborSum(r, c) !== value) return false;
  }
  return true;
}

function draw() {
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h); 

  const tileW = COLS * CELL, tileH = ROWS * CELL;
  const sx = mod(scrollX, tileW), sy = mod(scrollY, tileH);
  const sxi = Math.round(sx), syi = Math.round(sy);

  const startTileX = Math.floor(sxi / CELL) - 1;
  const endTileX = Math.floor((w + sxi) / CELL) + 1;
  const startTileY = Math.floor(syi / CELL) - 1;
  const endTileY = Math.floor((h + syi) / CELL) + 1;

  for (let ty = startTileY; ty <= endTileY; ty++) {
    const r = mod(ty, ROWS);
    const py = ty * CELL - syi;
    for (let tx = startTileX; tx <= endTileX; tx++) {
      const c = mod(tx, COLS);
      const px = tx * CELL - sxi;
      const filled = playerState[r][c] === 1;
      const clue = clueMap.get(`${r},${c}`);
      ctx.fillStyle = clue === undefined
        ? (filled ? NO_CLUE_FILL : NO_CLUE_BG)
        : colorFor(colorMap[clue], filled);
      ctx.fillRect(px, py, CELL, CELL);
    }
  }
}

function frame() {
  if (!won) {
    const level = LEVELS[levelIndex];
    scrollX += level.vx * SPEED * (1 / 60);
    scrollY += level.vy * SPEED * (1 / 60);
  }
  draw();
  requestAnimationFrame(frame);
}

function toggleTileAt(clientX, clientY) {
  if (won) return;
  const tileW = COLS * CELL, tileH = ROWS * CELL;
  const sx = Math.round(mod(scrollX, tileW));
  const sy = Math.round(mod(scrollY, tileH));
  const tx = Math.floor((clientX + sx) / CELL);
  const ty = Math.floor((clientY + sy) / CELL);
  const c = mod(tx, COLS);
  const r = mod(ty, ROWS);
  playerState[r][c] = playerState[r][c] ? 0 : 1;

  if (checkVictory()) {
    won = true;
    if (levelIndex < LEVELS.length - 1) {
      setTimeout(() => startLevel(levelIndex + 1), 900);
    } else {
      const elapsed = (performance.now() - runStartTime) / 1000;
      setTimeout(() => showCongrats(elapsed), 500);
    }
  }
}

function showCongrats(elapsedSeconds) {
  popupInner.textContent = `Solved all 4 levels in ${elapsedSeconds.toFixed(1)}s! (Do DM me your method for the last stage)`;
  popup.style.display = 'flex';
  setTimeout(() => {
    popup.style.display = 'none';
    runStartTime = null;
    startLevel(0);
  }, 2500);
}

/* ---------------- Click routing: passthrough for real page content ---------------- */
const DRAG_THRESHOLD = 8; // px
let pointerDownAt = null;

document.addEventListener('pointerdown', (e) => {
  if (e.button !== 0) return; // ignore right-click (2) and middle-click (1)
  pointerDownAt = { x: e.clientX, y: e.clientY };
}, { passive: true });

document.addEventListener('pointerup', (e) => {
  if (e.button !== 0) return;
  if (!pointerDownAt) return;
  const dist = Math.hypot(e.clientX - pointerDownAt.x, e.clientY - pointerDownAt.y);
  pointerDownAt = null;
  if (dist > DRAG_THRESHOLD) return; // it was a drag/scroll, not a click

  // Let real interactive elements behave normally -- don't toggle a tile
  // underneath a link, button, or anything with a click handler.
  if (e.target.closest('a, button, input, select, textarea, [onclick], [role="button"]')) {
    return;
  }
  toggleTileAt(e.clientX, e.clientY);
});

loadPools().then(() => {
  startLevel(0);
  requestAnimationFrame(frame);
});

})();
