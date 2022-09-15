/*const h1 = document.querySelector(`h1`);
const btn = document.querySelector(`button`);

btn.addEventListener(`click`, function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
})*/

const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    h1.style.color = "black";
    if(r < 50 || g < 50 || b <50){
        h1.style.color = "white";
    }
    return `rgb(${r}, ${g}, ${b})`;
}

