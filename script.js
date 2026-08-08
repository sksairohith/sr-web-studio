document.addEventListener("DOMContentLoaded", function () {

    alert("Welcome to SR Web Studio!");

});
function toggleTheme() {
    document.body.classList.toggle("dark");
}
let topButton = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
