getRandomNumber = () => Math.floor(Math.random() * 255);

const main = document.querySelector('main');
const spans = document.querySelectorAll('.container > span');

document.querySelector('.btn').addEventListener('click', () => {
    const r = getRandomNumber(), g = getRandomNumber(), b = getRandomNumber();

    main.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
    spans[0].textContent = `rgba(${r}, ${g}, ${b})`;
    spans[1].textContent = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
});