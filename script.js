// Placeholder data for the slideshow (only one project is visible)
const projects = [
    {
        image: '1.jpg',
        number: '061: OASIS',
        description: 'Competition entry for a mixed use public campus, Renens, 1st prize !',
        collaboration: 'With Coralie Berchtold and Yann Junod, 2022-29'
    }
    // More projects would be added here to enable real navigation
    /*
    {
        image: '2.jpg',
        number: '085: EURYDICE',
        description: 'Selected competition for the transformation and extension of the performance hall in Renens, 2nd price',
        collaboration: 'With jo taillieu architecten and Coralie Berchtold, INFRA'
    }
    */
];

let currentProjectIndex = 0; // Starts at the first (and only) project

// Function to update the DOM with the current project's information
function updateProjectDisplay() {
    const project = projects[currentProjectIndex];
    
    // Update image source (currently just '1.jpg')
    document.getElementById('project-image').src = project.image;
    
    // For a real slideshow, you'd update the text content here too.
    // For this single-image example, the text is hardcoded in index.html for simplicity 
    // and to perfectly match the visible screenshot.

    console.log(`Displaying Project: ${project.number}`);
}

// Function to handle arrow navigation
function navigateSlide(direction) {
    // In a real multi-project scenario, this would update currentProjectIndex
    // currentProjectIndex = (currentProjectIndex + direction + projects.length) % projects.length;
    // updateProjectDisplay();
    
    // Since we only have one image, we'll just log an action.
    if (direction > 0) {
        console.log("Navigated to the next (placeholder) slide.");
    } else {
        console.log("Navigated to the previous (placeholder) slide.");
    }
    
    // To match the requirement for a functional slideshow, 
    // we'll simulate the index change even if the image remains the same.
    currentProjectIndex += direction;
    
    if (currentProjectIndex < 0) {
        currentProjectIndex = projects.length - 1;
    } else if (currentProjectIndex >= projects.length) {
        currentProjectIndex = 0;
    }

    // A real site would call updateProjectDisplay() here.
    // Since only one image/text set is provided, the visible content doesn't change.
}

// Initial display on page load
document.addEventListener('DOMContentLoaded', () => {
    updateProjectDisplay();
});
