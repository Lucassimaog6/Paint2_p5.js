let tamValue;
let colValue;

function setup() {
  let canvas = document.getElementById("canvas");
  let canvasW = canvas.clientWidth;
  let canvasH = canvas.clientHeight;
  let c = createCanvas(canvasW, canvasH + 100);
  c.parent("canvas");
  background(255, 255, 255);
}

function draw() {
  tamValue = document.getElementById("sliderTam").value;
  colValue = document.getElementById("colorCol").value;
  if (mouseIsPressed) {
    stroke(colValue);
    strokeWeight(tamValue);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyPressed() {
  if (key === 'l') {
    limpar();
  }
  if (key === 's') {
    salvar();
  }
}

function limpar() {
  background(255, 255, 255);
}
function salvar() {
  saveCanvas("Paint_Creation", "png");
}