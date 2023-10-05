/* code adapted from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp */

function menuOpen() {
    var x = document.getElementById("nav-menu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }