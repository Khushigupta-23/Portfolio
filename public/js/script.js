document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('[data-toggle="collapse"]');
    const navMenu = document.querySelector('#navbarNav');

    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });
});


