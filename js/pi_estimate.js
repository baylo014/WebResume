let r = 200;
let points = [];
let c_r = 3;
let slider;
let toDraw = false;

function setup() {
  let cav = createCanvas(600, 400);
  // cav.position(0, 100);
  frameRate(60);
  slider = createSlider(100, 10000, 1000);
  //slider.position(0, 135);
  noLoop();
}

function draw() {
  background(0);
  translate(width / 2, height / 2)
  stroke(255, 255, 255);
  fill(0, 0, 0);
  rect(-200, -200, 400, 400);
  fill(100, 100, 100);
  rect(200, -200, 100, 50, 20);
  fill(255, 255, 255);
  if (toDraw) {
    text("Pause", 230, -170);
  } else {
    text("Start", 230, -170);
    fill(100, 100, 100);
    rect(200, -150, 100, 50, 20)
    fill(255, 255, 255);
    text("Step", 230, -120)
  }

  noStroke();
  let x = random(-200, 200);
  let y = random(-200, 200);
  let count = 0;
  let in_tot = 0;

  if (points.length >= slider.value()) {
    points = points.slice(1, slider.value() + 1)
  }
  if (sqrt(sq(x) + sq(y)) < r) {
    points.push([x, y, 1]);
  } else {
    points.push([x, y, 0]);
  }
  ellipse(x, y, 10, 10);
  points.forEach(function (item, index, array) {
    if (item[2] == 1) {
      fill(0, 255, 0);
      ellipse(item[0], item[1], c_r, c_r);
      in_tot += 1;
    } else {
      fill(255, 0, 0);
      ellipse(item[0], item[1], c_r, c_r);
    }
    count += 1;
  });
  fill(255, 255, 255)
  text("Pi estimate: " + nfc((in_tot / count) * 4, 3), -300, -150);
  text("# of dots: " + slider.value(), -300, -170);
}

function mousePressed() {
  // text("# of dots: " + slider.value(), -300, -170);
  if ((500 <= mouseX && mouseX <= 600) && (0 <= mouseY && mouseY <= 50)) {
    if (toDraw) {
      noLoop();
      toDraw = false;
      redraw();
    } else {
      loop();
      toDraw = true;
    }
  }
  if ((500 <= mouseX && mouseX <= 600) && (50 <= mouseY && mouseY <= 100)) {
    if (!toDraw) {
      redraw();
    }
  }
}
