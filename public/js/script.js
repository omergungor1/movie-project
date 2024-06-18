const sunIcon = document.querySelector('#sun');
const moonIcon = document.querySelector('#moon');
const body = document.querySelector('body');

sunIcon.addEventListener('click', () => {
    body.classList.remove('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');

    // Save the theme preference for the user
    localStorage.setItem('theme', 'light');
});

moonIcon.addEventListener('click', () => {
    body.classList.add('dark');
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');

    // Save the theme preference for the user
    localStorage.setItem('theme', 'dark');
});

// Check the user's theme preference
// const theme = localStorage.getItem('theme');
// console.log(theme);
// if (theme === 'dark') {
//     body.classList.add('dark');
//     moonIcon.classList.add('hidden');
//     sunIcon.classList.remove('hidden');
// } else {
//     body.classList.remove('dark');
//     moonIcon.classList.add('hidden');
//     sunIcon.classList.remove('hidden');
// }