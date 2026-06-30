document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = this.getAttribute('href');

        if (target.startsWith("#")) {
            e.preventDefault();

            const section = document.querySelector(target);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Light IT!");
});

// Appointment Form
const appointmentForm = document.querySelector(".appointment form");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("✅ Thank you! Your appointment request has been received.");

        appointmentForm.reset();

    });

}

// Login Form
const loginForm = document.querySelector(".login form");

if (loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Login feature coming soon!");

    });

}

// Pay Button
const payButton = document.querySelector(".payment button");

if(payButton){

    payButton.addEventListener("click", function(){

        alert("Online payment gateway will be connected here.");

    });

}

// Card Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "scale(1)";

    });

});
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


// Current Year in Footer
const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} Light IT. All Rights Reserved.`;

}