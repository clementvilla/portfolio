var toggle = document.querySelector(".nav-toggle"),
    nav = document.querySelector(".menu"),
    page = document.querySelector("body");

function doToggle() {
    this.classList.toggle('active');
    nav.classList.toggle('open');
    page.classList.toggle('noscroll');

}

toggle.addEventListener('click', doToggle);

