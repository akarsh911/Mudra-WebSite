// Add an event listener for scroll
window.addEventListener('scroll', function() {
    var logoWrapper = document.querySelector('.logo-wrapper');
    var scrollPosition = window.scrollY;
    var logoHeight = logoWrapper.offsetHeight;
    var logoWidth = logoWrapper.offsetWidth;
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the diagonal transformation values
    var translate = -scrollPosition / maxScroll * (logoWidth + logoHeight);

    // Apply the diagonal transformation
    logoWrapper.style.transform = `translate(${translate}px, ${translate}px)`;

    // Check if the scroll position is greater than or equal to the height of the logo wrapper
    if (scrollPosition >= logoHeight) {
        // Add a class to fix the logo position in the header
        logoWrapper.classList.add('fixed-logo');
    } else {
        // Remove the fixed class if the scroll position is less than the height of the logo wrapper
        logoWrapper.classList.remove('fixed-logo');
    }
});
