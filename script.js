// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const links = document.querySelectorAll('.nav-links a');
const backdrop = document.getElementById('backdrop');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');

    // ✅ moved here
    if (backdrop) {
        backdrop.classList.toggle('active');
    }
});

// Close menu when clicking a link
links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');

        // ✅ moved here
        if (backdrop) {
            backdrop.classList.remove('active');
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (
        !hamburger.contains(e.target) &&
        !navLinks.contains(e.target)
    ) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');

        // ✅ moved here
        if (backdrop) {
            backdrop.classList.remove('active');
        }
    }
});

// Scroll reveal animation
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    // ✅ renamed variable (no conflict)
    reveals.forEach((item) => {
        const elementTop = item.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            item.classList.add("active");
        }
    });
};

window.addEventListener("scroll", reveal);
reveal();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        // ✅ added safety check
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Add click event for backdrop
if (backdrop) {
    backdrop.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        backdrop.classList.remove('active');
    });
}