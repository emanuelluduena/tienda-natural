const BASE_URL = `http://${window.location.hostname}:8080`

let mokepones = []
let mokeponesEnemigos=[]
let ataqueEnemigo
let opcionDeMokepones
let jugadorId=null
let fueColisionPropia = false
// let fueColisionPropia = fetch(`${BASE_URL}/mokepon/${jugadorId}`)
let combateEjecutado = false
let intervaloAtaques = null

const contenedorTarjetas = document.getElementById("contenedorTarjetas")

const contenedorAtaques = document.getElementById ("contenedorAtaques")

const sectionVerMapa= document.getElementById("verMapa")
const mapa = document.getElementById("mapa")
const sectionSeleccionarAtaque = document.getElementById("seleccionarAtaque")

let enemigoId = null
let victoriasJugador = 0      
let victoriasEnemigo = 0
let mascotaEnemigo
let ataquesMokepon
let botonFuego 
let botonAgua 
let botonTierra 
let botones = []
let ataqueJugador =[]
let mascotaJugador
let mascotaJugadorObjeto
let lienzo = mapa.getContext("2d")
let enCombate = false

let intervalo
let mapaBackground = new Image()
mapaBackground.src= "./assets/fondojuegomokepon.jpeg"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth -20
const anchoMaximoDelMapa = 350

if (anchoDelMapa>anchoMaximoDelMapa){
    anchoDelMapa=anchoMaximoDelMapa - 20
}

alturaQueBuscamos=anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height= alturaQueBuscamos


class Mokepon{
    constructor(nombre, foto,vida, fotoMapa, id=null) {
        this.id= id
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon(){
    lienzo.drawImage(
        this.mapaFoto,
        this.x,
        this.y,
        this.ancho,
        this.alto
    )
        
    }
}

let hipodoge=new Mokepon ("Hipodoge", "./assets/hipodoge.png", 5,"./assets/fotohipodoge.png")

let capipepo=new Mokepon ("Capipepo", "./assets/capipepo.png", 5,"./assets/fotoCapipepo.png")

let ratigueya=new Mokepon ("Ratigueya", "./assets/ratigueya.png", 5,"./assets/fotoratigueya.png")




const HIPODOGE_ATAQUES=[
        {nombre:"💧", id: "botonAgua"},
        {nombre:"💧", id: "botonAgua"},
        {nombre:"💧", id: "botonAgua"},
        {nombre:"🔥", id: "botonFuego"},
        {nombre:"🌱", id: "botonTierra"},
]

hipodoge.ataques.push(...HIPODOGE_ATAQUES)

const CAPIPEPO_ATAQUES=[
        {nombre:"🌱", id: "botonTierra"},
        {nombre:"🌱", id: "botonTierra"},
        {nombre:"🌱", id: "botonTierra"},
        {nombre:"🔥", id: "botonFuego"},
        {nombre:"💧", id: "botonAgua"}
]

capipepo.ataques.push(...CAPIPEPO_ATAQUES)

const RATIGUEYA_ATAQUES=[
        {nombre:"🔥", id: "botonFuego"},
        {nombre:"🔥", id: "botonFuego"},
        {nombre:"💧", id: "botonAgua"},
        {nombre:"🔥", id: "botonFuego"},
        {nombre:"🌱", id: "botonTierra"},
]

ratigueya.ataques.push(...RATIGUEYA_ATAQUES)

mokepones.push(hipodoge,capipepo,ratigueya)


function iniciarJuego() {
    // fetch("http://localhost:8080/reset")
    const sectionSeleccionarAtaque = document.getElementById("seleccionarAtaque")
    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display="none"

    mokepones.forEach((mokepon)=> {
        opcionDeMokepones= `
        <input type="radio" name="mascota" id= "${mokepon.nombre}"/>
        <label class="tarjetaDeMokepon" for="${mokepon.nombre}"><p>${mokepon.nombre}</p>
        <img src="${mokepon.foto}" 
        alt="${mokepon.nombre}">
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
    })
            
    
    const sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    const botonMascotaJugador = document.getElementById("botonMascota")

    if (botonMascotaJugador) {
        botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    } else {
        console.error("No existe un elemento con id 'botonMascota'. Revisa el HTML.")
    }

    
    

    const botonReiniciar = document.getElementById("botonReiniciar")
    
    botonReiniciar.addEventListener("click", reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego () {
    if (jugadorId) return

    fetch(`${BASE_URL}/unirse`)
        .then(res => res.text())
        .then(id => {
            jugadorId = id
            localStorage.setItem("jugadorId", id)
            console.log("ID guardado:", id)
        })
}

function seleccionarMascotaJugador() {

    const inputHipodoge = document.getElementById("Hipodoge")
    const inputCapipepo = document.getElementById("Capipepo")
    const inputRatigueya = document.getElementById("Ratigueya")

    // 🔴 VALIDACIÓN PRIMERO (CLAVE)
    if (
        !inputHipodoge.checked &&
        !inputCapipepo.checked &&
        !inputRatigueya.checked
    ) {
        alert("Debes seleccionar una mascota primero")
        return
    }

    // 👇 recién ahora cambiamos pantalla
    const sectionSeleccionarMascotas = document.getElementById("seleccionarMascotas")
    sectionSeleccionarMascotas.style.display = "none"

    const sectionSeleccionarAtaque = document.getElementById("seleccionarAtaque")
    sectionSeleccionarAtaque.style.display = "none"

    sectionVerMapa.style.display = "flex"

    const spanMascotaJugador = document.getElementById("mascotaJugador")

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = `<img src="./assets/hipodoge.png" width="60">`
        mascotaJugador = inputHipodoge.id

    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = `<img src="./assets/capipepo.png" width="60">`
        mascotaJugador = inputCapipepo.id

    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = `<img src="./assets/ratigueya.png" width="60">`
        mascotaJugador = inputRatigueya.id
    }

    iniciarMapa()
    extraerAtaques(mascotaJugador)
    seleccionarMokepon(mascotaJugador)
}
function seleccionarMokepon (mascotaJugador){
    fetch(`${BASE_URL}/mokepon/${jugadorId}`, {
        method: "post",
        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify({
            mokepon:mascotaJugador
        })
    })
    // .then(function(res){
    //     console.log("Respuesta del servidor:", res)
    // })
    }

// seleccionarMokepon(mascotaJugador)

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    contenedorAtaques.innerHTML = ""

    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="BAtaque">${ataque.nombre}</button>`
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botones = document.querySelectorAll(".BAtaque")

    secuenciaAtaque()

    // 🔥 TODOS deshabilitados por defecto
    botones.forEach(boton => boton.disabled = true)
}




//         DEDSDE ACA CLOUDE
// // function mostrarAtaques (ataques)
// //     {
// //      contenedorAtaques.innerHTML = ""
// //     ataques.forEach ((ataque)=> {
// //         ataquesMokepon= `
// //         <button id=${ataque.id} class="BAtaque">${ataque.nombre}</button> `
// //         contenedorAtaques.innerHTML +=ataquesMokepon
// //     })  

// //     botones=document.querySelectorAll(".BAtaque")

// //     secuenciaAtaque()


      
// //     //     if (!fueColisionPropia) {
// //     //     botones.forEach(boton => boton.disabled = true)
// //     // }
              
// // }

// // }

//             HASTA ACA CLOUDE

    function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {

            if (e.target.textContent === "🔥") {
                ataqueJugador.push("🔥")
                boton.style.background = "#112f58"

            } else if (e.target.textContent === "💧") {
                ataqueJugador.push("💧")
                boton.style.background = "#112f58"

            } else if (e.target.textContent === "🌱") {
                ataqueJugador.push("🌱")
                boton.style.background = "#112f58"
            }
            
            boton.disabled = true
            
            console.log("ATAQUES:", ataqueJugador)
            // console.log(ataqueJugador)
            // ataqueAleatorioEnemigo("")
            if(ataqueJugador.length===5){
                enviarAtaques()
            }

            
        })
    })
}

function enviarAtaques(){
    fetch(`${BASE_URL}/mokepon/${jugadorId}/ataques`,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            ataques:ataqueJugador
        })
    })

    intervaloAtaques = setInterval(obtenerAtaques,50)
}


function obtenerAtaques (){fetch(`${BASE_URL}/mokepon/${enemigoId}/ataques`)
    
    .then(res => res.json())
    .then(({ ataques }) => {

        if (ataques.length === 5) {
            clearInterval(intervaloAtaques)

            ataqueEnemigo = ataques
            combate()
        }
    })
}

function seleccionarMascotaEnemigo() {
    // const mascotaAleatoria = aleatorio(0, mokepones.length - 1)

    // mascotaEnemigo = mokepones[mascotaAleatoria].nombre

    const spanMascotaEnemigo = document.getElementById("mascotaEnemigo")

    if (mascotaEnemigo === "Hipodoge") {
    spanMascotaEnemigo.innerHTML = `<img src="./assets/hipodoge.png" width="60">`
}
else if (mascotaEnemigo === "Capipepo") {
    spanMascotaEnemigo.innerHTML = `<img src="./assets/capipepo.png" width="60">`
}
else {
    spanMascotaEnemigo.innerHTML = `<img src="./assets/ratigueya.png" width="60">`
} 
    
}


function ataqueAleatorioEnemigo(){
    const ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "🔥"
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "💧"
    } else {
        ataqueEnemigo = "🌱"
    }

    console.log(ataqueEnemigo)
    // combate()
    iniciarPelea()
}

    function iniciarPelea(){
        combate()
        }


function combate(){

    if (combateEjecutado) return
    combateEjecutado = true
    clearInterval(intervalo)

    const spanVidasJugador = document.getElementById("vidasJugador")
    const spanVidasEnemigo = document.getElementById("vidasEnemigo")

    for (let i = 0; i < ataqueJugador.length; i++) {

        if (ataqueJugador[i] === ataqueEnemigo[i]) {

        } else if (
            (ataqueJugador[i] === "🔥" && ataqueEnemigo[i] === "🌱") ||
            (ataqueJugador[i] === "💧" && ataqueEnemigo[i] === "🔥") ||
            (ataqueJugador[i] === "🌱" && ataqueEnemigo[i] === "💧")
        ) {
            victoriasJugador++

        } else {
            victoriasEnemigo++
        }
    }

    spanVidasJugador.innerHTML = victoriasJugador
    spanVidasEnemigo.innerHTML = victoriasEnemigo

    crearMensaje()

    revisarVidas()
}


// function combate(){

//     if (combateEjecutado) return
//     combateEjecutado = true
//     clearInterval(intervalo)

//     const spanVidasJugador = document.getElementById("vidasJugador")
//     const spanVidasEnemigo = document.getElementById("vidasEnemigo")

//     for (let i = 0; i < ataqueJugador.length; i++) {

//         if (ataqueJugador[i] === ataqueEnemigo[i]) {
//             crearMensaje("EMPATE")

//         } else if (
//             (ataqueJugador[i] === "🔥" && ataqueEnemigo[i] === "🌱") ||
//             (ataqueJugador[i] === "💧" && ataqueEnemigo[i] === "🔥") ||
//             (ataqueJugador[i] === "🌱" && ataqueEnemigo[i] === "💧")
//         ) {
//             crearMensaje("GANASTE")
//             victoriasJugador++
//             spanVidasJugador.innerHTML = victoriasJugador

//         } else {
//             crearMensaje("PERDISTE")
//             victoriasEnemigo++
//             spanVidasEnemigo.innerHTML = victoriasEnemigo
//         }
//     }

//     revisarVidas()
// }

// function revisarVidas(){

//     if (victoriasJugador === 3){
//         crearMensajeFinal("FELICITACIONES! Ganaste :)")
//     }
//     else if (victoriasEnemigo === 3){
//         crearMensajeFinal("Lo siento, perdiste :(")
//     }

// }


function revisarVidas(){

    if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("GANASTE LA PARTIDA 🎉")

    } else if (victoriasEnemigo > victoriasJugador){
        crearMensajeFinal("PERDISTE LA PARTIDA 😢")

    } else {
        crearMensajeFinal("EMPATE 🤝")
    }
}

function crearMensaje(){

    const sectionMensajes = document.getElementById("resultado")
    const contenedorAtaqueJugador = document.getElementById("ataqueJugador")
    const contenedorAtaqueEnemigo = document.getElementById("ataqueEnemigo")

    sectionMensajes.innerHTML = "RESULTADO DEL COMBATE"

    contenedorAtaqueJugador.innerHTML = ataqueJugador.join(" ")
    contenedorAtaqueEnemigo.innerHTML = ataqueEnemigo.join(" ")
}



// function crearMensaje(resultado){
//     const sectionMensajes = document.getElementById("resultado")
//     const contenedorAtaqueJugador = document.getElementById("ataqueJugador")
//     const contenedorAtaqueEnemigo = document.getElementById("ataqueEnemigo")

    

//     sectionMensajes.innerHTML = ""
//     contenedorAtaqueJugador.innerHTML = ""
//     contenedorAtaqueEnemigo.innerHTML = ""

//     const notificacion = document.createElement("p")
//     const nuevoAtaqueJugador = document.createElement("p")
//     const nuevoAtaqueEnemigo = document.createElement("p")

//     notificacion.innerHTML = resultado
//     nuevoAtaqueJugador.innerHTML = ataqueJugador
//     nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

//     sectionMensajes.appendChild(notificacion) 
//     contenedorAtaqueJugador.appendChild(nuevoAtaqueJugador) 
//     contenedorAtaqueEnemigo.appendChild(nuevoAtaqueEnemigo)   
// }

function crearMensajeFinal(resultadoFinal){
    const sectionMensajes = document.getElementById("resultado")
    sectionMensajes.innerHTML = ""

    const parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)


    botones.forEach(boton => {
    boton.disabled = true
})

    const sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("beforeunload", function() {
    fetch(`${BASE_URL}/salir/${jugadorId}`, { method: "post" })
})

window.addEventListener("load", iniciarJuego)

const tituloOriginal = document.title

const mensajes = [
    "¿Ya te aburriste? 😏",
    "Mokepón te espera",
    "¡Todavía no ganaste!",
    "¿Te rendiste?",
    "Volvé a la batalla ⚔️",
    "El enemigo te desafía",
    "¡Revancha!"
]

// let intervalo
let i = 0

document.addEventListener("visibilitychange", function(){

    if(document.hidden){

        intervalo = setInterval(function(){
            document.title = mensajes[i]
            i = (i + 1) % mensajes.length
        },1000)

    } else {
        clearInterval(intervalo)
        document.title = tituloOriginal
    }

})

function pintarCanvas() {

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY

    lienzo.clearRect(0, 0, mapa.width, mapa.height)

    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height,
    )

    // 👇 TU PERSONAJE
    mascotaJugadorObjeto.pintarMokepon()

    // 👇 ENVIÁS POSICIÓN AL SERVER
    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    // 👇 ACA DIBUJÁS ENEMIGOS (ESTO ES LO NUEVO)
    mokeponesEnemigos.forEach((enemigo) => {
        if (enemigo) {
            enemigo.pintarMokepon()

            if (
                mascotaJugadorObjeto.velocidadX !== 0 ||
                mascotaJugadorObjeto.velocidadY !== 0
            ) {
                revisarColision(enemigo)
            }
        }
    })
}
    function enviarPosicion(x, y){

    if (!jugadorId || !mascotaJugadorObjeto) return

    fetch(`${BASE_URL}/mokepon/${jugadorId}/posicion`,{
        method:"post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({ x, y })
    })
    .then(function(res){
        if (res.ok){
            res.json()
                .then(function({enemigos}){
                    mokeponesEnemigos = []
                    enemigos.forEach((enemigo) => {

                        if (!enemigo.mokepon) {
    console.log("⏳ enemigo todavía no eligió mokepon")
    return
}

                        let mokeponEnemigo = null
                        const nombre = enemigo.mokepon.nombre

                        if (nombre === "Hipodoge"){
                            mokeponEnemigo = new Mokepon("Hipodoge", "./assets/hipodoge.png", 5, "./assets/fotohipodoge.png", enemigo.id)
                        } 
                        else if (nombre === "Capipepo"){
                            mokeponEnemigo = new Mokepon("Capipepo", "./assets/capipepo.png", 5, "./assets/fotoCapipepo.png", enemigo.id)
                        } 
                        else if (nombre === "Ratigueya"){
                            mokeponEnemigo = new Mokepon("Ratigueya", "./assets/ratigueya.png", 5, "./assets/fotoratigueya.png", enemigo.id)
                        }

                        if (mokeponEnemigo){
                            mokeponEnemigo.x = enemigo.x
                            mokeponEnemigo.y = enemigo.y
                            mokeponEnemigo.id = enemigo.id

                            const existe = mokeponesEnemigos.findIndex(e => e.id === mokeponEnemigo.id)
                            if (existe >= 0) {
                                mokeponesEnemigos[existe] = mokeponEnemigo
                            } else {
                                mokeponesEnemigos.push(mokeponEnemigo)
                            }
                        }
                    })
                })
        }
    })
}


    // lienzo.drawImage(
    //     mascotaJugadorObjeto.mapaFoto,
    //     mascotaJugadorObjeto.x,
    //     mascotaJugadorObjeto.y,
    //     mascotaJugadorObjeto.ancho,
    //     mascotaJugadorObjeto.alto
    // )


function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = +5 
}
function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = +5
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}


function sePresionoUnaTecla (event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break;
        case "ArrowDown":
            moverAbajo()
            break;
        case "ArrowLeft":
            moverIzquierda()
            break;
        case "ArrowRight":
            moverDerecha()
            break;                
        
            default:
            break;
    }
}

function iniciarMapa() {
    console.log("INICIANDO MAPA", jugadorId)
    // mapa.width=500   
    // mapa.height=300
    mascotaJugadorObjeto=obtenerObjetoMascota(mascotaJugador)
     intervalo = setInterval (pintarCanvas, 50)
     setInterval(revisarSiHayCombate, 200)

    window.addEventListener("keydown", sePresionoUnaTecla)

    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota (){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
        
    }
}
//             DESDE ACA CLOUDE
// function revisarColision(enemigo) {

//     const arribaEnemigo = enemigo.y
//     const abajoEnemigo = enemigo.y + enemigo.alto
//     const derechaEnemigo = enemigo.x + enemigo.ancho
//     const izquierdaEnemigo = enemigo.x

//     const arribaMascota = mascotaJugadorObjeto.y
//     const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
//     const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
//     const izquierdaMascota = mascotaJugadorObjeto.x

//     // ❌ SI NO HAY COLISIÓN, NO HACEMOS NADA
//     if (
//         abajoMascota < arribaEnemigo ||
//         arribaMascota > abajoEnemigo ||
//         derechaMascota < izquierdaEnemigo ||
//         izquierdaMascota > derechaEnemigo
//     ) {
//         return
//     }

//     // 🔴 EVITAR QUE SE EJECUTE MUCHAS VECES
//     detenerMovimiento()
//     clearInterval(intervalo)

//     window.removeEventListener("keydown", sePresionoUnaTecla)
//     window.removeEventListener("keyup", detenerMovimiento)
//     fueColisionPropia = true
//     // 👇 guardamos enemigo
//     mascotaEnemigo = enemigo.nombre
//     seleccionarMascotaEnemigo()

//     // 👇 cambiamos de pantalla (IMPORTANTE: ESTO VA ACÁ)
//     sectionVerMapa.style.display = "none"
//     sectionSeleccionarAtaque.style.display = "flex"

//     // 👇 avisamos al servidor
//     fetch(`${BASE_URL}/mokepon/${jugadorId}/enemigo`, {
//         method: "post",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             enemigoId: enemigo.id
//         })
//     })

//     alert("Hay colision con " + enemigo.nombre)
// }
//                 HASTA ACA CLOUDE



function revisarColision(enemigo) {

    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    if (enCombate) return
    enCombate = true

    detenerMovimiento()
    clearInterval(intervalo)

    window.removeEventListener("keydown", sePresionoUnaTecla)
    window.removeEventListener("keyup", detenerMovimiento)

    mascotaEnemigo = enemigo.nombre
    enemigoId = enemigo.id
    seleccionarMascotaEnemigo()

    sectionVerMapa.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

    // 🔥 avisamos al servidor
    fetch(`${BASE_URL}/mokepon/${jugadorId}/enemigo`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            enemigoId: enemigo.id
        })
    })

    alert("Hay colision con " + enemigo.nombre)

    // 🔥 CLAVE: habilitar botones del que inició combate
    setTimeout(() => {
        botones.forEach(boton => boton.disabled = false)
        console.log("🔥 TURNO 1 ACTIVADO")
    }, 100)
}




function revisarSiHayCombate() {
    fetch(`${BASE_URL}/mokepon/${jugadorId}/enemigo`)
        .then(res => res.json())
        .then(({ enemigo }) => {

            if (enemigo && !enCombate) {
                enCombate = true

                detenerMovimiento()
                clearInterval(intervalo)

                window.removeEventListener("keydown", sePresionoUnaTecla)
                window.removeEventListener("keyup", detenerMovimiento)

                sectionVerMapa.style.display = "none"
                sectionSeleccionarAtaque.style.display = "flex"

                // 🔥 AGREGAR ESTO
                mascotaEnemigo = enemigo.mokepon.nombre
                enemigoId = enemigo.id
                seleccionarMascotaEnemigo()

                console.log("🔥 ENTRO A COMBATE POR SERVIDOR")

                const esperarAtaques = setInterval(() => {
                    if (!enemigoId) return

                    fetch(`${BASE_URL}/mokepon/${enemigoId}/ataques`)
                        .then(res => res.json())
                        .then(({ ataques }) => {
                            if (ataques.length === 5) {
                                clearInterval(esperarAtaques)
                                botones.forEach(boton => boton.disabled = false)
                                console.log("✅ Jugador A terminó, ahora podés atacar")
                            }
                        })
                }, 500)
            }
        })
    }
