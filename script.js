
// ABDULAZIZ DIGITAL SOLUTIONS

// 1. Welcome message
console.log("Welcome to Abdulaziz Digital Solutions!");

// 2. Select the Get Started button
const startButton = document.querySelector(".hero .btn");

// 3. Add click function
startButton.addEventListener("click", function() {

    alert("Thank you for choosing Abdulaziz Digital Solutions!");

});

// 4. Show current year
const currentYear = new Date().getFullYear();

console.log("Copyright Year: " + currentYear);

// WHATSAPP CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

  const whatsappNumber = "2348162766467";

    const whatsappMessage =
        "NEW CUSTOMER ENQUIRY\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Service: " + service + "\n" +
        "Message: " + message;

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

});

// MOBILE MENU FUNCTION

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function() {

    mainNav.classList.toggle("open");

    const isOpen = mainNav.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu after selecting a link

document.querySelectorAll("#mainNav a").forEach(function(link) {

    link.addEventListener("click", function() {

        mainNav.classList.remove("open");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});