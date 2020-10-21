let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

//Cria o background
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box);
}

//Cria a cobrinha
function criarCobrinha(){
    for(i=0; i<snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

//Desenha a comida
function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

//Função que identifica a tecla pressionada pelo jogador e atualiza a direção da cobrinha
function update(event){
    if((event.keyCode == 37) && (direction != "right")) direction = "left";
    if((event.keyCode == 38) && (direction != "down")) direction = "up";
    if((event.keyCode == 39) && (direction != "left")) direction = "right";
    if((event.keyCode == 40) && (direction != "up")) direction = "down";
}

function iniciarJogo(){

    //Faz a cobrinha reaparecer do outro lado da telacaso chegue na borda
    if((snake[0].x > 15*box) && (direction == "right")) snake[0].x = 0;
    if((snake[0].x < 0) && (direction == "left")) snake[0].x = 16*box;
    if((snake[0].y > 15*box) && (direction == "down")) snake[0].y = 0;
    if((snake[0].y < 0) && (direction == "up")) snake[0].y = 16*box;

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //Faz a cobrinha andar
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);