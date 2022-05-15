let colorPicker;
let p;
let btn;
let slider;
let nav;

function setup() {
    createCanvas(displayWidth, displayHeight);

    colorPicker = createColorPicker('#000000');
    colorPicker.position(5, 50);

    p = createP("Escolha a cor do pincel aqui:")
    p.style('font-size', '20px');
    p.style('font-family', 'sans-serif');
    p.position(5, 0);

    p = createP("Clique 'S' para Salvar! ")
    p.style('font-size', '20px');
    p.style('font-family', 'sans-serif');
    p.position(300, 0);   
    
    p = createP("Clique 'L' para Limpar! ")
    p.style('font-size', '20px');
    p.style('font-family', 'sans-serif');
    p.position(600, 0);

    p = createP("Deslize para mudar o tamanho do pincel: ")
    p.style('font-size', '20px');
    p.style('font-family', 'sans-serif');
    p.position(900, 0);

    slider = createSlider(1, 100, 10, 5)
    slider.position(900, 50)
    slider.style('width', '100px')


    background(255,255,255);
}

function salvar() {
    saveCanvas('Meu_desenho'+str(random(0, 1000)), 'jpg');
}

function draw() {  
    if(mouseIsPressed == true && mouseY > 80){
        stroke(colorPicker.color());
        strokeWeight(slider.value())
        line(mouseX, mouseY, pmouseX, pmouseY)
    }
    
}
function keyPressed() {
    if (keyCode == 83) {
      salvar();
    }else if(keyCode == 76){
        background(255,255,255)
    }
}