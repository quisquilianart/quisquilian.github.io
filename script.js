// Function to adjust image width based on scroll position
function adjustImageWidth() {
const images = document.querySelectorAll('.object-contain');
console.log(images)

images.forEach(image => {
    const rect = image.getBoundingClientRect();
    const halfwayPoint = window.innerHeight / 2;
    const scrollPosition = window.scrollY || window.pageYOffset;
    const elementPosition = rect.top + scrollPosition;

    if (elementPosition < halfwayPoint) {
    // Calculate width based on scroll position below halfway mark
    const scrollPercentage = Math.min(1, (halfwayPoint - elementPosition) / halfwayPoint);
    const newWidth = 50 + (50 * scrollPercentage); // Adjust as needed
    image.style.opacity = scrollPercentage;
    } else {
    // Above halfway mark, make full size
    image.style.opacity = 1;
    }
});
}

// Attach scroll event listener
window.addEventListener('scroll', adjustImageWidth);

// Initial adjustment on page load
adjustImageWidth();