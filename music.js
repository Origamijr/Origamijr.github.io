// Shared music list rendering (used by index.html and music.html)
// VIBE CODED

const MUSIC_CSV = 'assets/files/music-list.csv';
// Rating dimensions (0-5) and their definitions, shown on hover
const MUSIC_AXIS_DEFS = {
    enjoyment: 'personal subjective evaluation of the song',
    appeal: 'song longevity and listen frequency',
    musicality: 'musical construction, execution, and complexity',
    intrigue: 'thematic depth and thought-provokingness',
    accessibility: 'ease of recommendation to others',
};
const MUSIC_AXES = Object.keys(MUSIC_AXIS_DEFS);
const axisTooltip = a => `${a}: ${MUSIC_AXIS_DEFS[a]}`;

// Minimal CSV parser (handles quoted fields, "" escapes, and newlines in quotes).
// Returns an array of objects keyed by header name.
function parseCSV(text) {
    const rows = [];
    let row = [], field = '', inQuotes = false;
    text = text.replace(/^﻿/, '');
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (inQuotes) {
            if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
            else if (c === '"') inQuotes = false;
            else field += c;
        } else if (c === '"') inQuotes = true;
        else if (c === ',') { row.push(field); field = ''; }
        else if (c === '\n' || c === '\r') {
            if (c === '\r' && text[i + 1] === '\n') i++;
            row.push(field); field = '';
            if (row.length > 1) rows.push(row);
            row = [];
        } else field += c;
    }
    if (field || row.length) { row.push(field); rows.push(row); }
    const [header, ...body] = rows;
    if (!header) return [];
    const keys = header.map(h => h.trim().toLowerCase());
    return body.map(r => Object.fromEntries(keys.map((k, i) => [k, r[i] ?? ''])));
}

function getYouTubeId(url) {
    const m = (url || '').match(/[?&]v=([^&]+)/) || (url || '').match(/youtu\.be\/([^?&]+)/);
    return m ? m[1] : null;
}

const isFeatured = e => /^(1|true|yes|y)$/i.test((e.featured || '').trim());
// A review counts as written if it's non-empty and not marked TODO (review still pending)
const hasReview = e => !!(e.review || '').trim() && !e.review.includes('TODO');
const parseGenres = s => (s || '').split(/[;,]/).map(g => g.trim()).filter(Boolean);

async function fetchMusic() {
    const res = await fetch(MUSIC_CSV);
    return parseCSV(await res.text());
}

function createEmbed(id) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
    iframe.allow = 'autoplay; fullscreen';
    iframe.allowFullscreen = true;
    return iframe;
}

// Click-to-load YouTube thumbnail (or null if not a YouTube link)
function createVideo(url) {
    const id = getYouTubeId(url);
    if (!id) return null;
    const video = document.createElement('div');
    video.className = 'music-video';
    video.style.backgroundImage = `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`;
    video.innerHTML = '<span class="play-btn">▶</span>';
    video.addEventListener('click', () => video.replaceWith(createEmbed(id)), { once: true });
    return video;
}

// Compact "▶ play" button that turns into an embedded player (or null if not YouTube)
function createPlayButton(url) {
    const id = getYouTubeId(url);
    if (!id) return null;
    const btn = document.createElement('button');
    btn.className = 'music-play';
    btn.textContent = '▶ play';
    btn.addEventListener('click', () => btn.replaceWith(createEmbed(id)), { once: true });
    return btn;
}

// The "by ..." text comes from the attribution column (blank = no "by")
function createTitleLink(e) {
    const p = document.createElement('p');
    const a = document.createElement('a');
    a.textContent = e.title;
    a.href = e.url;
    a.target = '_blank';
    p.appendChild(a);
    if (e.attribution) p.append(` by ${e.attribution}`);
    return p;
}

// ---------- Home page: featured entries ----------

function createMusicEntry(e) {
    const entry = document.createElement('div');
    entry.className = 'music-entry';
    const video = createVideo(e.url);
    if (video) entry.appendChild(video);

    const text = document.createElement('div');
    text.className = 'music-text';
    const review = document.createElement('p');
    review.textContent = e.review;
    text.append(createTitleLink(e), review);
    entry.appendChild(text);
    return entry;
}

async function loadFeaturedMusic(targetId) {
    const target = document.getElementById(targetId);
    try {
        (await fetchMusic()).filter(e => isFeatured(e) && hasReview(e)).forEach(e => target.appendChild(createMusicEntry(e)));
    } catch (err) {
        target.textContent = 'Could not load music list.';
    }
}

// ---------- Full list page: filterable, sortable table ----------

function radarChart(e) {
    const w = 290, h = 185, cx = w / 2, cy = 98, r = 60, n = MUSIC_AXES.length;
    const pt = (i, v) => {
        const ang = -Math.PI / 2 + (2 * Math.PI * i) / n;
        return [cx + Math.cos(ang) * r * v / 5, cy + Math.sin(ang) * r * v / 5];
    };
    const poly = vals => vals.map((v, i) => pt(i, v).map(x => x.toFixed(1)).join(',')).join(' ');
    let svg = `<svg class="music-radar" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">`;
    for (let k = 1; k <= 5; k++) {
        svg += `<polygon points="${poly(MUSIC_AXES.map(() => k))}" fill="none" stroke="currentColor" stroke-opacity="${k === 5 ? 0.5 : 0.15}"/>`;
    }
    MUSIC_AXES.forEach((a, i) => {
        const [x, y] = pt(i, 5);
        let [lx, ly] = pt(i, 5.8);
        if (i === 0) ly -= 10; // keep the top label's second line clear of the chart
        const anchor = Math.abs(lx - cx) < 5 ? 'middle' : lx < cx ? 'end' : 'start';
        const val = e[a] === '' ? '–' : e[a];
        svg += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="currentColor" stroke-opacity="0.15"/>`;
        svg += `<text x="${lx}" y="${ly}" text-anchor="${anchor}" font-size="11" fill="currentColor"><title>${axisTooltip(a)}</title>`
            + `<tspan x="${lx}" dy="-0.2em">${a}</tspan><tspan x="${lx}" dy="1.1em" font-weight="bold">${val}</tspan></text>`;
    });
    const vals = MUSIC_AXES.map(a => Math.max(0, Math.min(5, parseFloat(e[a]) || 0)));
    svg += `<polygon points="${poly(vals)}" fill="var(--color-btn-primary)" fill-opacity="0.6" stroke="var(--color-border-accent)" stroke-width="1.5"/>`;
    return svg + '</svg>';
}

const MUSIC_TABLE_COLS = [
    ['title', 'Title'], ['artist', 'Artist'], ['producer', 'Producer'], ['genre', 'Genre'],
    ['date_listened', 'Listened'],
    ...MUSIC_AXES.map(a => [a, a.slice(0, 3).replace(/^./, ch => ch.toUpperCase())]),
];

async function loadMusicTable(tableId, filterGroupsId) {
    const table = document.getElementById(tableId);
    let entries;
    try {
        entries = (await fetchMusic()).filter(hasReview);
    } catch (err) {
        table.textContent = 'Could not load music list.';
        return;
    }

    let sortKey = 'date_listened', sortDir = -1;
    const selectedGenres = new Set();
    const expanded = new Set();

    // Genre filter buttons (OR across selected genres)
    const genres = [...new Set(entries.flatMap(e => parseGenres(e.genre)))].sort();
    const groups = document.getElementById(filterGroupsId);
    const group = document.createElement('div');
    group.className = 'filter-group';
    const opts = document.createElement('div');
    opts.className = 'filter-options';
    const title = document.createElement('span');
    title.className = 'filter-group-title';
    title.textContent = 'genre:';
    opts.appendChild(title);
    genres.forEach(g => {
        const b = document.createElement('button');
        b.className = 'filter-button';
        b.textContent = g;
        b.addEventListener('click', () => {
            selectedGenres.has(g) ? selectedGenres.delete(g) : selectedGenres.add(g);
            b.classList.toggle('active');
            draw();
        });
        opts.appendChild(b);
    });
    if (!genres.length) opts.append(' (none yet)');
    group.appendChild(opts);
    groups.appendChild(group);

    const sortVal = (e, k) => MUSIC_AXES.includes(k) ? parseFloat(e[k]) : (e[k] || '').toLowerCase();

    function draw() {
        table.textContent = '';
        const head = table.createTHead().insertRow();
        MUSIC_TABLE_COLS.forEach(([k, label]) => {
            const th = document.createElement('th');
            th.textContent = label + (k === sortKey ? (sortDir > 0 ? ' ▲' : ' ▼') : '');
            if (MUSIC_AXIS_DEFS[k]) { th.title = axisTooltip(k); th.className = 'has-def'; }
            th.addEventListener('click', () => {
                if (sortKey === k) sortDir = -sortDir;
                else { sortKey = k; sortDir = ['title', 'artist', 'producer', 'genre'].includes(k) ? 1 : -1; }
                draw();
            });
            head.appendChild(th);
        });

        const rows = entries
            .filter(e => !selectedGenres.size || parseGenres(e.genre).some(g => selectedGenres.has(g)))
            .sort((a, b) => {
                const x = sortVal(a, sortKey), y = sortVal(b, sortKey);
                const xb = x === '' || Number.isNaN(x), yb = y === '' || Number.isNaN(y);
                if (xb !== yb) return xb ? 1 : -1; // blanks last
                return (x < y ? -1 : x > y ? 1 : 0) * sortDir;
            });

        const body = table.createTBody();
        rows.forEach(e => {
            const tr = body.insertRow();
            tr.className = 'music-row';
            MUSIC_TABLE_COLS.forEach(([k]) => {
                tr.insertCell().textContent = k === 'genre' ? parseGenres(e.genre).join(', ') : e[k];
            });
            tr.addEventListener('click', () => { expanded.has(e) ? expanded.delete(e) : expanded.add(e); draw(); });
            if (!expanded.has(e)) return;

            tr.classList.add('open');
            const cell = body.insertRow().insertCell();
            cell.colSpan = MUSIC_TABLE_COLS.length;
            const wrap = document.createElement('div');
            wrap.className = 'music-detail';
            cell.appendChild(wrap);
            // review (+ play button) on the left, radar chart on the right
            const text = document.createElement('div');
            text.className = 'music-detail-text';
            const review = document.createElement('p');
            review.textContent = e.review;
            text.appendChild(review);
            const play = createPlayButton(e.url);
            if (play) text.appendChild(play);
            else if (e.url) { // non-YouTube link: plain link instead of a player
                const a = document.createElement('a');
                a.href = e.url;
                a.target = '_blank';
                a.textContent = 'open link ↗';
                text.appendChild(a);
            }
            wrap.appendChild(text);
            wrap.insertAdjacentHTML('beforeend', radarChart(e));
        });
        if (!rows.length) body.insertRow().insertCell().textContent = 'No entries.';
    }
    draw();
}
