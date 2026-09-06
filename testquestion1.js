let balls;

function setup(){
    createCanvas(600, 400);
}

function draw() {
    background(220);
    if (mouse.presses()){
        spawnBall();
    }
}

function spawnBall(){
    balls = new Sprite(mouseX,mouseY,30);
    balls = 'dynamic';
    world.gravity.y = 5;
}