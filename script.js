document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".cta-button");
    buttons.forEach(btn => {
        btn.style.opacity = "0";
        btn.style.transition = "opacity 0.6s ease, transform 0.2s ease, box-shadow 0.2s ease";
        setTimeout(() => {
            btn.style.opacity = "1";
        }, 100);

        btn.addEventListener("click", function (e) {
            e.preventDefault();
            btn.style.transform = "scale(1.15)";
            btn.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";

            setTimeout(() => {
                btn.style.transform = "scale(1)";
                btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
                const href = btn.getAttribute("href");
                if (href) {
                    window.location.href = href;
                }
            }, 200);
        });
    });

    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        if(link.getAttribute("href") === currentPage) {
            link.classList.add("active-page");
        }
    });
});
