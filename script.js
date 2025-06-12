// Fun, interactive bookmarks page enhancements

// Show a custom welcome alert with emoji
window.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        alert("👋 Hey Avi! Welcome to your awesome bookmarks 🚀");
    }, 400);
});

// Animate links on page load with bounce effect
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");
    links.forEach((link, i) => {
        link.style.opacity = 0;
        link.style.transform = "translateY(30px) scale(0.95)";
        setTimeout(() => {
            link.style.transition = "opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)";
            link.style.opacity = 1;
            link.style.transform = "translateY(0) scale(1)";
        }, 300 + i * 120);

        // Add sparkle effect on hover
        link.addEventListener("mouseenter", () => {
            link.style.boxShadow = "0 0 16px 4px #a5b4fc";
        });
        link.addEventListener("mouseleave", () => {
            link.style.boxShadow = "";
        });
    });

    // Add a greeting at the top based on time of day with emoji
    const h1 = document.querySelector("h1");
    if (h1) {
        const now = new Date();
        let greeting = "Welcome";
        const hour = now.getHours();
        if (hour < 12) greeting = "🌅 Good morning";
        else if (hour < 18) greeting = "🌞 Good afternoon";
        else greeting = "🌙 Good evening";
        const greetElem = document.createElement("div");
        greetElem.textContent = greeting + "!";
        greetElem.style.fontSize = "1.3em";
        greetElem.style.marginBottom = "12px";
        greetElem.style.color = "#6366f1";
        greetElem.style.fontWeight = "bold";
        h1.parentNode.insertBefore(greetElem, h1);
    }
});
