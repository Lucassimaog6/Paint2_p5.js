var mq = window.matchMedia( "(min-width: 600px)" );
if (mq.matches) {
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
    tamValue = document.getElementById("DsliderTam").value;
    colValue = document.getElementById("DcolorCol").value;
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
}else{
  let tamValue;
  let colValue;

  function setup() {
    let canvas = document.getElementById("canvas");
    let canvasW = canvas.offsetWidth;
    let canvasH = canvas.offsetHeight;
    let c = createCanvas(canvasW, canvasH + 70);
    c.parent("canvas");
    background(255, 255, 255);
  }

  function draw() {
    tamValue = document.getElementById("MsliderTam").value;
    colValue = document.getElementById("McolorCol").value;
    if (mouseIsPressed) {
      stroke(colValue);
      strokeWeight(tamValue);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }

  function limpar() {
    background(255, 255, 255);
  }
  function salvar() {
    saveCanvas("Paint_Creation", "png");
  }
}
