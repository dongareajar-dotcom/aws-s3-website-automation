document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to my AWS S3 Static Website!");

    const dateElement = document.getElementById("datetime");

    function updateDateTime() {
        const now = new Date();
        dateElement.innerHTML = "Current Time: " + now.toLocaleString();
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});
