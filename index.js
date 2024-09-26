document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll('.card-heading');

    headings.forEach(heading => {
        heading.addEventListener('mouseenter', () => {
            setTimeout(() => {
                heading.style.color = '#007BFF'; // Change text color
                heading.style.setProperty('--underline-color', '#007BFF'); // Set underline color
                heading.classList.add('hover'); // Add hover class for underline
            }, 200); // Delay before the effect (200ms)
        });

        heading.addEventListener('mouseleave', () => {
            heading.style.color = ''; // Reset text color
            heading.classList.remove('hover'); // Remove hover class
        });
    });
});