let mouseVel = 0;
let velEaseModule = 0.9;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(222,218,212)
}

// basic canvas of Mondrian
function draw() {
  noStroke();
  fill(0);
rect(width/3,0,20,height);
rect(0,height/3*2,width,20);
rect(width/3*2, height/3*2, 30, height/3);
fill(240,215,0);
rect(width/3*2 + 30, height/3*2 + 20, width/3, height/3);
}

function mouseClicked(){
  fill(195,35,37);
  rect(mouseX, mouseY, 200, 200);
}

function mouseDragged(){
  mouseVel *= velEaseModule;
  mouseVel += (1 - velEaseModule) * dist(mouseX, mouseY, pmouseX, pmouseY);

  stroke(random(255)); 
  noStroke();

let c1 = color(0,63,127);
let c2 = color(195,35,37);
let c = lerpColor(c1, c2, pow(0.96, mouseVel));
fill(c,random(255));
  
rect(mouseX, mouseY, 10, 10);
}


function keyPressed() {
  if (key == 's') {
    saveCanvas('myCanvas', 'jpg');
  } else if (key == 'r') {
    background(222,218,212);
  }
}