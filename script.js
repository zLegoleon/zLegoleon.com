/* =========================================================
   ZLEGOLEON™ CENTRAL SITE SCRIPT
   ========================================================= */


/* =========================================================
   SITE ROOT
   Automatically figures out where the website lives.

   This means it works both for:

   https://example.github.io/

   and:

   https://example.github.io/zLegoleon/
   ========================================================= */

const SCRIPT_URL = document.currentScript.src;

const SITE_ROOT = new URL("./", SCRIPT_URL).pathname;


/* Make this available to other scripts/pages */

window.siteUrl = function (path = "") {

    return SITE_ROOT + path.replace(/^\/+/, "");

};


/* =========================================================
   NAVIGATION CONFIGURATION

   ADD NEW SECTIONS HERE.
   That's it.
   ========================================================= */

const NAV_ITEMS = [

    {
        label: "Home",
        path: ""
    },

    {
        label: "Store",
        path: "store/"
    },

    {
        label: "Gallery",
        path: "gallery/"
    },

    {
        label: "About",
        path: "about/"
    }

    // Example future section:
    //
    // {
    //     label: "Games",
    //     path: "games/"
    // }

];


/* =========================================================
   CURRENT PAGE
   ========================================================= */

function normalizePath(path) {

    return path
        .replace(SITE_ROOT, "")
        .replace(/^\/+/, "")
        .replace(/\/+$/, "");

}


function isNavItemActive(item) {

    const currentPath = normalizePath(
        window.location.pathname
    );

    const targetPath = item.path
        .replace(/^\/+/, "")
        .replace(/\/+$/, "");


    /* Homepage */

    if (targetPath === "") {

        return currentPath === "";

    }


    /* Section pages and subpages */

    return (
        currentPath === targetPath ||
        currentPath.startsWith(targetPath + "/")
    );

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function renderNavigation() {

    const container =
        document.getElementById("site-nav");


    if (!container) {
        return;
    }


    const links = NAV_ITEMS.map(item => {

        const active =
            isNavItemActive(item)
                ? "active"
                : "";


        return `
            <a
                href="${siteUrl(item.path)}"
                class="${active}"
            >
                ${item.label}
            </a>
        `;

    }).join("");


    container.innerHTML = `

        <header class="navbar">

            <div class="nav-container">

                <a
                    href="${siteUrl()}"
                    class="logo"
                >
                    zLegoleon<span>™</span>
                </a>


                <div class="nav-right">

                    <nav
                        class="nav-links"
                        id="navLinks"
                    >
                        ${links}
                    </nav>


                    <a
                        href="${siteUrl("cart/")}"
                        class="cart-button"
                        aria-label="Shopping cart"
                    >
                        🛒

                        <span
                            class="cart-count hidden"
                            id="cartCount"
                        >
                            0
                        </span>
                    </a>


                    <button
                        class="theme-button"
                        id="themeButton"
                        aria-label="Toggle theme"
                    >
                        ◐
                    </button>


                    <button
                        class="menu-button"
                        id="menuButton"
                        aria-label="Open navigation"
                        aria-expanded="false"
                    >
                        ☰
                    </button>

                </div>

            </div>

        </header>

    `;


    /*
     * The navbar has just been created.
     *
     * If store.js is loaded on this page,
     * update the cart badge immediately.
     *
     * This makes the red (1) / (2) / etc.
     * persist when navigating between pages.
     */

    if (typeof updateCartCount === "function") {

        updateCartCount();

    }

}


/* =========================================================
   FOOTER
   ========================================================= */

function renderFooter() {

    const container =
        document.getElementById("site-footer");


    if (!container) {
        return;
    }


    const links = NAV_ITEMS.map(item => {

        return `
            <a href="${siteUrl(item.path)}">
                ${item.label}
            </a>
        `;

    }).join("");


    container.innerHTML = `

        <footer class="footer">

            <div class="footer-container">

                <div class="footer-brand">

                    <div class="logo">
                        zLegoleon<span>™</span>
                    </div>

                    <p>
                        Products you probably don't need.
                    </p>

                    <p>
                        © ${new Date().getFullYear()}
                        zLegoleon™
                    </p>

                </div>


                <div class="footer-links">

                    ${links}

                    <a href="${siteUrl("cart/")}">
                        Cart
                    </a>

                </div>

            </div>

        </footer>

    `;

}


/* =========================================================
   THEME
   ========================================================= */

const THEME_KEY = "zlegoleon-theme";


function setTheme(theme) {

    if (theme === "light") {

        document.body.classList.add("light");

        localStorage.setItem(
            THEME_KEY,
            "light"
        );

    }

    else {

        document.body.classList.remove("light");

        localStorage.setItem(
            THEME_KEY,
            "dark"
        );

    }

}


function loadTheme() {

    const savedTheme =
        localStorage.getItem(THEME_KEY);


    if (savedTheme === "light") {

        document.body.classList.add("light");

    }

    else {

        document.body.classList.remove("light");

    }

}


function setupThemeButton() {

    const button =
        document.getElementById("themeButton");


    if (!button) {
        return;
    }


    button.addEventListener("click", () => {

        const isLight =
            document.body.classList.contains("light");


        setTheme(
            isLight
                ? "dark"
                : "light"
        );

    });

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

    const button =
        document.getElementById("menuButton");

    const nav =
        document.getElementById("navLinks");


    if (!button || !nav) {
        return;
    }


    button.addEventListener("click", () => {

        const open =
            nav.classList.toggle("open");


        button.setAttribute(
            "aria-expanded",
            open
        );


        button.textContent =
            open
                ? "✕"
                : "☰";

    });


    /* Close menu after clicking a link */

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            button.setAttribute(
                "aria-expanded",
                "false"
            );

            button.textContent = "☰";

        });

    });

}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderNavigation();

        renderFooter();

        loadTheme();

        setupThemeButton();

        setupMobileMenu();

    }
);