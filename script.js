let options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numero_secreto = Math.floor(Math.random() * options.length )

document.querySelector("#text").innerHTML = "|||||||||||||||||||||||"

document.querySelector("#text").addEventListener("click", function() {
    document.querySelector("#text").innerHTML = "El número secreto es: " + numero_secreto
}) 

let vidas = 5;

setInterval(() => {

    document.getElementById("vidastext").innerHTML = "Vidas: " + vidas

}, 1);

function game() {

    let numero = document.querySelector("#input").value

    let texto = document.querySelector("#text")

    if (numero != numero_secreto) {
        vidas --
        document.getElementById("win").style.opacity = "1"
        document.getElementById("win").innerHTML = "Ese no era el numero correcto! Volve a probar denuevo!"
        document.getElementById("win").style.color = "red"
        setTimeout(() => {
            document.getElementById("win").style.opacity = "0"
        }, 1000);
    } else {
        document.getElementById("boton").hidden = "true"
        document.getElementById("win").style.opacity = "1"
        document.getElementById("win").innerHTML = "¡Felicidades! Ese era el numero correcto!"
        document.getElementById("win").style.color = "green"
        setTimeout(() => {
            location.reload()
        }, 2000);
    }

    if (vidas === 0) {
        // document.getElementById("win").style.opacity = "1"
        // document.getElementById("win").innerHTML = "Te quedaste sin vidas, juego terminado."
        // document.getElementById("win").style.color = "red"

        document.getElementById("boton").hidden = "true"

        setTimeout(() => {
            document.getElementById("win").style.opacity = "1"
            document.getElementById("win").innerHTML = "Te quedaste sin vidas, juego terminado."
            document.getElementById("win").style.color = "red"
        }, 3000);
    
        setTimeout(() => {
    
            location.reload()
    
        }, 5000);
    }

}
