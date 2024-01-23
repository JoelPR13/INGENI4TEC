document.addEventListener("DOMContentLoaded", function () {
    var mainHeader = document.getElementById("mainHeader");

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            mainHeader.classList.add("navbar-scrolled");
        } else {
            mainHeader.classList.remove("navbar-scrolled");
        }
    });
});