const btnOpn = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const header = document.querySelector(".header");
const navLink = document.querySelectorAll(".nav-link");
const year = document.querySelector(".year");

btnOpn.addEventListener("click", function () {
    header.classList.toggle("nav-open");
});

btnClose.addEventListener("click", function () {
    header.classList.toggle("nav-open");
});

navLink.forEach(function (link) {
    link.addEventListener("click", function (e) {
        console.log(this);
        if (header.classList.contains("nav-open")) {
            header.classList.remove("nav-open");
        }
    });
});

const date = new Date();
year.textContent = date.getFullYear();
