const typingText = document.getElementById("typing-text");

const titles = [
    "Aspiring Cybersecurity Analyst",
    "Aspiring IT Professional",
    "Web Developer",
    "Threat Intelligence Enthusiast"
];

let titleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeTitle() {
    const currentTitle = titles[titleIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = currentTitle.substring(
        0,
        characterIndex
    );

    let delay = deleting ? 35 : 75;

    if (!deleting && characterIndex === currentTitle.length) {
        deleting = true;
        delay = 1800;
    } else if (deleting && characterIndex === 0) {
        deleting = false;

        titleIndex = (titleIndex + 1) % titles.length;

        delay = 350;
    }

    window.setTimeout(typeTitle, delay);
}

const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (!reduceMotion) {
    typeTitle();
} else {
    typingText.textContent = titles[0];
}