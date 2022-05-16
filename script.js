let colorPickerElem;
let colorPickerValue;
let p;
let btn;
let slider;
let nav;
let c;
let canvasDiv;
let canvasDivWidth;
let canvasDivHeight;
let rangePickerElem;
let rangePickerValue;

function setup() {
    canvasDiv = document.querySelector("#canvasDiv")
    canvasDivWidth = canvasDiv.offsetWidth;
    canvasDivHeight = canvasDiv.offsetHeigh;
    c = createCanvas(canvasDivWidth, windowHeight*0.75);
    c.parent('canvasDiv')

    background(255,255,255);
}

function salvar() {
    saveCanvas('Meu_desenho'+str(random(0, 1000)), 'jpg');
}
function limpar() {
    background(255,255,255);
}

function draw() {  

    colorPickerElem = document.querySelector("#colorPicker")
    colorPickerValue = colorPickerElem.value

    rangePickerElem = document.querySelector("#rangePicker")
    rangePickerValue = rangePickerElem.value
    rangePickerValue = map(rangePickerValue, 0, 100, 1, 150)

    if(mouseIsPressed == true){
        stroke(colorPickerValue);
        strokeWeight(rangePickerValue)
        line(mouseX, mouseY, pmouseX, pmouseY)
    }
    
}
function keyPressed() {
    if (keyCode == 83) {
        salvar();
    }else if(keyCode == 76){
        limpar();
    }
}