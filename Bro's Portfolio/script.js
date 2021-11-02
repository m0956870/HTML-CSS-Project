let checkBox = document.querySelector(".checkBtn");
let response = document.querySelector(".response");

checkBox.addEventListener("click", () => {
    if (response.style.display === "none") {
        response.style.display = "flex";
      } else {
        response.style.display = "none";
      }
})

let logo = document.querySelector('.logo');
// logo.addEventListener("click", () => {
//   if (body.style.display === "none") {
//       body.style.display = "flex";
//     } else {
//       body.style.display = "none";
//     }
// })