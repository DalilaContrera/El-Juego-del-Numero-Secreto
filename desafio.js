//Desafio

/*0-Crear una función que muestre "¡Hola, mundo!" en la consola.
1-Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
2-Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
3-Crear una función que reciba tres números como parámetros y devuelva su promedio.
4-Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
5-Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.*/

 function saludo() {
  console.log('¡Hola, mundo!');
}
saludo();

function saludoDos(nombre) {
    console.log(`¡Hola ${nombre}!`);
}
saludoDos("Dalila");

function doble(numero) {
    return parseInt(console.log(numero*2));
}
doble(15);

function promedio(numero1, numero2, numero3) {
    return parseInt(console.log((numero1+numero2+numero3)/3));
}
promedio(7,8,9);

function mayor(numero1, numero2) {
    if (numero1 > numero2) {
       return console.log(`El mayor es el numero: ${numero1} `);
    } else {
       return console.log(`El mayor es el numero: ${numero2} `);
    }
}
mayor(15,24);

function miMultiplo(numero) {
    return parseInt(console.log(numero * numero));
}
miMultiplo(7);