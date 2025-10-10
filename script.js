// Placeholder data for the slideshow (only one project is visible)
const projects = [
    {
        image: '1.jpg',
        number: '061: OASIS',
        description: 'Competition entry for a mixed use public campus, Renens, 1st prize !',
        collaboration: 'With Coralie Berchtold and Yann Junod, 2022-29'
    }
];

let currentProjectIndex = 0;

// Function to update the image source
function updateProjectImage() {
    const project = projects[currentProjectIndex];
    document.getElementById('project-image').src = project.image;
    console.log(`Displaying Project Image: ${project.image}`);
}

// Function to handle arrow navigation
function navigateSlide(direction) {
    currentProjectIndex = (currentProjectIndex + direction + projects.length) % projects.length;
    updateProjectImage();
    console.log(`Mapsd. New index: ${currentProjectIndex}. Content is currently static as only one image is available.`);
}

// Initial image display on page load
document.addEventListener('DOMContentLoaded', () => {
    updateProjectImage();
});
