let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTexto(elemento, texto) {
    let elementoHtml =  document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario===numeroSecreto){
        asignarTexto("p",`Acertaste el numero en ${intentos} ${(intentos=== 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTexto("p","El numero secreto es menor");
        }else{
            asignarTexto("p","El numero secreto es mayor");
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value ="";
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTexto("p","Ya se sortearon todos los numeros")
    }
    else{


    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
function condicionesIniciales() {
    asignarTexto("h1","Juego del numero secreto");
    asignarTexto("p", `coloca un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    limpiarCaja();
    intentos = 1
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true")
}

condicionesIniciales();

