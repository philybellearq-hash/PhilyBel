// Data for 10 placeholder images and their descriptions
const projects = [
    {
        image: 'images/1.png',
        number: 'H62: FESTZELT',
        details: 'Design for a 140 sqm off-grid timber house, V Region, Chile, 2025 - ongoing. <br>Keywords: Climate buffer. Wood. Earth. Circular construction. Water'
    },
    {
        image: 'images/2.gif',
        number: 'BCN: BIODIVERSITY HUBS',
        details: 'Competition entry for the thermal enhancement of Partywalls in Barcelona, 2024, in collaboration with FHAO and Sebastian Delgado <br>Keywords: Trombe-Wall. Transspecies. Biodiversity; Adaptive Reuse'      
    },
    {
        image: 'images/3.png',
        number: 'D32: INFANTE',
        details: 'Refurbishment of a 80 sqm apartment, built, Santiago, 2022 <br>Keywords: Minimal intervention. Low-cost strategies'
    },
    {
        image: 'images/4.png',
        number: 'H68: WAVY',
        details: 'Design for a 140 sqm adaptable timber house, V Region, Chile, 2025 - ongoing. <br>Keywords: CLT. Future adaptability. Circular construction. Radiation + thermal mass'
    },
    {
        image: 'images/5.jpg',
        number: 'D42: MILLER',
        details: 'Refurbishment of a 60 sqm apartment, built, Santiago, 2017 <br>Keywords: Minimal intervention. Low-cost strategies'
    },
    {
        image: 'images/6.jpg',
        number: 'H69A: A HANGAR IN THE WOODS',
        details: 'Design for a 140 sqm steel frame house using a hangar construction system, V Region, Chile, 2025 - ongoing. <br>Keywords: Readymades. Prefab. Thermic convection.'
    },
    {
        image: 'images/7.gif',
        number: 'M1: KULTURWERKSTATT EUROPA',
        details: 'Master thesis, design for a culture and language hub in Aachen,<br> KIT, Prof. M. Morger, 2018 <br>Keywords: Building in context. Positive/Negative'
    },
    {
        image: 'images/8.jpg',
        number: 'D42: MILLER',
        details: 'Refurbishment of a 60 sqm apartment, built, Santiago, 2017 <br>Keywords: Minimal intervention. Low-cost strategies'
    },
    {
        image: 'images/9.jpg',
        number: 'M2: SUNSET BLVD',
        details: 'Master thesis, design for an affordable housing mixed-use megastructure,<br> KIT, Prof. M. Frohn, 2018 <br>Keywords: Design through filmtheory. Flexible Floorplans. Future adaptability'
    },
    {
        image: 'images/10.jpg',
        number: 'M3: OPEN CODES',
        details: 'Design entry for an exhibition at ZKM Karlsruhe curated bei Peter Weibel,<br> KIT, Prof. M. Frohn, 2018, in collaboration with Juan Manuel Salgado <br>Keywords: Concept through translation. Grid. Virtual space'
    },
    {
        image: 'images/11.png',
        number: 'ARCH+258: URBANE PRAXIS',
        details: 'You can find our competition entry for Abbrechen, Abbrechen published here, in collaboration with FHAO and Studio RAPIET, 2024. <br>Keywords: Adaptive Reuse. Video. Participative design'
    },
  {
        image: 'images/12.png',
        number: 'H67B: TROMBE HOUSE',
        details: 'Design for a 100 sqm. house. A shape conditioned by legal zoning, V Region, Chile, 2025 - ongoing. <br>Keywords: Readymades. Trombe-Wall. Legalparameters.'
    },
       {
        image: 'images/13.png',
        number: 'H69B: BAY HOUSE',
        details: 'Design for a 110 sqm. house. A thermally activated earth wall and two pods, V Region, Chile, 2025 - ongoing. <br>Keywords: Rammed earth. Timber. Water reuse.'
    },

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
