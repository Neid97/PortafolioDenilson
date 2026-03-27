const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("is-open");
  navToggle.classList.toggle("is-open");
  document.body.classList.toggle("no-scroll");
});

navLinks.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    navLinks.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("nav")) {
    navLinks.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  }
});
