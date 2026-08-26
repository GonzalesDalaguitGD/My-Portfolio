const roles = [
    "Frontend Developer",
    "Digital Artist",
    "Multimedia Creator",
    
];

let index = 0;

const changingText = document.getElementById("changing-text");

setInterval(() => {

    // Fade out
    changingText.classList.add("fade-out");

    setTimeout(() => {

        // Change the text
        index++;

        if (index >= roles.length) {
            index = 0;
        }

        changingText.textContent = roles[index];

        // Fade back in
        changingText.classList.remove("fade-out");
        changingText.classList.add("fade-in");

        setTimeout(() => {
            changingText.classList.remove("fade-in");
        }, 400);

    }, 400);

}, 3000);