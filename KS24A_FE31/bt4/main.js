const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});