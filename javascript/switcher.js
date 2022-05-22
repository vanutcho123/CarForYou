const swiBtn = document.querySelector(".switcher-btn");
swiBtn.addEventListener("click", e => {
  let swiContainer = document.querySelector(".switcher-container");
  swiContainer.classList.toggle("active");
});

let themeButtons = document.querySelectorAll(".switcher-theme-buttons");
themeButtons.forEach(color => {
  color.addEventListener("click", e => {
    let dataColor = color.getAttribute("data-color");
    let root = document.querySelector(":root");
    root.style.setProperty("--main-color", dataColor);
    root.style.transition = "all 0.4s";
  });
});
