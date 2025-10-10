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

// Function to update the image source
function updateProjectImage() {
    const project = projects[currentProjectIndex];
    document.getElementById('project-image').src = project.image;
    
    // Log for confirmation in the console
    console.log(`Displaying Project Image: ${project.image}`);
}

// Function to handle arrow navigation
function navigateSlide(direction) {
    
    // Update index for navigation (loops around)
    currentProjectIndex = (currentProjectIndex + direction + projects.length) % projects.length;
    
    // In a full site, you would call updateProjectImage() and update the text below the image.
    // For this exact replication with only one image, we log the action.
    updateProjectImage();
    
    console.log(`Mapsd. New index: ${currentProjectIndex}. Content is currently static as only one image is available.`);
}

// Initial image display on page load
document.addEventListener('DOMContentLoaded', () => {
    // If you had more projects, this would ensure the first image loads correctly.
    updateProjectImage();
});
