
function preload() {
  img = loadImage('2.jpg');
  gif_createImg = createImg("jellyfish.gif");
  gif_createImg1 = createImg("jellyfish1.gif");
  gif_createImg2= createImg("jellyfish2.gif");
  gif_createImg3 = createImg("jellyfish3.gif");
  gif_createImg4 = createImg("jellyfish4.gif");
  gif_createImg5 = createImg("jellyfish4.gif");
  }

function setup() {
  createCanvas(1000, 1400);

x = width / 3;
y = height;
a = width / 4;
b = height;
c = width / 50;
d = height;
e = width / 70;
f = height;
g = width / 2;
h = height;

var button = createButton("reset");
button.mousePressed(resetSketch);

}

function resetSketch() {
  
  image(gif_createImg, a, b, 300, 300);
  a = a + random(-1, 1);
  // Moving up at a constant speed
  b = b - 1.1;
  
  // Reset to the bottom
  if (b < 0) {
    b = height;
    }

  image(gif_createImg1, x, y, 400, 400);
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - .8;
  
  // Reset to the bottom
  if (y < -40) {
    y = height;
  }
  
  image(gif_createImg2, c, d, 500, 550);
  c = c + random(-1, 1);
  // Moving up at a constant speed
  d = d - .8;
  
  // Reset to the bottom
  if (d < -1) {
    d = height;
  }

  image(gif_createImg3, e, f, 300, 300);
  e = e + random(-1, 1);
  // Moving up at a constant speed
  f = f - 1;
  
  // Reset to the bottom
  if (f < -1) {
    return;
  }

  image(gif_createImg4, g, h, 500, 550);
  g = g + random(-1, 1);
  // Moving up at a constant speed
  h = h - .7;
  
  // Reset to the bottom
  if (h < -1) {
    h = height;
  }
}

function draw() {
  image(img, 0, 0, 1000, 1400);

  textFont("Arial")
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text("CLICK RESET TO RESTART RACE AT BOTTOM OF PAGE", width/2, 40);

  fill(255);
  rect(30, 60, 95, 35);
  fill(255);
  rect(170, 60, 95, 35);
  fill(255);
  rect(310, 60, 95, 35);
  fill(255);
  rect(440, 60, 95, 35);
  fill(255);
  rect(580, 60, 95, 35);
  fill(255);
  rect(720, 60, 95, 35);
  fill(255);
  rect(860, 60, 95, 35);

  image(gif_createImg, a, b, 300, 300);
  a = a + random(-1, 1);
  // Moving up at a constant speed
  b = b - 1.1;
  
  // Reset to the bottom
  if (b < 0) {
    b = height;
    
}

  image(gif_createImg1, x, y, 400, 400);
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - .8;
  
  // Reset to the bottom
  if (y < -40) {
    y = height;
  }
  
  image(gif_createImg2, c, d, 500, 550);
  c = c + random(-1, 1);
  // Moving up at a constant speed
  d = d - .8;
  
  // Reset to the bottom
  if (d < -1) {
    d = height;
  }

  image(gif_createImg3, e, f, 300, 300);
  e = e + random(-1, 1);
  // Moving up at a constant speed
  f = f - 1;
  
  // Reset to the bottom
  if (f < -1) {
    f = height;
  }

  image(gif_createImg4, g, h, 500, 550);
  g = g + random(-1, 1);
  // Moving up at a constant speed
  h = h - .7;
  
  // Reset to the bottom
  if (h < -1) {
    h = height;
  }


}

