var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.lineWidth = "2";
pincel.lineCap = "round";

function limpiarPantalla() {
    pincel.clearRect(0,0,600,400);
    pincel.fillStyle = "#2B3031";
    pincel.fillRect(0,0,600,400);
}

function dibujarBaseHorca() {
    limpiarPantalla();  
    pincel.fillStyle = "white";
    pincel.fillRect(150, 365, 300, 20);
    pincel.fillStyle = "white";
    pincel.fillRect(190, 345, 20, 20);  
}

function dibujarHorca() {      

    pincel.beginPath();
    pincel.moveTo(200, 365);
    pincel.lineTo(200, 20);
    pincel.strokeStyle = "white";
    pincel.stroke();
    
    pincel.beginPath();
    pincel.moveTo(200, 20);
    pincel.lineTo(300, 20);
    pincel.strokeStyle = "white";
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(300, 20);
    pincel.lineTo(300, 50);
    pincel.strokeStyle = "white";
    pincel.stroke()
}

function dibujarCabeza() {
    pincel.beginPath();
    pincel.arc(300, 85, 35, 0, 2*3.14);
    pincel.strokeStyle = "white";
    pincel.stroke();
}

function dibujarCuerpo() {
    pincel.beginPath();
    pincel.moveTo(300, 120);
    pincel.lineTo(300, 240);
    pincel.strokeStyle = "white";
    pincel.stroke();
}

function dibujarBrazoIzquierdo() {
    pincel.beginPath();
    pincel.moveTo(300, 120);
    pincel.lineTo(260, 180);
    pincel.strokeStyle = "white";
    pincel.stroke();
}

function dibujarBrazoDerecho() {
    pincel.beginPath();
    pincel.moveTo(300, 120);
    pincel.lineTo(340, 180);
    pincel.strokeStyle = "white";
    pincel.stroke();
}

function dibujarPiernaIzquierda() {
    pincel.beginPath();
    pincel.moveTo(300, 240);
    pincel.lineTo(260, 300);
    pincel.strokeStyle = "white";
    pincel.stroke();
}

function dibujarPiernaDerecha() {
    pincel.beginPath();
    pincel.moveTo(300, 240);
    pincel.lineTo(340, 300);
    pincel.strokeStyle = "white";
    pincel.stroke();
}

function dibujarCarita() {
    pincel.beginPath();
    pincel.moveTo(295, 70);
    pincel.lineTo(280, 85);
    pincel.strokeStyle = "white";
    pincel.stroke();
    pincel.beginPath();
    pincel.moveTo(280, 70);
    pincel.lineTo(295, 85);
    pincel.strokeStyle = "white";
    pincel.stroke();
    
    pincel.beginPath();
    pincel.moveTo(305, 70);
    pincel.lineTo(320, 85);
    pincel.strokeStyle = "white";
    pincel.stroke();
    pincel.beginPath();
    pincel.moveTo(320, 70);
    pincel.lineTo(305, 85);
    pincel.strokeStyle = "white";
    pincel.stroke();
    
    pincel.beginPath();
    pincel.arc(300, 120, 25, 4, 5.4, false);
    pincel.strokeStyle = "white";
    pincel.stroke();
}

function dibujarAhorcado() {
    limpiarPantalla();
    dibujarBaseHorca()
    dibujarHorca();
    dibujarCabeza();
    dibujarCuerpo();
    dibujarBrazoIzquierdo();
    dibujarBrazoDerecho();
    dibujarPiernaIzquierda();
    dibujarPiernaDerecha();
    dibujarCarita();
}

function dibujarSalvado() {
    limpiarPantalla();
    dibujarCabeza();
    dibujarCuerpo();
    dibujarPiernaIzquierda()
    dibujarPiernaDerecha()

    pincel.beginPath();
    pincel.moveTo(300, 120);
    pincel.lineTo(230, 110);
    pincel.strokeStyle = "white";
    pincel.stroke();
    
    pincel.beginPath();
    pincel.moveTo(300, 120);
    pincel.lineTo(370, 110);
    pincel.strokeStyle = "white";
    pincel.stroke();    

    pincel.beginPath();
    pincel.arc(285, 75, 5, 0, 2*3.14);
    pincel.strokeStyle = "white";
    pincel.stroke();

    pincel.beginPath();
    pincel.arc(315, 75, 5, 0, 2*3.14);
    pincel.strokeStyle = "white";
    pincel.stroke();
    
    pincel.beginPath();
    pincel.arc(300, 80, 25, -4, -5.4, true);
    pincel.strokeStyle = "white";
    pincel.stroke();
}

function dibujarCanvas(intentosRestantes) {
    switch(intentosRestantes) {
        
        case 7:
            dibujarHorca();           
            break;
    
        case 6:
            dibujarCabeza();
            break;
    
        case 5:
            dibujarCuerpo();
            break;
            
        case 4:
            dibujarBrazoIzquierdo();
            break;

        case 3:
            dibujarBrazoDerecho();
            break;

        case 2:
            dibujarPiernaIzquierda();
            break;

        case 1:
            dibujarPiernaDerecha();
            break;

        case 0:
            dibujarAhorcado();
            break;
    }
}