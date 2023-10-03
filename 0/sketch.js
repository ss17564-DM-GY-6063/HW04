let windowWidth = 600;
let windowHeight = 600;
let hr = 0;
let id = '';

function setup() {
  createCanvas(windowWidth, windowHeight);
}

let periodSec = 2;

function draw() {
  background(222,218,212);
  fill(0);

  let h = hour();
  let m = minute();
  let s = second();

  textSize(100);
  text( h + ': ' + m + ': ' + s, 100, height/2);
 
  let colorChange = map(s, 0, 59, 255, 0);
  noStroke()
  fill(0,0,colorChange);

  let sDiam = map(s, 0, 59, 200, 100);
  ellipse(480, sDiam, 20, 20);

  //the circle representing hour will expand the size
  noFill();
  stroke(colorChange,colorChange,colorChange)
  let hDiam = map(h, 0, 23, 0, 130);
  ellipse(150, 270, hDiam, hDiam);

  let mDiam = map(m, 0, 59, 0, 130);
  ellipse(300, 270, mDiam, mDiam);
}

