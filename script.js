// Swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
});

// FAQ + Horário de Atendimento
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});
