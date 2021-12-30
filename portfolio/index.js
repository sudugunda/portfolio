function myFunction() {

    var x = document.getElementById("nav-menu");
    if (x.style.display !== "none") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}