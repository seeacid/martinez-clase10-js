//class personaje

class Personaje {
    constructor(nombre, raza, clase, fuerza, agilidad, inteligencia, ) {

        this.nombre = nombre
        this.raza = raza
        this.clase = clase
        this.fuerza = fuerza
        this.agilidad = agilidad
        this.inteligencia = inteligencia
        this.nivel = 20
        this.vida = 100
        this.damage = 0
        this.finalDamage = 0
        this.image = ""
        switch (this.clase) {
            case "Guerrero":
                this.image = "img/char0.png"
                break
            case "Mago":
                this.image = "img/char1.png"
                break
            case "Cazador":
                this.image = "img/char2.png"
                break
        }








    }



    atacar() {
        this.damage = ((aleatorio(this.nivel, (this.nivel * 2))) + (this.fuerza * 2))



    }
}

//Api
const geturl = "http://hp-api.herokuapp.com/api/characters"

//Variable de nombre
let inputNombre = ""



//variables de clase
let clases = ["Guerrero", "Mago", "Cazador"]
let claseActual = 0
let clase = document.getElementById("claseNombre")
let btnClaseIzq = document.getElementById("btnClaseIzq")
let btnClaseDer = document.getElementById("btnClaseDer")
let claseImg = document.getElementById("ClaseImg")
claseImg.src = "img/char" + claseActual + ".png"

//varibale de raza
let razas = ["Humano", "Elfo", "Orco"]
let razaActual = 0
let raza = document.getElementById("raceNombre")
let btnRaceIzq = document.getElementById("btnRaceIzq")
let btnRaceDer = document.getElementById("btnRaceDer")

//variables de estadisticas

let fuerzaV = document.getElementById("fuerzaV")
let agilidadV = document.getElementById("agilidadV")
let inteligenciaV = document.getElementById("inteligenciaV")
let fuerza = 0
let agilidad = 0
let inteligencia = 0

//varibale de creacion de personaje










//Funcion de numero aleatorio

function aleatorio(menor, mayor) {
    let posibilidades = mayor - menor;
    let aleatorio = Math.random() * (posibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return menor + aleatorio;
}



// Funciones de STats

function calculaStats() {
    if (raza.textContent == "Humano") {
        fuerza = aleatorio(6, 10) + 3
    } else if (raza.textContent == "Elfo") {
        fuerza = aleatorio(6, 10) + 1
    } else {
        fuerza = aleatorio(6, 10) + 8
    }

    if (raza.textContent == "Humano") {
        agilidad = aleatorio(6, 10) + 5
    } else if (raza.textContent == "Elfo") {
        agilidad = aleatorio(6, 10) + 3
    } else {
        agilidad = aleatorio(6, 10) + 2
    }

    if (raza.textContent == "Humano") {
        inteligencia = aleatorio(6, 10) + 3
    } else if (raza.textContent == "Elfo") {
        inteligencia = aleatorio(6, 10) + 7
    } else {
        inteligencia = aleatorio(6, 10) + 1
    }
}

function mostrarStats() {
    fuerzaV.textContent = fuerza
    agilidadV.textContent = agilidad
    inteligenciaV.textContent = inteligencia

}

// funcion de nombre

function crearPersonaje() {
    inputNombre = document.getElementById("inputNombre").value
    let personaje1 = new Personaje(inputNombre, raza.textContent, clase.innerText, fuerza, agilidad, inteligencia, claseActual)

    localStorage.setItem("personaje", JSON.stringify(personaje1))


}


//funciones de clase

function izquierda() {
    if (claseActual == 0) {
        claseActual = 2
    } else {
        claseActual = claseActual - 1
    }
    clase.textContent = clases[claseActual]
    claseImg.src = "img/char" + claseActual + ".png"



}

function derecha() {
    if (claseActual == 2) {
        claseActual = 0
    } else {
        claseActual = claseActual + 1
    }
    clase.textContent = clases[claseActual]
    claseImg.src = "img/char" + claseActual + ".png"



}

//funciones raza

function izquierdaRace() {
    if (razaActual == 0) {
        razaActual = 2
    } else {
        razaActual = razaActual - 1
    }
    raza.textContent = razas[razaActual]
    calculaStats()
    mostrarStats()


}

function derechaRace() {
    if (razaActual == 2) {
        razaActual = 0
    } else {
        razaActual = razaActual + 1
    }
    raza.textContent = razas[razaActual]
    calculaStats()
    mostrarStats()


}



//eventos de nombre



//Eventos de clase

btnClaseIzq.addEventListener("click", izquierda)
btnClaseDer.addEventListener("click", derecha)

//Eventos de Raza

btnRaceIzq.addEventListener("click", izquierdaRace)
btnRaceDer.addEventListener("click", derechaRace)


// appends
//$("form").append(``)

$.get(geturl, function(respuesta, estado) {
    console.log(respuesta)
    console.log(estado)
    if (estado === "success") {

        let misdatos = respuesta

        $("#btn1").click(() => {
            $("#inputNombre").val(`${misdatos[aleatorio(0,misdatos.length)].name}`)

        })

        //$("form").append(`<p>Nombre Recomendado: ${misdatos[aleatorio(0,misdatos.length)].name}</p>`)

    }

})


//$("#btn1").click(() => {
//$("body").css("background", "red")

//})