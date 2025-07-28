document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId  = this.getAttribute("href");
            const targetSection = document.getElementById(targetId);

            if(targetSection){
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
});