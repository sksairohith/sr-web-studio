document.addEventListener("DOMContentLoaded", function () {

    alert("Welcome to SR Web Studio!");

});
function toggleTheme() {
    document.body.classList.toggle("dark");
}
let topButton = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️";
    } else {
        darkModeBtn.textContent = "🌙";
    }
});
const revealElements = document.querySelectorAll(".scroll-reveal");

function revealOnScroll() {
    revealElements.forEach(function(element) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
// Animated counters when visible
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.getAttribute("data-target"));
            let current = 0;

            const updateCounter = function() {

                const increment = Math.max(1, Math.ceil(target / 50));

                if (current < target) {

                    current += increment;

                    if (current > target) {
                        current = target;
                    }

                    counter.textContent = current;

                    setTimeout(updateCounter, 30);
                }
            };

            updateCounter();

            counterObserver.unobserve(counter);
        }
    });

});

counters.forEach(function(counter) {
    counterObserver.observe(counter);
});
// Portfolio image slider

const portfolioImages = [
    "https://via.placeholder.com/600x350?text=Website+Project+1",
    "https://via.placeholder.com/600x350?text=Website+Project+2",
    "https://via.placeholder.com/600x350?text=Website+Project+3"
];

let currentImage = 0;

function showImage() {
    document.getElementById("sliderImage").src =
        portfolioImages[currentImage];
}

function nextImage() {
    currentImage++;

    if (currentImage >= portfolioImages.length) {
        currentImage = 0;
    }

    showImage();
}

function previousImage() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = portfolioImages.length - 1;
    }

    showImage();
}
// Contact form validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector("textarea").value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (message === "") {
            alert("Please describe your website project.");
            return;
        }

        alert("Thank you! Your message has been received.");

        contactForm.reset();
    });
}
