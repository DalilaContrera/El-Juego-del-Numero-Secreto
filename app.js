let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
   if (numeroDeUsuario === numeroSecreto) {
     asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
     document.getElementById('reiniciar').removeAttribute('disabled');

   } else {
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El numero Secreto es Menor');
    } else {
        asignarTextoElemento('p', 'El numero Secreto es Mayor');
    }
    intentos++;
    limpiarCampo();
   }
   return; 
};

function limpiarCampo() {
    let valorCampo = document.querySelector('#valorUsuario');
     valorCampo.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta en la lista 
    if (listaNumerosSorteados.include(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {  //si no esta en la lista lo agrega
        listaNumerosSorteados.push(numeroGenerado);
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'El Juego del Numero Secreto');
    asignarTextoElemento(`'p', 'Indica un numero del 1 al ${numeroMaximo}`);    
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar campo
    limpiarCampo();
    condicionesIniciales();
    //desabilitar boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

 