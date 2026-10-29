// Footer year
document.getElementById("yr").textContent = new Date().getFullYear();

// Agent-trace animation in the hero: reveal one step at a time
const steps = document.querySelectorAll("#trace li");
steps.forEach((li, i) => setTimeout(() => li.classList.add("show"), 400 + i * 550));

// Project filters
const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll("#projects .card");
chips.forEach((chip) =>
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    const f = chip.dataset.f;
    cards.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      card.classList.toggle("hidden", f !== "all" && !tags.includes(f));
    });
  })
);

// Fade sections in as they scroll into view
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".block, .stats").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});
