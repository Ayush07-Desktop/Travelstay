// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector(".search-btn");
    const loginBtn = document.querySelector(".login-btn");

    // Handle Search Button Click
    searchBtn.addEventListener("click", () => {
        const location = document.querySelector('input[type="text"]').value;
        const checkIn = document.querySelectorAll('input[type="date"]')[0].value;
        const checkOut = document.querySelectorAll('input[type="date"]')[1].value;
        const guests = document.querySelector('input[type="number"]').value;

        if (location && checkIn && checkOut && guests) {
            alert(`Searching for: 
- Location: ${location}
- Check-in: ${checkIn}
- Check-out: ${checkOut}
- Guests: ${guests}`);
        } else {
            alert("Please fill out all search fields.");
        }
    });

    // Handle Login Button Click
    loginBtn.addEventListener("click", () => {
        alert("Redirecting to login page... (Not implemented yet)");
        // You can replace the alert with:
        // window.location.href = "login.html";
    });

    // Optional: Smooth scroll to sections
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Optional: Sticky Navbar Effect on Scroll (if needed)
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
