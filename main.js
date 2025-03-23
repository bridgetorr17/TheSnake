//secret snake button event listener
document.querySelector('#secretSnake').addEventListener('mouseover', (event) => {
    document.querySelector('#secretSnake').innerHTML = 'Press Me';
});

document.querySelector('#secretSnake').addEventListener('click', (event) => {
    document.querySelector('.popup').classList.toggle('hidden');
});

class Snake{
    constructor(){

    }

    
}