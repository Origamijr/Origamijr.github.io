/**
 * Generate navigation bar HTML
 * @param {string} activePage - The text content of the active nav link (e.g., 'Play', 'About', 'Create', 'Docs')
 * @returns {string} HTML for the navbar
 */
function createNavbar(activePage) {
    const navItems = [
        { text: 'Home', href: 'index.html' },
        { text: 'Research', href: 'research.html' },
        { text: 'Projects', href: 'projects.html' },
        { text: 'Blog', href: 'blog.html' },
        { text: 'CV', href: 'assets/files/CV.pdf' }
    ];

    const navLinks = navItems
        .map(item => {
            const activeClass = item.text === activePage ? ' active' : '';
            return `<li><a href="${item.href}" class="nav-link${activeClass}">${item.text}</a></li>`;
        })
        .join('');

    return `
        <nav class="navbar">
            <div class="nav-container">
                <a href="../index.html" class="nav-brand"><h1>Kevin Huang</h1></a>
                <ul class="nav-menu">
                    ${navLinks}
                </ul>
            </div>
        </nav>`;
}
