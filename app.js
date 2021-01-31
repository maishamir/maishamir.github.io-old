// let toggle = document.querySelector(".toggle-theme");
// document.body.classList.remove("teal");

// toggle.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (document.body.classList.contains("teal")) {
//     // Turning the theme off:
//     document.body.classList.remove("teal");

//     // Reverse logic on the button text, so that users can turn
//     // the theme back on:
//     toggle.innerText = "Turn theme on";
//   } else {
//     document.body.classList.add("teal");
//     toggle.innerText = "Turn theme off";
//   }
// });

// // if()

var checkbox = document.querySelector("input[type=checkbox]");
document.body.classList.remove("teal");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("teal");
  } else {
    document.body.classList.remove("teal");
  }
});
