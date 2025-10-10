const slides = document.querySelectorAll('.slide');
let current = 0;

const showSlide = (index) => {
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
};

document.querySelector('.prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

document.querySelector('.next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});
