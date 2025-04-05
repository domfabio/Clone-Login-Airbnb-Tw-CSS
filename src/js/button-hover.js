document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    button.style.background = `radial-gradient(circle at ${x}% ${y}%, #F32C55, #E31C5F, #BD1E59)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.background = "";
  });
});
