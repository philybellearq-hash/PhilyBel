document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider__slide');
    const prevButton = document.querySelector('.slider__prev');
    const nextButton = document.querySelector('.slider__next');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.style.display = 'none');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = 'flex';
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Auto-advance every 5 seconds
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
});
