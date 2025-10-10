// Define your slides: add more objects for more projects/images
const slides = [
  {
    img: 'images/1.jpg',
    title: '061: OASIS',
    desc: 'Competition entry for a mixed use public campus, Renens, 1st prize !<br>With Coralie Berchtold and Yann Junod, 2022–29'
  },
  // Example: add more slides here!
  // {
  //   img: 'images/2.jpg',
  //   title: '062: Another Project',
  //   desc: 'Description for another project...'
  // }
];

let current = 0;

function showSlide(idx) {
  const slide = slides[idx];
  document.getElementById('slide-image').src = slide.img;
  document.getElementById('project-title').innerText = slide.title;
  document.getElementById('project-desc').innerHTML = slide.desc;
}

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});
document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});
// Clicking the image also advances to next slide
document.getElementById('slide-image').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

// Initial display
showSlide(current);
