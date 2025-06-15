// Animate links on page load
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");
    links.forEach((link, i) => {
        link.style.opacity = 0;
        setTimeout(() => {
            link.style.transition = "opacity 0.7s cubic-bezier(.4,2,.6,1)";
            link.style.opacity = 1;
        }, 200 + i * 120);
    });

    // Add a greeting at the top based on time of day
    const h1 = document.querySelector("h1");
    if (h1) {
        const now = new Date();
        let greeting = "Welcome";
        const hour = now.getHours();
        if (hour < 12) greeting = "Good morning";
        else if (hour < 18) greeting = "Good afternoon";
        else greeting = "Good evening";
        const greetElem = document.createElement("div");
        greetElem.textContent = greeting + "!";
        greetElem.style.fontSize = "1.2em";
        greetElem.style.marginBottom = "10px";
        greetElem.style.color = "#6366f1";
        h1.parentNode.insertBefore(greetElem, h1);
    }
});
