let fecha = 2003 ;
let userInput = 0 ;
let intentos = 0 ;
let salida = "Hola mundo";

function adivinar() {
    userInput = document.getElementById("respuesta").value;

    if (userInput !== fecha) {

        salida = '${userInput} no es correcto.';
        intentos ++;
    }

    if (userInput == fecha) {
        salida ='${userInput} es correcto.';
    }

    document.getElementById("intentos").innerHTML = '${salida} blblabl'
}