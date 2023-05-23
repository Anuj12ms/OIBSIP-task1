window.addEventListener("scroll", function () {
    document
        .getElementsByTagName("nav")[0]
        .classList
        .toggle("window-scroll", this.scrollY > 0)
})

//show hide faq answer

const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq
            .classList
            .toggle("open");
        //change icon
        const icon = faq.querySelector(".faq__icon i");
        if (icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus"
        } else {
            icon.className = "fa-solid fa-plus"
        }

    })
})

//show hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.getElementById("open-menu-btn");
const closeBtn = document.getElementById("close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block"
})
closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none"
})