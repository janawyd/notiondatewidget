document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("date");
    
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    
    dateElement.textContent = today;
});
