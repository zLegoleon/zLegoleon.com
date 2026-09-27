// ==========================================
// zLegoleon™ RANDOM PAGE SYSTEM
// ==========================================

// Add new troll pages here.
//
// Example:
//
// "/plushie/"
// "/calculator/"
// "/something-completely-stupid/"

const trollPages = [
    "plushie/",
    "free-money/",
    "calculator/",
    "download/",
    "generator/",
    "mystery/"
];


// Pick a random page
function goToRandomPage() {

    const randomIndex =
        Math.floor(Math.random() * trollPages.length);

    const selectedPage =
        trollPages[randomIndex];

    window.location.href = selectedPage;
}


// Navbar random button
const randomButton =
    document.getElementById("randomButton");

if (randomButton) {
    randomButton.addEventListener(
        "click",
        goToRandomPage
    );
}


// Hero random button
const randomHeroButton =
    document.getElementById("randomHeroButton");

if (randomHeroButton) {
    randomHeroButton.addEventListener(
        "click",
        goToRandomPage
    );
}


// ==========================================
// EXTRA LITTLE DETAIL
// ==========================================

// Make the page title occasionally change.

const titles = [
    "zLegoleon™ — Probably Legitimate",
    "zLegoleon™ — Please Don't Sue Us",
    "zLegoleon™ — 100% Real Website",
    "zLegoleon™ — We Have A Website",
    "zLegoleon™ — Everything Is Fine"
];

let titleIndex = 0;

setInterval(() => {

    titleIndex =
        (titleIndex + 1) % titles.length;

    document.title =
        titles[titleIndex];

}, 5000);
