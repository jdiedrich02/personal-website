// Function to update active link based on scroll position
function updateActiveLink() {
    const sidebarLinks = document.querySelectorAll('#sideBar a');
    const mainContentSections = document.querySelectorAll('#mainContent h2');

    mainContentSections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (rect.top <= 100 && rect.bottom > 100) {
            sidebarLinks.forEach(link => link.classList.remove('active'));
            sidebarLinks[index].classList.add('active');
        }
    });
}

// Call the function to update active link when the page scrolls
window.addEventListener('scroll', updateActiveLink);