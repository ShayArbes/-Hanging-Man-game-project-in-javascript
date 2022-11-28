
function init(){


    let username_p = window.document.getElementById("username_welcome");
    let currentUser = JSON.parse(localStorage.getItem("currentUser")).name
    username_p.innerHTML = currentUser
}
function bigImg(x) {
    x.style.background = "red";
    x.innerHTML = "התנתק";
  }
  function normalImg(x) {
    x.style.background = "rgb(0 145 31)";
    x.innerHTML = "התחבר";
  }