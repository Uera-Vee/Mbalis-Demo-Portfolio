document.addEventListener("DOMContentLoaded", () => {
  const heroImg = document.querySelector(".hero-img");
  setTimeout(() => {
    heroImg.classList.add("shrink");
  }, 500); // wait 0.5s before shrinking
});
