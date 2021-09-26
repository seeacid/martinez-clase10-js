function aleatorio(menor, mayor) {
    let posibilidades = mayor - menor;
    let aleatorio = Math.random() * (posibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return menor + aleatorio;
}





class Armas {
    constructor(nombre, minDamage, maxDamage) {
        this.nombre = nombre
        this.minDamage = minDamage
        this.maxDamage = maxDamage
    }
}




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

function userAtacar() {
    personaje1.damage = ((aleatorio(personaje1.nivel, (personaje1.nivel * 2))) + (personaje1.fuerza * 2))

}


let arma1 = new Armas("Daga", 3, 9)
let arma2 = new Armas("Espada", 5, 7)
let arma3 = new Armas("Hacha", 6, 6)

let charName = document.getElementById("charName")
charName.textContent = personaje1.nombre

const mochila = [""]

mochila.push(arma1, arma2, arma3)

let charImg = document.getElementById("charImg")
charImg.src = personaje1.image






let enfrentar = confirm("Te encuentras con una criatura hostil en el bosque, deseas enfrentarte a ella?")

let monstruo1 = new Monstruo("Beholder", 3, 100)
let escapar = 0
let pelear = true
let monsName = document.getElementById("monsName")
monsName.textContent = monstruo1.nombre

const consejos = ["El daño causado depende del arma que uses", "Cada raza tiene diferentes estadisticas", "Puedes huir de una batalla si te niegas a luchar"]

let consejoAleatorio = document.getElementById("consejo")
consejoAleatorio.textContent = consejos[aleatorio(0, 2)]








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
            top: "-=50px"

        })
        .fadeToggle(200)
        .animate({
            top: "+=50"
        })
    $(".vidaChar").animate({
        width: `+=35`
    })

}

let pocion = document.getElementById("pota")
pocion.addEventListener("click", curar)






function botonAtk() {
    let equip = mochila[prompt("Que arma deseas usar? \n 1." + mochila[1].nombre + "        Daño: " + mochila[1].minDamage + " / " + mochila[1].maxDamage + "\n 2." + mochila[2].nombre + "        Daño: " + mochila[2].minDamage + " / " + mochila[2].maxDamage + "\n 3." + mochila[3].nombre + "        Daño: " + mochila[3].minDamage + " / " + mochila[3].maxDamage)]
    userAtacar()
    personaje1.finalDamage = personaje1.damage + aleatorio(equip.minDamage, equip.maxDamage)
    $("body").append(`<img class="flecha" src="img/arrow.png" alt="">`)
    $(".flecha")
        .css("display", "inherit")
        .animate({
            left: '+=720px',



        })
        .fadeToggle(1500)
        .animate({
            left: "-=720px"
        })
    $("body").append(`<p class="damageUser">-34</p>`)
    $(".damageUser")
        .text(`- ${personaje1.finalDamage}`)
        .css("display", "inherit")
        .animate({
            top: "-=50px"

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
            top: "-=50px"

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

}








let botonRun = document.getElementById("run")
botonRun.addEventListener("click", botonAtk)

let monsHp = document.getElementById("vm")
monsHp.textContent = monstruo1.vida + "/100"

let charHp = document.getElementById("vc")
charHp.textContent = personaje1.vida + "/100"







let itemsMochila = document.createElement("div")
itemsMochila.className = "backpack"
let backpackx = document.getElementById("mochila")
let mochilaParent = backpackx.parentNode
let pocion2 = document.createElement("img")
pocion2.src = "potion.png"
pocion2.className = "pocion"
let pocion3 = document.createElement("img")
pocion3.src = "potion2.png"
pocion3.className = "pocion"

let pociones = [pocion2, pocion3]

function abrirMochila() {
    backpackx.setAttribute("background-color", "red")
    mochilaParent.insertBefore(itemsMochila, backpackx.nextSibling)
    for (let i = 0; i < pociones.length; i++) {
        itemsMochila.appendChild(pociones[i])
    }
}


backpackx.addEventListener("click", abrirMochila)