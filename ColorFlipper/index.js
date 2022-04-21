getRandomNumber = () => Math.floor(Math.random() * 255);

document.querySelector('.btn').addEventListener('click', () => {
    let r = getRandomNumber(), g = getRandomNumber(), b = getRandomNumber();
    let color = `rgba(${r}, ${g}, ${b})`;
    document.querySelector('main').style.backgroundColor = color;
    document.querySelector('.container > h4 > span').textContent = color;
});