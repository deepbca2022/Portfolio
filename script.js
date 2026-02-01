function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// existing scroll animation
window.addEventListener("scroll", () => {
  const box = document.querySelector(".welcome-box");
  if (!box) return;

  const boxTop = box.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (boxTop < windowHeight - 100) {
    box.classList.add("reveal");
  }
});
