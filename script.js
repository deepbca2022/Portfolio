<script>
  window.addEventListener("scroll", () => {
    const box = document.querySelector(".welcome-box");
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 100) {
      box.classList.add("reveal");
    }
  });
</script>