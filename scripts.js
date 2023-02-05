let myButton = document.querySelector("button");

myButton.addEventListener("click", function () {
  openWindow("popup.html");
});

function openWindow(url) {
  var win = window.open(url, "popup", "fullscreen=yes,location=no,toolbar=no");
  win.document.body.style.margin = 0;
  win.document.body.style.padding = 0;
  win.document.body.style.height = window.innerHeight + "px";
  win.document.body.style.width = window.innerWidth + "px";
  win.focus();
}
