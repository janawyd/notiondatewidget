document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("date");
    const greetingElement = document.getElementById("greeting");

    // Format Date (Tuesday, February 25, 2025)
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    
    // Time-based Greeting
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning, Jana ☕";
    } else if (hours < 18) {
        greeting = "Good Afternoon, Jana ☀️";
    } else {
        greeting = "Good Evening, Jana 🌙";
    }

    // Update HTML
    dateElement.textContent = today;
    greetingElement.textContent = greeting;
});

