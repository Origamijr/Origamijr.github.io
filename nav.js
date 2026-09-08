/**
 * Generate navigation bar HTML
 * @param {string} activePage - The text content of the active nav link (e.g., 'Play', 'About', 'Create', 'Docs')
 * @returns {string} HTML for the navbar
 */
function createNavbar(activePage) {
    const navItems = [
        { text: 'Home', href: 'index.html', icon: 'home.png' },
        { text: 'Research', href: 'research.html', icon: 'research.png' },
        { text: 'Projects', href: 'projects.html', icon: 'projects.png' },
        { text: 'Blog', href: 'blog.html', icon: 'blog.png' },
        { text: 'CV', href: 'assets/files/CV.pdf', icon: 'cv.png' }
    ];

    const navLinks = navItems
        .map(item => {
            const activeClass = item.text === activePage ? ' active' : '';

            return `
                <li>
                    <a href="${item.href}" class="nav-link${activeClass}">
                        <img
                            src="assets/images/nav_icons/${item.icon}"
                            alt=""
                            class="nav-icon"
                        >
                        
                        <span>${item.text}</span>
                    </a>
                </li>
            `;
        })
        .join('');

    return `
        <nav class="navbar">
            <div class="nav-container">
                <a href="../index.html" class="nav-brand">
                    <h1>Kevin Huang</h1>
                </a>
                <ul class="nav-menu">
                    ${navLinks}
                </ul>
            </div>
        </nav>`;
}
