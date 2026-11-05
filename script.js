
// Select elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Toggle Mobile Menu
menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active");

    // Update accessibility state
    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});

// Close Menu When Link Is Clicked
const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});

// Close Menu When Clicking Outside
document.addEventListener("click", function(event) {

    if (
        !menuToggle.contains(event.target) &&
        !navLinks.contains(event.target)
    ) {

        navLinks.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});
