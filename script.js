function setup() {
    let canvas = document.getElementById("canvas")
    let canvasW = canvas.offsetWidth
    let canvasH = canvas.offsetHeight
    let c =createCanvas(canvasW,canvasH)
    c.parent("canvas")
    background(255,255,255)
  }
  
  function draw() {  
    if(mouseIsPressed){
        stroke(10)
        strokeWeight(10)
        line(mouseX, mouseY, pmouseX, pmouseY)
    }
  }