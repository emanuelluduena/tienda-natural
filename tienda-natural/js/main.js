/* =====================================
   FUNCIÓN: ABRIR WHATSAPP
   Abre un chat de WhatsApp con un mensaje
   ===================================== */
function abrirWhatsApp() {

  // 📞 Número de WhatsApp (con código de país y sin símbolos)
  const telefono = "5493515426971";

  // 💬 Mensaje que se enviará automáticamente
  const mensaje = "Hola, quiero hacer una consulta";

  // 🌐 Construimos la URL de WhatsApp
  // encodeURIComponent sirve para que los espacios y caracteres no rompan la URL
  const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

  // 🚀 Abrimos WhatsApp en una nueva pestaña
  window.open(url, "_blank");
}

// Array para guardar productos
let carrito = [];

// Función global para agregar al carrito
function agregarAlCarrito(boton) {
  const nombre = boton.dataset.nombre.trim();
  const precio = Number(boton.dataset.precio);

  // Buscar producto existente
  const productoExistente = carrito.find(item => item.nombre === nombre);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }

  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoItems =
    document.querySelector(".carrito-items") ||
    document.getElementById("carrito-items");

  const contador = document.getElementById("contador-carrito");

  const totalSpan =
    document.querySelector(".carrito-footer strong") ||
    document.getElementById("carrito-total");

  if (!carritoItems || !totalSpan) return;


  // Limpiar lo que hay
  carritoItems.innerHTML = "";

  if (carrito.length === 0) {
    carritoItems.innerHTML = '<p class="carrito-vacio">El carrito está vacío</p>';
    contador.textContent = 0;
    carritoFooter.textContent = "Total: $0";
    return;
  }

  let total = 0;

  carrito.forEach(item => {
    total += item.precio * item.cantidad;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("carrito-item");
    itemDiv.innerHTML = `
  <span>${item.nombre}</span>

  <div class="controles-cantidad">
    <button onclick="restarCantidad('${item.nombre}')">−</button>
    <span>${item.cantidad}</span>
    <button onclick="sumarCantidad('${item.nombre}')">+</button>
  </div>

  <span>$${item.precio * item.cantidad}</span>

  <button onclick="eliminarProducto('${item.nombre}')" class="btn-eliminar">🗑️</button>
`;


    carritoItems.appendChild(itemDiv);
  });

  contador.textContent = carrito.reduce((sum, i) => sum + i.cantidad, 0);
  
  if (totalSpan.tagName === "STRONG") {
  totalSpan.textContent = `Total: $${total}`;
} else {
  totalSpan.textContent = total;
}

}

// Guardar carrito
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Cargar carrito al iniciar la página
function cargarCarrito() {
  const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
  if (carritoGuardado) {
    carrito = carritoGuardado;
    actualizarCarrito();
  }
}

// Modificar agregarAlCarrito para guardar automáticamente
function agregarAlCarrito(boton) {
  const nombre = boton.dataset.nombre.trim();
  const precio = Number(boton.dataset.precio);

  const productoExistente = carrito.find(item => item.nombre === nombre);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }

  actualizarCarrito();
  guardarCarrito();
}

// Ejecutar al cargar la página
cargarCarrito();

// Guardar carrito
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Cargar carrito al iniciar la página
function cargarCarrito() {
  const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
  if (carritoGuardado) {
    carrito = carritoGuardado;
    actualizarCarrito();
  }
}

// Modificar agregarAlCarrito para guardar automáticamente
function agregarAlCarrito(boton) {
  const nombre = boton.dataset.nombre.trim();
  const precio = Number(boton.dataset.precio);

  const productoExistente = carrito.find(item => item.nombre === nombre);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }

  actualizarCarrito();
  guardarCarrito();
}

// Ejecutar al cargar la página
cargarCarrito();


function sumarCantidad(nombre) {
  const producto = carrito.find(item => item.nombre === nombre);
  if (producto) {
    producto.cantidad++;
    guardarCarrito();
    actualizarCarrito();
  }
}

function restarCantidad(nombre) {
  const producto = carrito.find(item => item.nombre === nombre);
  if (producto && producto.cantidad > 1) {
    producto.cantidad--;
    guardarCarrito();
    actualizarCarrito();
  }
}

function eliminarProducto(nombre) {
  carrito = carrito.filter(item => item.nombre !== nombre);
  guardarCarrito();
  actualizarCarrito();
}
