//secret snake button event listener
document.querySelector('#secretSnake').addEventListener('mouseover', (event) => {
    document.querySelector('#secretSnake').innerHTML = 'Press Me';
});

document.querySelector('#secretSnake').addEventListener('click', (event) => {
    document.querySelector('.popup').classList.toggle('hidden');
});



class Snake{
    constructor(){
        //Define HTML elements for game
        this.board = document.querySelector('.gameBoard');
        this.food = this.generateFood();

        //event listener for movement
        document.addEventListener('keydown', (event) => this.handleKeyPress(event));

        //starting game variables
        this.snake = [{x: 10, y: 10}];
        this.direction = 'right';
        this.gameInterval = 0;
        this.gameSpeedDelay = 400;
        this.gameStarted = false;

        //show intial food and snake
        this.draw();
    }

    draw(){
        //clear any previous game elements
        this.board.innerHTML = '';
        this.drawSnake();
        this.drawFood();
    }

    drawSnake(){
        //for each segment of the snake create an HTML element in the game board grid
        this.snake.forEach(segment => {
            const snakeElement = this.createGameElement('div', 'snake');
            this.setPosition(snakeElement, segment);
            this.board.appendChild(snakeElement);
        });
    }

    drawFood(){
        const foodElement = this.createGameElement('div', 'food');
        this.setPosition(foodElement, this.food);
        this.board.appendChild(foodElement);
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
        const head = {...this.snake[0]};
        switch(this.direction){
            case 'right':
                head.x++;
                break;
            case 'left':
                head.x--;
                break;
            case 'up':
                head.y--;
                break;
            case 'down':
                head.y++;
                break;
        }

        this.snake.unshift(head);

        if(head.x === this.food.x && head.y === this.food.y){
            this.food = this.generateFood();
            clearInterval();
            this.gameInterval = setInterval(() =>{
                this.move();
                this.checkCollision();
                this.draw();
            }, this.gameSpeedDelay)
        }
        else {
            this.snake.pop();
        }
    }

    startGame(){
        this.gameStarted = true;

        this.gameInterval = setInterval(() => {
            this.move();
            //this.checkCollision();
            this.draw();
        }, this.gameSpeedDelay);
    }

    handleKeyPress(event){
        console.log(event.key);
        switch(event.key){
            case 'ArrowUp':
                this.direction = 'up';
                break;
            case 'ArrowDown':
                this.direction = 'down';
                break;
            case 'ArrowRight':
                this.direction = 'right';
                break;
            case 'ArrowLeft':
                this.direction = 'left';
                break;
        }
    }
}

let newSnakeGame = new Snake();
newSnakeGame.startGame();
