// Data for 10 placeholder images and their descriptions
const projects = [
    {
        image: 'images/1.jpg',
        number: '061: OASIS',
        details: 'Competition entry for a mixed use public campus, Renens, <span class="highlight">1st prize !</span><br />With Coralie Berchtold and Yann Junod, 2022-29'
    },
    {
        image: 'images/2.jpg',
        number: '031: HOUSE FOR ALMOST EVERYTHING',
        details: 'Zurich, 2020-23<br />Picture by <a href="#">Ciro Miguel</a>'
    },
    {
        image: 'images/3.jpg',
        number: '048: SCHOPF',
        details: 'Transformation of an agricultural shed, Zurich, 2021-22'
    },
    {
        image: 'images/4.jpg',
        number: '050: MAXIMUM HOUSE',
        details: 'Neuchâtel, 2021-23<br />Picture by <a href="#">Pierre Marmy</a>'
    },
    {
        image: 'images/5.jpg',
        number: '067: UPLIFT',
        details: 'Transformation of an agricultural house, Neuchâtel, 2022-24, in collaboration with <a href="#">Marginalia</a>'
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
        number: '038: AREAL DEPOT DEUTWEG',
        details: 'Conservation, extension and transformation of a former tram depot. Winterthur, 2021'
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
