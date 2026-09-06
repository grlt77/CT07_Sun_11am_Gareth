let balls,floor;

function setup(){
    createCanvas(600, 400);
    floor = new Sprite(0,400,1200,100);
    floor.collider = 'static';
}

function draw() {
    background(220);
    if (mouse.presses()){
        spawnBall();
    }
}

function spawnBall(){
    balls = new Sprite(mouseX,mouseY,30);
    balls.collider = 'dynamic';
    world.gravity.y = 5;
    balls.bounciness = 1;
}