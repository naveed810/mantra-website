function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! Your message has been submitted successfully.");
            form.reset();
        });
    }
});