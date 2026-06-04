// Welcome Message

window.onload = function () {
    document.getElementById("welcomeMessage").textContent =
    "Welcome to my portfolio website!";
};


// Show / Hide Skills Section

const skillsBtn = document.getElementById("skillsBtn");
const skillsSection = document.getElementById("skillsSection");

if (skillsBtn && skillsSection) {

    skillsBtn.addEventListener("click", function () {

        if (skillsSection.style.display === "none") {

            skillsSection.style.display = "block";
            skillsBtn.textContent = "Hide Skills";

        } else {

            skillsSection.style.display = "none";
            skillsBtn.textContent = "Show Skills";

        }

    });

}


// Dynamic Greeting Message

const greetBtn = document.getElementById("greetBtn");
const greeting = document.getElementById("greeting");

if (greetBtn && greeting) {

    greetBtn.addEventListener("click", function () {

        greeting.textContent =
            "Thank you for visiting my portfolio!";

    });

}


// Contact Form Validation

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let name =
            document.getElementById("name").value.trim();

        let email =
            document.getElementById("email").value.trim();

        let message =
            document.getElementById("message").value.trim();

        if (name === "") {

            alert("Please enter your name.");
            return;

        }

        if (email === "") {

            alert("Please enter your email.");
            return;

        }

        if (message === "") {

            alert("Please enter your message.");
            return;

        }

        alert("Form submitted successfully!");

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        contactForm.reset();

    });

}


// Change Heading Color

const heading =
    document.getElementById("mainHeading");

if (heading) {

    heading.addEventListener("mouseover", function () {

        heading.style.color = "blue";

    });

    heading.addEventListener("mouseout", function () {

        heading.style.color = "";

    });

}


// Display Current Time

const timeBtn =
    document.getElementById("timeBtn");

const timeDisplay =
    document.getElementById("timeDisplay");

if (timeBtn && timeDisplay) {

    timeBtn.addEventListener("click", function () {

        let currentTime =
            new Date().toLocaleTimeString();

        timeDisplay.textContent =
            "Current Time: " + currentTime;

    });

}


//Dark Mode Toggle
const darkModeBtn =
document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});