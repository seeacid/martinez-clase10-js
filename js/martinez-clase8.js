let personaje1 = JSON.parse(localStorage.getItem("personaje"))


//funcion que da un resultado aleatorio entre 2 parametros
function aleatorio(menor, mayor) {
    let posibilidades = mayor - menor;
    let aleatorio = Math.random() * (posibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return menor + aleatorio;
}


//class constructora de habilidads
class Habilidades {
    constructor(nombre, image, curacion, minDamage, maxDamage) {
        this.nombre = nombre
        this.image = image
        this.curacion = curacion
        this.minDamage = minDamage
        this.maxDamage = maxDamage
    }
}

// class constructora de armas
class Armas {
    constructor(nombre, image, minDamage, maxDamage) {
        this.nombre = nombre
        this.image = image
        this.minDamage = minDamage
        this.maxDamage = maxDamage
    }
}



// class constructora de monstruos
class Monstruo {
    constructor(nombre, imagen, nivel, vida, maxVida, experiencia, oro) {

        this.nombre = nombre
        this.image = imagen
        this.nivel = nivel
        this.vida = vida
        this.maxVida = maxVida
        this.damage = 0
        this.experiencia = experiencia
        this.oro = oro
    }


    atacar() {
        this.damage = aleatorio(this.nivel * 4, this.nivel * 8)
        console.log("La criatura te golpea por " + this.damage)
        personaje1.vida = personaje1.vida - this.damage
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
    }
}




//mapa
$(".map").hover(() => {
    $("#mapS").text("MAPA")
})
$("#lv1").hover(() => {
    $("#mapS").text("Cueva")
})
$("#lv2").hover(() => {
    $("#mapS").text("Bosque Oscuro (No disponible)")
})
$("#lv3").hover(() => {
    $("#mapS").text("Cueva Calavera (No disponible)")
})
$("#lv4").hover(() => {
    $("#mapS").text("Castillo Oscuro (No disponible)")
})
$("#lvShop").hover(() => {
    $("#mapS").text("Tienda")
})

$("#charInfoImg").attr("src", `${personaje1.image}`)
$("#charInfoName").text(`${personaje1.nombre}`)
$("#charInfoClass").text(`${personaje1.clase}`)
$("#charInfoRace").text(`${personaje1.raza}`)
$("#charInfoLvl").text(`Nivel:${personaje1.nivel}`)
$("#charInfoStr").text(`Fuerza:${personaje1.fuerza}`)
$("#charInfoAgi").text(`Agilidad:${personaje1.agilidad}`)
$("#charInfoInt").text(`Inteligencia:${personaje1.inteligencia}`)


// Selector de Niveles




//funcion que calcula el daño del personaje
function userAtacar() {
    personaje1.damage = ((aleatorio(personaje1.nivel, (personaje1.nivel * 2))) + (personaje1.fuerza * 2))

}

//creacion habilidades

let skill1 = new Habilidades("Explosion", "img/explosion.gif", "no", 25, 50)
let skill2 = new Habilidades("Curacion", "img/curar.gif", "si", 80, 100)


//creacion de armas
let arma1 = new Armas("Daga", "img/dagger.png", 3, 9)
let arma2 = new Armas("Espada", "img/sword.png", 5, 7)
let arma3 = new Armas("Hacha", "img/axe.png", 6, 6)
let arma4 = new Armas("Mandoble", "img/greatsword.png", 6, 9)
let arma5 = new Armas("Arco Largo", "img/arrow.png", 5, 7)
let arma6 = new Armas("Arco de Cazador", "img/arrow.png", 6, 9)
let arma7 = new Armas("Baculo", "img/fireball.gif", 6, 9)






let charName = document.getElementById("charName")
charName.textContent = personaje1.nombre

const mochila = [""]
const habilidades = [""]
const objetos = [""]

//se agregan armas a la mochila
mochila.push(arma1, arma3, arma5, arma7)

habilidades.push(skill1, skill2)



let charImg = document.getElementById("charImg")
charImg.src = personaje1.image






// creacion de n monstruo
let mons1 = new Monstruo("Beholder", "img/mons.png", 3, 100, 100, 130, 300)
let mons2 = new Monstruo("goblin", "img/mons2.png", 1, 60, 60, 50, 100)
let mons3 = new Monstruo("Segador", "img/mons3.png", 100, 1000, 1000, 5000, 5000)

let monstruosLista = [""]
monstruosLista.push(mons1, mons2, mons3)

let monstruo1 = monstruosLista[aleatorio(1, monstruosLista.length - 1)]



$("#monsImg").attr("src", monstruo1.image)
let monsName = document.getElementById("monsName")
monsName.textContent = monstruo1.nombre




//consejos aleatorios

const consejos = ["El daño causado depende del arma que uses", "Cada raza tiene diferentes estadisticas", "Puedes huir de una batalla si te niegas a luchar"]
let consejoAleatorio = document.getElementById("consejo")
consejoAleatorio.textContent = consejos[aleatorio(0, consejos.length - 1)]
switch (monstruo1.nombre) {
    case "Segador":
        consejoAleatorio.textContent = "¡¡¡NO PUEDES GANAR ESTA BATALLA HUYE!!!"
        break
}

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

    $("#skill1").text(`${habilidades[1].nombre} - ${habilidades[1].minDamage} / ${habilidades[1].maxDamage}`)
    $("#skill2").text(`${habilidades[2].nombre} - ${habilidades[2].minDamage} / ${habilidades[2].maxDamage}`)

    $("#skill1").click(() => {
        equip = habilidades[1]
        skillAtk()

    })

    $("#skill2").click(() => {
        equip = habilidades[2]
        skillAtk()

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
    $(".atacar").empty()
    $(".skills").empty()
    $(".mochila").empty()

    $(".battleground").append(`<div class="huir">
    <h2>Escapar</h2>
    <p>Deseas huir de la batalla?</p>




    <a href="mapa.html"><button>Si</button></a>
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
    personaje1.vida = personaje1.vida + personaje1.finalDamage
    if (personaje1.vida > 100) {
        personaje1.vida = 100
    }
    charHp.textContent = personaje1.vida + "/100"

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



function deleteimg() {
    $("#atkImg").remove()
}



// funcion de ataque basica del usuario 

function botonAtk() {
    console.log(equip.nombre)
    userAtacar()
    personaje1.finalDamage = personaje1.damage + aleatorio(equip.minDamage, equip.maxDamage)
    $("body").append(`<div id="atkDiv"><img class="flecha" id="atkImg" src=${equip.image} alt=""></div>`)
    $(".flecha")
        .css("display", "inherit")
        .animate({
            left: '+=45rem',



        })
        .fadeToggle(1500)
    setTimeout(deleteimg, 1700)

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
    monsHp.textContent = monstruo1.vida + "/" + monstruo1.maxVida
    monstruo1.atacar()



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

            <a href="mapa.html"><button id="close">Cerrar</button></a>
            </div>`)
        $("#goldGain").text(`Oro: ${monstruo1.oro}`)
        $(`#expGain`).text(`Exp: ${monstruo1.experiencia}`)

        $("#close").click(() => {
            $(".victory").css("display", "none")
        })

    }

    //ventana derrota 
    if (personaje1.vida <= 0) {
        $("body").append(`
        <div class="defeat">
            <img src="img/defeat.png" alt="">
            <h2>Derrota</h2>
            <p>La criatura te deja mal herido <br> escapas del combate</p>



            <a href="mapa.html"><button  id="close">Cerrar</button></a>
        </div>`)
        $("#close").click(() => {
            $(".defeat").css("display", "none")
        })
    }
}



// funcion de uso de habilidades

function skillAtk() {
    console.log(equip.nombre)
    userAtacar()
    console.log(equip)

    personaje1.finalDamage = personaje1.damage + aleatorio(equip.minDamage, equip.maxDamage)

    switch (equip.curacion) {

        case "no":
            console.log(`Lanzas ${equip.nombre}`)
            $("body").append(`<div id="atkDiv"><img class="skillAtk" id="atkImg" src=${equip.image} alt=""></div>`)

            setTimeout(deleteimg, 1300)

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


            monstruo1.vida = monstruo1.vida - personaje1.finalDamage
            let monsHp = document.getElementById("vm")
            monsHp.textContent = monstruo1.vida + "/" + monstruo1.maxVida
            monstruo1.atacar()

            break
        case "si":
            console.log("curacion")
            $("body").prepend(`<img class="buffSkill" id="atkImg" src=${equip.image} alt="">`)
            curar()
            setTimeout(deleteimg, 1700)
            monstruo1.atacar()

            break

    }

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

                <a href="mapa.html"><button id="close">Cerrar</button></a>
            </div>`)

        $("#goldGain").text(`Oro: ${monstruo1.oro}`)
        $(`#expGain`).text(`Exp: ${monstruo1.experiencia}`)
        $("#close").click(() => {
            $(".victory").css("display", "none")
        })
    }

    //ventana derrota
    if (personaje1.vida <= 0) {
        $("body").append(`
        <div class="defeat">
            <img src="img/defeat.png" alt="">
            <h2>Derrota</h2>
            <p>La criatura te deja mal herido <br> escapas del combate</p>



            <a href="mapa.html"><button  id="close">Cerrar</button></a>
        </div>`)
        $("#close").click(() => {
            $(".defeat").css("display", "none")
        })
    }
}










let monsHp = document.getElementById("vm")
monsHp.textContent = monstruo1.vida + "/" + monstruo1.maxVida

let charHp = document.getElementById("vc")
charHp.textContent = personaje1.vida + "/100"