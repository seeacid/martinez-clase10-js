//funcion que da un resultado aleatorio entre 2 parametros
function aleatorio(menor, mayor) {
    let posibilidades = mayor - menor;
    let aleatorio = Math.random() * (posibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return menor + aleatorio;
}




// class constructora de armas
class Armas {
    constructor(nombre, minDamage, maxDamage) {
        this.nombre = nombre
        this.minDamage = minDamage
        this.maxDamage = maxDamage
    }
}



// class constructora de monstruos
class Monstruo {
    constructor(nombre, nivel, vida) {

        this.nombre = nombre
        this.nivel = nivel
        this.vida = vida
        this.damage = 0
    }


    atacar() {
        this.damage = aleatorio(this.nivel * 4, this.nivel * 8)
        console.log("La criatura te golpea por " + this.damage)
        personaje1.vida = personaje1.vida - this.damage
    }
}








let personaje1 = JSON.parse(localStorage.getItem("personaje"))


//funcion que calcula el daño del personaje
function userAtacar() {
    personaje1.damage = ((aleatorio(personaje1.nivel, (personaje1.nivel * 2))) + (personaje1.fuerza * 2))

}

//creacion de armas
let arma1 = new Armas("Daga", 3, 9)
let arma2 = new Armas("Espada", 5, 7)
let arma3 = new Armas("Hacha", 6, 6)
let arma4 = new Armas("Mandoble", 6, 9)




let charName = document.getElementById("charName")
charName.textContent = personaje1.nombre

const mochila = [""]

//se agregan armas a la mochila
mochila.push(arma1, arma2, arma3, arma4)

let charImg = document.getElementById("charImg")
charImg.src = personaje1.image






// creacion de n monstruo
let monstruo1 = new Monstruo("Beholder", 3, 100)
let monsName = document.getElementById("monsName")
monsName.textContent = monstruo1.nombre




//consejos aleatorios

const consejos = ["El daño causado depende del arma que uses", "Cada raza tiene diferentes estadisticas", "Puedes huir de una batalla si te niegas a luchar"]
let consejoAleatorio = document.getElementById("consejo")
consejoAleatorio.textContent = consejos[aleatorio(0, consejos.length - 1)]

// vetana atacar

let equip = ""

$("#atacar").click(() => {
    $("body").append(`
    <div class="atacar">
    <p id="atk1">Arma 1</p>
    <p id="atk2">Arma 2</p>
    <p id="atk3">Arma 3</p>
    <p id="atk4">Arma 4</p>
</div>`)

    $(".skills").empty()
    $(".mochila").empty()

    $("#atk1").text(`${mochila[1].nombre} - ${mochila[1].minDamage} / ${mochila[1].maxDamage}`)
    $("#atk2").text(`${mochila[2].nombre} - ${mochila[2].minDamage} / ${mochila[2].maxDamage}`)
    $("#atk3").text(`${mochila[3].nombre} - ${mochila[3].minDamage} / ${mochila[3].maxDamage}`)
    $("#atk4").text(`${mochila[4].nombre} - ${mochila[4].minDamage} / ${mochila[4].maxDamage}`)

    $(".atacar").click(() => {
        $(".atacar").empty()
    })

    $("#atk1").click(() => {
        equip = mochila[1]
        botonAtk()

    })

    $("#atk2").click(() => {
        equip = mochila[2]
        botonAtk()

    })

    $("#atk3").click(() => {
        equip = mochila[3]
        botonAtk()

    })

    $("#atk4").click(() => {
        equip = mochila[4]
        botonAtk()

    })







})


//Vetana de habilidades
$("#skills").click(() => {
    $("body").append(`
    <div class="skills">
    <p id="skill1">Habilidad 1</p>
    <p id="skill2">Habilidad 2</p>
    <p id="skill3">Habilidad 3</p>
    <p id="skill4">Habilidad 4</p>
</div>`)

    $(".atacar").empty()
    $(".mochila").empty()

    $(".skills").click(() => {
        $(".skills").empty()
    })
})


//ventana mochila
$("#mochila").click(() => {
    $("body").append(`
    <div class="mochila">
    <p id="slot1">Objeto 1</p>
    <p id="slot2">Objeto 2</p>
    <p id="slot3">Objeto 3</p>
    <p id="slot4">Objeto 4</p>
</div>`)

    $(".atacar").empty()
    $(".skills").empty()

    $(".mochila").click(() => {
        $(".mochila").empty()
    })

})

// Ventana escapar

$("#escapar").click(() => {

    $(".battleground").append(`<div class="huir">
    <h2>Escapar</h2>
    <p>Deseas huir de la batalla?</p>




    <a href="index.html"><button>Si</button></a>
    <button id="huirNo">No</button>
</div>`)

    $("#huirNo").click(() => {
        $(".huir").empty()
    })

    $("#huirSi").click(() => {

    })
})



//funcion que permite a objetos y habilidades curar al usuario 

function curar() {
    personaje1.vida = personaje1.vida + 35
    charHp.textContent = personaje1.vida + "/100"
    console.log("te curas ")
    let itemSlot = document.getElementById("pota").parentNode,
        potionImg = document.getElementById("pota");
    itemSlot.removeChild(potionImg)
    $(".damageMons")
        .text(`-35`)
        .css("display", "inherit")
        .css("color", "Green")
        .animate({
            top: "-=3.1rem"

        })
        .fadeToggle(200)
        .animate({
            top: "+=50"
        })
    $(".vidaChar").animate({
        width: `+=35%`
    })

}







// funcion de ataque basica del usuario 

function botonAtk() {
    console.log(equip.nombre)
    userAtacar()
    personaje1.finalDamage = personaje1.damage + aleatorio(equip.minDamage, equip.maxDamage)
    $("body").append(`<img class="flecha" src="img/arrow.png" alt="">`)
    $(".flecha")
        .css("display", "inherit")
        .animate({
            left: '+=45rem',



        })
        .fadeToggle(1500)
        .animate({
            left: "-=45rem"
        })
    $("body").append(`<p class="damageUser">-34</p>`)
    $(".damageUser")
        .text(`- ${personaje1.finalDamage}`)
        .css("display", "inherit")
        .animate({
            top: "-=3.1rem"

        })
        .fadeToggle(200)
        .animate({
            top: "+=50"
        })
    $(".vidaMons").animate({
        width: `-=${personaje1.finalDamage}%`
    })

    console.log("el damage basico es de: " + personaje1.damage)
    console.log("Das un golpe con tu arma por " + personaje1.finalDamage)
    monstruo1.vida = monstruo1.vida - personaje1.finalDamage
    let monsHp = document.getElementById("vm")
    monsHp.textContent = monstruo1.vida + "/100"
    monstruo1.atacar()
    $("body").append(`<img src="img/slash.png" alt="" class="slash">`)
    $(".slash").slideToggle(200)
    $(".slash").fadeToggle(1000)
    $("body").append(`<p class="damageMons">-34</p>`)
    $(".damageMons")
        .text(`- ${monstruo1.damage}`)
        .css("display", "inherit")
        .css("color", "red")
        .animate({
            top: "-=3.1rem"

        })
        .fadeToggle(200)
        .animate({
            top: "+=50"
        })
    $(".vidaChar").animate({
        width: `-=${monstruo1.damage}%`
    })
    personaje1.vida = personaje1.vida - monstruo1.damage

    let charHp = document.getElementById("vc")
    charHp.textContent = personaje1.vida + "/100"



    // ventana de victoria 


    if (monstruo1.vida <= 0) {
        $("body").append(`
       <div class="victory">
            <img src="img/victory.png" alt="">
            <h2>Victoria</h2>
            <p>Te haces con la victoria frente a la criatura</p>


            <ul>
                <h3>Botin</h3>
                <li id="goldGain">Oro: </li>
                <li id="expGain">Exp:</li>
            </ul>

            <button id="close">Cerrar</button>
        </div>`)

        $("#close").click(() => {
            $(".victory").css("display", "none")
        })

    }
}










let monsHp = document.getElementById("vm")
monsHp.textContent = monstruo1.vida + "/100"

let charHp = document.getElementById("vc")
charHp.textContent = personaje1.vida + "/100"