//secret snake button event listener
document.querySelector('#secretSnake').addEventListener('mouseover', (event) => {
    document.querySelector('#secretSnake').innerHTML = 'Press Me';
});

document.querySelector('#secretSnake').addEventListener('click', (event) => {
    document.querySelector('.popup').classList.toggle('hidden');
    let newGame = new Snake();
});

//Define HTML elements for game
const board = document.querySelector('.gameBoard');
let snake = [{x: 10, y: 10}];

class Snake{
    constructor(){
        this.draw();
    }

    draw(){
        board.innerHTML = '';
        this.drawSnake();
        this.drawFood();
    }

    drawSnake(){
        snake.forEach(segment => {
            const snakeElement = this.createGameElement('div', 'snake');
            this.setPosition(snakeElement, segment);
            board.appendChild(snakeElement);
        });
    }

    drawFood(){
        const foodElement = this.createGameElement('div', 'food');
        this.setPosition(foodElement, this.generateFood());
        board.appendChild(foodElement);
    }

    generateFood(){
        const x = Math.floor(Math.random() * 15) + 1;
        const y = Math.floor(Math.random() * 15) + 1;
        return {x, y};
    }

    createGameElement(tag, className){
        const element = document.createElement(tag);
        element.className = className;
        return element;
    }

    setPosition(element, position){
        element.style.gridColumn = position.x;
        element.style.gridRow = position.y;
    }

    move(){
        
    }

}

