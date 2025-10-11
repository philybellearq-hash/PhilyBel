// Data for 10 placeholder images and their descriptions
const projects = [
    {
        image: 'images/1.png',
        number: 'H62: FESTZELT',
        details: 'Design for a 140 sqm off-grid timber house, R. Valparaíso, 2025 - ongoing. <br>Keywords: Climate buffer. Wood. Earth. Circular construction. Water'
    },
    {
        image: 'images/2.jpg',
        number: 'BCN: BIODIVERSITY HUBS',
        details: 'Competition entry for the thermal enhancement of Partywalls in Barcelona, 2024, in collaboration with  <a href="#">FHAO and Sebastian Delgado</a> <br>Keywords: Trombé-Wall. Transspecies. Biodiversity; Adaptive Reuse'      
    },
    {
        image: 'images/3.jpg',
        number: 'D32: INFANTE',
        details: 'Refurbishment of a 80 sqm apartment, built, Santiago, 2022 <br>Keywords: Minimal intervention. Low-cost strategies'
    },
    {
        image: 'images/4.jpg',
        number: 'H68: WAVY',
        details: 'Neuchâtel, 2021-23<br />Picture by <a href="#">Pierre Marmy</a>'
    },
    {
        image: 'images/5.jpg',
        number: 'D42: MILLER',
        details: 'Refurbishment of a 60 sqm apartment, built, Santiago, 2017 <br>Keywords: Minimal intervention. Low-cost strategies'
    },
    {
        image: 'images/6.jpg',
        number: '020: FILTER HOUSE',
        details: 'Three large rooms in a small house, Geneva, 2021'
    },
    {
        image: 'images/7.jpg',
        number: '065: DRIFT',
        details: 'Exhibited at the Biennale of Territory, Lugano, 2022<br />With <a href="#">Arnaud Eubelen</a> and David Moser'
    },
    {
        image: 'images/8.jpg',
        number: 'D42: MILLER',
        details: 'Refurbishment of a 60 sqm apartment, built, Santiago, 2017 <br>Keywords: Minimal intervention. Low-cost strategies'
    },
    {
        image: 'images/9.jpg',
        number: '037: BEND IT LIKE IT’S HOT !',
        details: 'Family of galvanized steel tubular lamps,<br />Galerie Ruine, Geneva, 2020'
    },
    {
        image: 'images/10.jpg',
        number: '036: NEIGHBOURS',
        details: 'Specific transformation of a series of apartments, Zurich, 2020'
    }
];

let currentProjectIndex = 0;

// Function to update the image and text based on the current index
function updateProjectDisplay() {
    const project = projects[currentProjectIndex];
    
    // Update image source
    document.getElementById('project-image').src = project.image;
    
    // Update project description text
    const detailsElement = document.getElementById('project-details');
    detailsElement.innerHTML = `${project.number}<br />${project.details}`;
    
    console.log(`Displaying Project: ${project.number}`);
}

// Function to handle arrow navigation
function navigateSlide(direction) {
    // Update index for navigation (loops around)
    currentProjectIndex = (currentProjectIndex + direction + projects.length) % projects.length;
    
    updateProjectDisplay();
}

// Initial display on page load
document.addEventListener('DOMContentLoaded', () => {
    // NOTE: This assumes 'images/1.jpg' to 'images/10.jpg' exist in your folder structure.
    updateProjectDisplay();
});
