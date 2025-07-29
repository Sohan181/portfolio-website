// scroll functionality when clicked on the navbar links 
document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-links");

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

// Active navLinks dynamically while scrolling through the sections 
document.addEventListener("DOMContentLoaded", function(){
    const navLinks = document.querySelectorAll(".nav-links");
    const sections = document.querySelectorAll("section");

    function activeNavLink() {
        let currentSectionId = "home";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 80;
            const sectionEnd = sectionTop + section.offsetHeight;

            if(window.scrollY >= sectionTop && window.scrollY < sectionEnd){
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            const href = link.getAttribute("href");

            if(href == currentSectionId){
                link.classList.add("text-blue-600", "font-bold", "border-b-2", "border-blue-600");
                link.classList.remove("text-gray-700")
            }
            else{
                link.classList.remove("text-blue-600", "font-bold", "border-b-2", "border-blue-600");
                link.classList.add("text-gray-700");
            }
        });
    }

    window.addEventListener("scroll",activeNavLink);
    activeNavLink();
})