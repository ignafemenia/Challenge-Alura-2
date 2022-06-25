var palabraRandom = ["COMPUTER", "PROGRAMMING", "GAME", "TECHNOLOGY", "ROBOT", "PAGE", "KEYBOARD", "PHONE", "MONITOR", "MOUSE", "NOTEBOOK", "JAVASCRIPT", "BOOSTRAP", "WINDOWS", "CODE", "MYSQL", "STRING", "FUNCTION", "BOOLEAN", "GITHUB", "OBJECT", "ELEMENT", "CLASS", "LIST", "STYLE", "SEARCHER", "REPOSITORIES", "VALUE", "ARRAY", "CHALLENGE", "FORKED", "EDUCATION", "APPLICATION", "DEVELOPER", "NUMBER", "CONSOLE", "CONDITION", "RESOULT", "PROJECT", "PLAYER", "IT", "LAYOUT", "ISSUES", "LINKEDIN", "BLOCKCHAIN", "DEBUGGING", "ERROR", "JAVA", "SINTAX", "COFFEE", "MOZILLA", "SOFTWARE", "HARDWARE", "MACHINE", "SOLVES", "WIZARD", "WORLD", "FALSE",];

var filtro;
var palabraSecreta;
var letrasPalabraSecreta;
var intentosRestantes;
var intentosRestantesHTML = document.querySelector(".intentos-restantes");
var letrasTeclado = document.querySelector(".lista-letras").childNodes;
var camposPalabra = document.querySelector(".palabra");
var campoLetra;

var botonNuevaPalabra = document.querySelector(".nueva-palabra");
botonNuevaPalabra.addEventListener('click', function() {
    filtro = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    palabraSecreta = palabraRandom[Math.floor(Math.random() * palabraRandom.length)];
    letrasPalabraSecreta = 0;
    intentosRestantes = 8;
    intentosRestantesHTML.innerHTML = "Remaining Attempts: " + intentosRestantes;
    botonRendirse.classList.remove("botonOff");
    
    letrasTeclado.forEach(element => {
        element.className = "letra";
    });

    while(camposPalabra.firstChild) {
        camposPalabra.removeChild(camposPalabra.lastChild);
    }    

    for(var i = 0; i < palabraSecreta.length; i++) {
        campoLetra = document.createElement("span");
        campoLetra.classList.add("campo-letras");
        camposPalabra.appendChild(campoLetra);
    }
    dibujarBaseHorca();
});

var botonRendirse = document.querySelector(".rendirse");
botonRendirse.addEventListener('click', function() {
    intentosRestantesHTML.innerHTML = "You died <br> 😱😳";
    for(var i = 0; i < palabraSecreta.length; i++) {
        camposPalabra.childNodes[i].innerHTML = palabraSecreta[i];
        camposPalabra.childNodes[i].className = "palabra-ahorcado-mal";
    }
    inhabilitar();
    dibujarAhorcado();
});

function inhabilitar() {
    botonRendirse.classList.add("botonOff");
    filtro = "";
    letrasTeclado.forEach(element => {
        element.className = "letra-bloqueada";
    });
}

function mostrarPalabraSecreta() {
    for(var i = 0; i < palabraSecreta.length; i++) {
        if(letrasPalabraSecreta == palabraSecreta.length) {
            camposPalabra.childNodes[i].className = "palabra-ahorcado-bien";
            intentosRestantesHTML.innerHTML = "You are saved <br> 🤗🤗🤗";
            inhabilitar();
            dibujarSalvado();
        }
        if(intentosRestantes == 0) {
            camposPalabra.childNodes[i].innerHTML = palabraSecreta[i];
            camposPalabra.childNodes[i].className = "palabra-ahorcado-mal";
            intentosRestantesHTML.innerHTML = "You died.. <br> 😰🥺";
            inhabilitar();
            dibujarAhorcado();
        }
    }
}

function introducirLetras(key) {    
    var idLetra = "#" + key;
    var keyLetra = document.querySelector(idLetra);

    if(palabraSecreta.includes(key)) {
        for(var i = 0; i < palabraSecreta.length; i++) {
            if(key == palabraSecreta[i]) {
                letrasPalabraSecreta++;
                camposPalabra.childNodes[i].innerHTML = palabraSecreta[i];
                keyLetra.className = "letra-correcta";
            }            
        }    
    } else {
        intentosRestantes--;
        intentosRestantesHTML.innerHTML = "Remaining Attempts: " + intentosRestantes;
        keyLetra.className = "letra-incorrecta";
        dibujarCanvas(intentosRestantes);
    }
    mostrarPalabraSecreta();
}

var keyLetra = document.querySelectorAll(".letra");
    keyLetra.forEach(letra => {
    letra.addEventListener('click', function(event) {
        var key = event.target.textContent;
        introducirLetras(key);
    });
});

var teclaPresionada = document.querySelector("html");
teclaPresionada.addEventListener("keydown", function(event) {
    var key = event.key.toUpperCase();
    if(filtro.includes(key)) {
        introducirLetras(key);
        filtro = filtro.replace(key, '');
    }
});