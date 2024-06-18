const sunIcon = document.querySelector('#sun');
const moonIcon = document.querySelector('#moon');
const sunIcon2 = document.querySelector('#sun2');
const moonIcon2 = document.querySelector('#moon2');
const body = document.querySelector('body');

sunIcon.addEventListener('click', () => {
    body.classList.remove('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
});

moonIcon.addEventListener('click', () => {
    body.classList.add('dark');
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
});
sunIcon2.addEventListener('click', () => {
    body.classList.remove('dark');
    sunIcon2.classList.add('hidden');
    moonIcon2.classList.remove('hidden');
});

moonIcon2.addEventListener('click', () => {
    body.classList.add('dark');
    moonIcon2.classList.add('hidden');
    sunIcon2.classList.remove('hidden');
});