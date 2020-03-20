//a reminder to breathe in these weird times
let fonty;
let galactic;
let mode = 0;


function preload(){
fonty = loadFont('Quicksand.otf');
galactic = loadImage('galaxy.png');
}


function setup() {
  createCanvas(700, 700, WEBGL);
  textFont(fonty);
  stroke(50);
}


function draw() {
 if (mode == 0){
  background(66);
  textSize(32);
  fill(0, 102, 153, 41);
  push();
  translate(-100, -100);
  text('let us breathe together', 5, 80);
  pop();
  text('click to begin', 10, 90);
	} //start mode


if (mode == 1){
  background(1);
	camera(15, 100, 120 + sin(frameCount * 0.009) * 260, 0, 0, 0, 0, 1, 0);
	//camera(0, 0, sin(frameCount * 0.009) * 120, 0, 0, 0, 0, 1, 0); //kaleidescope mode
  
  push();
	fill(35, 215, 222, 77);
	rotateX(frameCount * -0.03);
	rotateY(frameCount * -0.03);
	box(60);  
  pop();
  
  push();
  rotateX(frameCount * 0.08);
  rotateY(frameCount * 0.09);
  noFill();
  stroke(255, 204, 0);
  strokeWeight(4);
  ellipse(0, 0, 80, 80);
  pop();

  push();
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.04);
   noFill();
  stroke(255, 204, 0);
  strokeWeight(4);
  ellipse(0, 0, 90, 90);
  pop();

  push();
  rotateX(frameCount * 0.009);
  rotateY(frameCount * 0.009);
   noFill();
  stroke(255, 204, 0);
  strokeWeight(4);
  ellipse(0, 0, 90, 90);
  pop();
  
  push();
  fill(104, 11, 150); //porple
  torus(50,84, 15, 10);
  pop();

  push();
  fill(79, 48, 217); //indigogo
  torus(47, 77, 14, 10);
  pop();

  push();
  fill(94, 233, 255); //bleu
  torus(44, 71, 14, 9);
  pop();

  push();
  fill(94, 255, 116); //grene
  torus(38, 67, 13, 9);
  pop();

  push();
  fill(255, 231, 94); //yallo
  torus(32, 56, 12, 8);
  pop();

  push();
  fill(255, 177, 95); //ornj
  torus(30, 53, 11, 7);
  pop();

  push();
  fill(205, 80, 80);//rad
  torus(28, 49, 10, 6);
  pop();

  push();
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  noStroke();
  texture(galactic);
  sphere(1000);
  pop();
}

if (mode == 2){
 push();
 camera();
 background(55);
 fill(0, 102, 153, 31);
 translate(-200, -200, -200);
  text('    thank you for', 10, 80);
  translate(0, 30);
  text(' breathing with me.', 10, 80);
  translate(0, 30);
 text('have a good day (:', 10, 80);
 pop();
}
if (mode >= 3){
  mode == 1;
}
}

function mousePressed(){
 
 updatemode();
  
}

function updatemode(){
  mode = mode + 1;
}

function touchStarted(){
	if (mode ==1){
		updatemode();
	}
}