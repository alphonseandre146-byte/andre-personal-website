/* =====================================
   ANDRE ALPHONSE - JAVASCRIPT FEATURES
   ===================================== */

// FEATURE 1: DARK AND LIGHT MODE
const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "Dark Mode";
    } else {
        themeButton.textContent = "Light Mode";
    }
});


// FEATURE 2: DIGITAL CLOCK
function displayDigitalClock() {
    const currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("digitalClock").textContent =
        hours + ":" + minutes + ":" + seconds;
}

displayDigitalClock();
setInterval(displayDigitalClock, 1000);


// FEATURE 3: WELCOME MESSAGE BASED ON TIME
function displayWelcomeMessage() {
    const currentHour = new Date().getHours();
    let message;

    if (currentHour < 12) {
        message = "Good Morning! Welcome to my website.";
    } else if (currentHour < 18) {
        message = "Good Afternoon! Welcome to my website.";
    } else {
        message = "Good Evening! Welcome to my website.";
    }

    document.getElementById("welcomeMessage").textContent = message;
}

displayWelcomeMessage();


// FEATURE 4: PARAGRAPH BACKGROUND COLOUR CHANGER
const colourButtons = document.querySelectorAll(".colour-button");

colourButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedColour = button.getAttribute("data-colour");
        const paragraph = document.getElementById("aboutText");

        paragraph.style.backgroundColor = selectedColour;
        paragraph.style.padding = "12px";
        paragraph.style.borderRadius = "5px";
    });
});


// FEATURE 5: BACK TO TOP BUTTON
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});
