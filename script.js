// Tombol Dark Mode
const darkBtn = document.createElement("button");
darkBtn.textContent = "🌙 Gelap";
darkBtn.className = "dark-toggle";
document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Terang"
    : "🌙 Gelap";
});

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Efek scroll muncul animasi halus
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in-up, .fade-in").forEach(el => {
  observer.observe(el);
});

