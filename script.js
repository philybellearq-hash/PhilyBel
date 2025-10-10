// Placeholder data for the slideshow (only one project is visible)
const projects = [
    {
        image: '1.jpg',
        number: '061: OASIS',
        description: 'Competition entry for a mixed use public campus, Renens, 1st prize !',
        collaboration: 'With Coralie Berchtold and Yann Junod, 2022-29'
    }
    // Add more project objects here to enable visible slideshow functionality
];

let currentProjectIndex = 0;

// Function to update the DOM with the current project's information
function updateProjectDisplay() {
    const project = projects[currentProjectIndex];
    
    // In a full implementation, all the text in the .project-details div would be updated here.
    document.getElementById('project-image').src = project.image;
    
    // For this exact replication, the text is hardcoded in index.html to match the screenshot.
    // Console log remains for testing functionality.
    console.log(`Displaying Project: ${project.number}`);
}

// Function to handle arrow navigation
function navigateSlide(direction) {
    
    // Update index for navigation (loops around)
    currentProjectIndex = (currentProjectIndex + direction + projects.length) % projects.length;
    
    // If you had more projects, you would call:
    // updateProjectDisplay();
    
    console.log(`Mapsd. New index: ${currentProjectIndex}. Content is static as only one image is available.`);
}

// Initial display on page load
document.addEventListener('DOMContentLoaded', () => {
    updateProjectDisplay();
});
