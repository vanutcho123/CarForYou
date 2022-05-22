const tabs = document.querySelectorAll(".gallery-tab-link");
const galleryMain = document.querySelector(".gallery-main");
const galleryContents = document.querySelectorAll(".gallery-content");
galleryMain.addEventListener("click", e => {
  e.preventDefault();
  const id = e.target.dataset.id;
  if (id) {
    tabs.forEach(tab => {
      tab.classList.remove("tab-active");
      e.target.classList.add("tab-active");

      //hide other gallery content
      galleryContents.forEach(galleryContent => {
        galleryContent.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    });
  }
});
