console.log("🔥 BACKEND MOKEPON ESTABLE 🔥")

const express = require("express")
const cors = require("cors")
const app = express()
const path = require("path")

// console.log("📁 RUTA ACTUAL:", __dirname)
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html")
// })


app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.get("/", (req, res) => {
    const archivo = path.join(__dirname, "public", "index.html")
    console.log("📄 Intentando servir:", archivo)
    res.sendFile(archivo)
})
app.use(express.static(path.join(__dirname, "public")))
console.log("📂 Sirviendo estáticos desde:", path.join(__dirname, "public"))
console.log("📁 Estoy corriendo desde:", __dirname)


const jugadores = []

// =========================
// 🔥 LIMPIEZA SEGURA
// =========================
function limpiarJugadoresInactivos() {
    const ahora = Date.now()

    for (let i = jugadores.length - 1; i >= 0; i--) {
        const j = jugadores[i]

        if (!j.ultimoAcceso) continue

        const diff = ahora - j.ultimoAcceso

        // 🔥 MÁS SEGURO (1 minuto)
        if (diff > 300000) {
            jugadores.splice(i, 1)
        }
    }
}

// =========================
// 🔥 CLASE JUGADOR
// =========================
class Jugador {
    constructor(id) {
        this.id = id
        this.enemigoId = null
        this.ultimoAcceso = Date.now()
    }

    asignarMokepon(m) {
        this.mokepon = m
        this.ultimoAcceso = Date.now()
    }

    actualizarPosicion(x, y) {
        this.x = x
        this.y = y
        this.ultimoAcceso = Date.now()
    }

    asignarAtaques(a) {
        this.ataques = a
        this.ultimoAcceso = Date.now()
    }
}

class Mokepon {
    constructor(nombre) {
        this.nombre = nombre
    }
}

// =========================
// 🔥 MIDDLEWARE
// =========================
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    next()
})

// =========================
// 🔥 UNIRSE
// =========================
app.get("/unirse", (req, res) => {

    limpiarJugadoresInactivos()

    const id = `${Math.random()}`
    const jugador = new Jugador(id)

    jugadores.push(jugador)

    console.log("JUGADORES:", jugadores.map(j => j.id))

    res.send(id)
})

app.get("/reset", (req, res) => {
    jugadores.length = 0
    console.log("♻️ RESET TOTAL")
    res.send("ok")
})

app.post("/salir/:jugadorId", (req, res) => {
    const index = jugadores.findIndex(j => j.id === req.params.jugadorId)
    if (index >= 0) {
        jugadores.splice(index, 1)
    }
    console.log("👋 Jugador salió:", req.params.jugadorId)
    res.send({ ok: true })
})

// =========================
// 🔥 MOKEPO
// =========================
app.post("/mokepon/:jugadorId", (req, res) => {

    const jugador = jugadores.find(j => j.id === req.params.jugadorId)

    if (jugador) {
        jugador.asignarMokepon(new Mokepon(req.body.mokepon))
    }

    res.end()
})

// =========================
// 🔥 POSICION + ENEMIGOS
// =========================
app.post("/mokepon/:jugadorId/posicion", (req, res) => {

    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex(j => j.id === jugadorId)

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }

    // 🔥 DEBUG IMPORTANTE
    console.log("👉 REQUEST DE:", jugadorId)

console.log("👥 ESTADO JUGADORES:")

console.log(jugadores.map(j => ({
    id: j.id,
    mokepon: j.mokepon?.nombre || null,
    x: j.x,
    y: j.y
})))

console.log("🔍 JUGADORES COMPLETOS ANTES DE FILTRAR:")
    console.log(JSON.stringify(jugadores, null, 2))

const enemigos = jugadores.filter(
    (jugador) =>
        jugador.id !== jugadorId
)

res.send({ enemigos })
})

// =========================
// 🔥 ATAQUES
// =========================
app.post("/mokepon/:jugadorId/ataques", (req, res) => {

    const jugador = jugadores.find(j => j.id === req.params.jugadorId)

    if (jugador) {
        jugador.asignarAtaques(req.body.ataques)
    }

    res.send({ ok: true })
})

app.get("/mokepon/:jugadorId/ataques", (req, res) => {

    const jugador = jugadores.find(j => j.id === req.params.jugadorId)

    res.send({
        ataques: jugador?.ataques || []
    })
})

// =========================
// 🔥 ENEMIGOS LINK
// =========================
app.post("/mokepon/:jugadorId/enemigo", (req, res) => {

    const jugador = jugadores.find(j => j.id === req.params.jugadorId)
    const enemigo = jugadores.find(j => j.id === req.body.enemigoId)

    if (jugador) jugador.enemigoId = req.body.enemigoId
    if (enemigo) enemigo.enemigoId = jugador?.id

    res.send({ ok: true })
})

app.get("/mokepon/:jugadorId/enemigo", (req, res) => {

    const jugador = jugadores.find(j => j.id === req.params.jugadorId)

    if (!jugador || !jugador.enemigoId) {
        return res.send({ enemigo: null })
    }

    const enemigo = jugadores.find(j => j.id === jugador.enemigoId)

    if (enemigo && enemigo.enemigoId === jugador.id) {
        return res.send({ enemigo })
    }

    res.send({ enemigo: null })
})

// =========================
// 🔥 SERVER
// =========================
// app.listen(8080, () => {
//     console.log("Servidor Mokepon OK en 8080")
// })

app.use((req, res) => {
    console.log("👉 Ruta recibida:", req.url)
    res.send("Servidor vivo en: " + req.url)
})

app.listen(8080, "0.0.0.0", () => {
    console.log("Servidor Mokepon OK en 8080")
})

console.log("📁 Estoy corriendo desde:", __dirname)