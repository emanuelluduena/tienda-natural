/* =====================================
   WHATSAPP
   ===================================== */
function abrirWhatsApp() {
  const telefono = "5493515426971";
  const mensaje = "Hola, quiero hacer una consulta";
  const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");
}

/* =====================================
   CATEGORÍAS
   ===================================== */
const categorias = [
  { nombre: "Semillas que Suman", url: "semillas.html", icono: "ti-plant-2" },
  { nombre: "El Snack Perfecto", url: "frutos-secos.html", icono: "ti-tools-kitchen-2" },
  { nombre: "La Cocina Empieza Acá", url: "Harinas.html", icono: "ti-building-store" },
  { nombre: "Dulce Consentido", url: "reposteria.html", icono: "ti-cake" },
  { nombre: "Recargá", url: "suplementos.html", icono: "ti-bolt" },
  { nombre: "Mañanas que Cargan", url: "granolas.html", icono: "ti-sun" },
  { nombre: "Fresquísimos", url: "congelados.html", icono: "ti-snowflake" },
  { nombre: "El Cajón Sorpresa", url: "otros.html", icono: "ti-gift" },
];

/* =====================================
   PRODUCTOS
   ===================================== */
const productos = [

  // ===== FRUTOS SECOS =====
  {
    nombre: "Castañas x 1 kg",
    precio: 1,
    descripcion: "Energía · Grasas saludables · Proteínas · Antioxidantes",
    imagen: "img/castanas.jpg",
    categoria: "frutos-secos"
  },
  {
    nombre: "Almendras x 1 kg",
    precio: 0,
    descripcion: "Vitamina E · Calcio · Proteínas · Grasas saludables",
    imagen: "img/almendras.jpg",
    categoria: "frutos-secos"
  },
  {
    nombre: "Nueces x 1 kg",
    precio: 0,
    descripcion: "Omega 3 · Antioxidantes · Proteínas · Energía",
    imagen: "img/nueces.jpg",
    categoria: "frutos-secos"
  },
  {
    nombre: "Pistachos x 1 kg",
    precio: 0,
    descripcion: "Proteínas · Hierro · Grasas buenas · Antioxidantes",
    imagen: "img/pistachos.jpg",
    categoria: "frutos-secos"
  },
  {
    nombre: "Maní con Sal x 1 kg",
    precio: 0,
    descripcion: "Proteínas · Energía · Grasas saludables · Saciedad",
    imagen: "img/mani-con-sal.jpg",
    categoria: "frutos-secos"
  },
  {
    nombre: "Maní sin Sal x 1 kg",
    precio: 0,
    descripcion: "Proteínas · Energía · Grasas saludables · Natural",
    imagen: "img/mani-sin-sal.jpg",
    categoria: "frutos-secos"
  },
  {
    nombre: "Mix Nevado x 1 kg",
    precio: 0,
    descripcion: "Energía · Vitaminas · Antioxidantes · Natural",
    imagen: "img/mix-nevado.jpg",
    categoria: "frutos-secos",
    contenido: "Nueces · Almendras · Castañas · Maní · Arándanos · Semillas de girasol · Coco en escamas"
  },
  {
    nombre: "Mix Clásico x 1 kg",
    precio: 0,
    descripcion: "Energía · Proteínas · Fibra · Natural",
    imagen: "img/mix-clasico.jpg",
    categoria: "frutos-secos",
    contenido: "Nueces · Almendras · Pasas · Castañas · Maní"
  },
  {
    nombre: "Mix sin Pasas x 1 kg",
    precio: 0,
    descripcion: "Energía · Proteínas · Grasas saludables · Natural",
    imagen: "img/mix-sin-pasas.jpg",
    categoria: "frutos-secos",
    contenido: "Nueces · Almendras · Castañas · Maní"
  },
  {
    nombre: "Mix sin Maní x 1 kg",
    precio: 0,
    descripcion: "Energía · Antioxidantes · Vitaminas · Natural",
    imagen: "img/mix-sin-mani.jpg",
    categoria: "frutos-secos",
    contenido: "Nueces · Almendras · Pasas · Castañas"
  },
  {
    nombre: "Mix Tropical x 1 kg",
    precio: 0,
    descripcion: "Energía · Vitaminas · Fibra · Natural",
    imagen: "img/mix-tropical.jpg",
    categoria: "frutos-secos",
    contenido: "Nueces · Almendras · Pasas · Castañas · Maní · Banana · Ananá",
    destacado: true
  },
  {
    nombre: "Mix Premium x 1 kg",
    precio: 0,
    descripcion: "Omega 3 · Proteínas · Antioxidantes · Grasas saludables",
    imagen: "img/mix-premium.jpg",
    categoria: "frutos-secos",
    contenido: "Nueces · Almendras · Castañas",
    destacado: true
  },
  {
    nombre: "Mix Salado x 1 kg",
    precio: 0,
    descripcion: "Energía · Proteínas · Fibra · Saciedad",
    imagen: "img/mix-salado.jpg",
    categoria: "frutos-secos",
    contenido: "Nueces · Semillas de girasol · Semillas de zapallo · Maní salado · Maní saborizado · Maíz frito"
  },

  // ===== SEMILLAS =====
  {
    nombre: "Semillas de Girasol x 500 g",
    precio: 0,
    descripcion: "Vitamina E · Grasas saludables · Antioxidantes · Energía",
    imagen: "img/semillas-girasol.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Sésamo Blanco x 500 g",
    precio: 0,
    descripcion: "Calcio · Hierro · Grasas buenas · Antioxidantes",
    imagen: "img/sesamo-blanco.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Sésamo Negro x 500 g",
    precio: 0,
    descripcion: "Antioxidantes · Calcio · Hierro · Antiinflamatorio",
    imagen: "img/sesamo-negro.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Sésamo Integral x 500 g",
    precio: 0,
    descripcion: "Fibra · Calcio · Proteínas · Natural",
    imagen: "img/sesamo-integral.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Semillas de Lino x 500 g",
    precio: 0,
    descripcion: "Omega 3 · Fibra · Digestión · Antiinflamatorio",
    imagen: "img/semillas-lino.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Chía Premium x 500 g",
    precio: 0,
    descripcion: "Omega 3 · Proteínas · Fibra · Saciedad",
    imagen: "img/chia-premium.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Mix de Semillas x 500 g",
    precio: 0,
    descripcion: "Omega 3 · Fibra · Vitaminas · Natural",
    imagen: "img/mix-semillas.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Semillas de Zapallo x 500 g",
    precio: 0,
    descripcion: "Zinc · Magnesio · Proteínas · Antioxidantes",
    imagen: "img/semillas-zapallo.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Amaranto x 500 g",
    precio: 0,
    descripcion: "Proteínas · Sin TACC · Hierro · Calcio",
    imagen: "img/amaranto.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Semillas de Amapola x 500 g",
    precio: 0,
    descripcion: "Calcio · Fibra · Grasas saludables · Antioxidantes",
    imagen: "img/semillas-amapola.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Psyllium x 500 g",
    precio: 0,
    descripcion: "Fibra · Digestión · Saciedad · Sin TACC",
    imagen: "img/psyllium.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Quinoa Boliviana x 500 g",
    precio: 0,
    descripcion: "Proteínas · Sin TACC · Hierro · Aminoácidos esenciales",
    imagen: "img/quinoa-boliviana.jpg",
    categoria: "semillas"
  },

  // ===== REPOSTERÍA =====
  {
    nombre: "Fécula de Maíz x 500 g",
    precio: 0,
    descripcion: "Sin TACC · Espesante · Liviana · Apta repostería",
    imagen: "img/fecula-maiz.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Fécula de Mandioca x 500 g",
    precio: 0,
    descripcion: "Sin TACC · Espesante · Digestiva · Apta repostería",
    imagen: "img/fecula-mandioca.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Azúcar Mascabo x 500 g",
    precio: 0,
    descripcion: "Natural · Sin refinar · Hierro · Bajo procesamiento",
    imagen: "img/azucar-mascabo.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Azúcar Impalpable x 500 g",
    precio: 0,
    descripcion: "Fina · Apta repostería · Decoración · Rellenos",
    imagen: "img/azucar-impalpable.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Polvo para Hornear x 500 g",
    precio: 0,
    descripcion: "Leudante · Apta repostería · Sin tacc · Esponjado natural",
    imagen: "img/polvo-hornear.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Coco Rallado x 500 g",
    precio: 0,
    descripcion: "Natural · Fibra · Energía · Apta repostería",
    imagen: "img/coco-rallado.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Leche de Coco en Polvo x 500 g",
    precio: 0,
    descripcion: "Sin lactosa · Cremosa · Energía · Apta repostería",
    imagen: "img/leche-coco-polvo.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Cacao Amargo x 500 g",
    precio: 0,
    descripcion: "Antioxidantes · Magnesio · Sin azúcar · Apta repostería",
    imagen: "img/cacao-amargo.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Azúcar de Coco x 500 g",
    precio: 0,
    descripcion: "Bajo índice glucémico · Natural · Sin refinar · Energía",
    imagen: "img/azucar-coco.jpg",
    categoria: "reposteria"
  },

  // ===== HARINAS =====
  {
    nombre: "Harina de Coco x 1 kg",
    precio: 0,
    descripcion: "Sin TACC · Fibra · Bajo índice glucémico · Apta repostería",
    imagen: "img/harina-coco.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Maní x 1 kg",
    precio: 0,
    descripcion: "Proteínas · Sin TACC · Grasas saludables · Apta repostería",
    imagen: "img/harina-mani.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Centeno x 1 kg",
    precio: 0,
    descripcion: "Fibra · Hierro · Digestión · Energía sostenida",
    imagen: "img/harina-centeno.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Almendras sin Piel x 1 kg",
    precio: 0,
    descripcion: "Sin TACC · Proteínas · Grasas buenas · Apta repostería",
    imagen: "img/harina-almendras-sin-piel.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Almendras con Piel x 1 kg",
    precio: 0,
    descripcion: "Sin TACC · Fibra · Proteínas · Apta repostería",
    imagen: "img/harina-almendras-con-piel.jpg",
    categoria: "harinas",
    destacado: true
  },
  {
    nombre: "Harina de Algarroba x 1 kg",
    precio: 0,
    descripcion: "Sin TACC · Antioxidantes · Fibra · Bajo índice glucémico",
    imagen: "img/harina-algarroba.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Pistacho x 1 kg",
    precio: 0,
    descripcion: "Sin TACC · Proteínas · Grasas buenas · Apta repostería",
    imagen: "img/harina-pistacho.jpg",
    categoria: "harinas",
    destacado: true
  },
  {
    nombre: "Harina de Arroz x 1 kg",
    precio: 0,
    descripcion: "Sin TACC · Digestiva · Liviana · Apta repostería",
    imagen: "img/harina-arroz.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Avena x 1 kg",
    precio: 0,
    descripcion: "Fibra · Proteínas · Energía · Saciedad",
    imagen: "img/harina-avena.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Trigo Sarraceno x 1 kg",
    precio: 0,
    descripcion: "Sin TACC · Proteínas · Hierro · Antioxidantes",
    imagen: "img/harina-trigo-sarraceno.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Maíz Abatí x 1 kg",
    precio: 0,
    descripcion: "Sin TACC · Energía · Fibra · Natural",
    imagen: "img/harina-maiz-abati.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Garbanzo x 1 kg",
    precio: 0,
    descripcion: "Sin TACC · Proteínas · Hierro · Fibra",
    imagen: "img/harina-garbanzo.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Avena Instantánea x 1 kg",
    precio: 0,
    descripcion: "Fibra · Energía sostenida · Saciedad · Bajo índice glucémico",
    imagen: "img/avena-instantanea-1kg.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Avena Tradicional x 1 kg",
    precio: 0,
    descripcion: "Fibra · Energía · Saciedad · Natural",
    imagen: "img/avena-tradicional.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Avena Gruesa x 1 kg",
    precio: 0,
    descripcion: "Fibra · Energía sostenida · Digestión · Natural",
    imagen: "img/avena-gruesa.jpg",
    categoria: "harinas"
  },

  // ===== GRANOLAS =====
  {
    nombre: "Granola con Miel y Pasas x 1 kg",
    precio: 0,
    descripcion: "Energía · Fibra · Antioxidantes · Sin conservantes",
    imagen: "img/granola-miel-pasas.jpg",
    categoria: "granolas"
  },
  {
    nombre: "Granola con Miel sin Pasas x 1 kg",
    precio: 0,
    descripcion: "Energía · Fibra · Natural · Sin conservantes",
    imagen: "img/granola-miel-sin-pasas.jpg",
    categoria: "granolas"
  },
  {
    nombre: "Granola con Pasas Sátvica x 1 kg",
    precio: 0,
    descripcion: "Natural · Energía · Fibra · Ingredientes seleccionados",
    imagen: "img/granola-pasas-satvica.jpg",
    categoria: "granolas"
  },
  {
    nombre: "Granola con Pasta de Maní Sátvica x 1 kg",
    precio: 0,
    descripcion: "Proteínas · Energía · Fibra · Sin conservantes",
    imagen: "img/granola-pasta-mani-satvica.jpg",
    categoria: "granolas"
  },
  {
    nombre: "Granola Tutti Grani Premium x 1 kg",
    precio: 0,
    descripcion: "Energía · Fibra · Ingredientes premium · Sin conservantes",
    imagen: "img/granola-tutti-grani-premium.jpg",
    categoria: "granolas"
  },
  {
    nombre: "Granola Tutti Grani Proteica x 1 kg",
    precio: 0,
    descripcion: "Proteínas · Energía · Fibra · Rendimiento",
    imagen: "img/granola-tutti-grani-proteica.jpg",
    categoria: "granolas"
  },
  {
    nombre: "Granola Tutti Grani Cacao y Coco x 1 kg",
    precio: 0,
    descripcion: "Antioxidantes · Energía · Fibra · Sin conservantes",
    imagen: "img/granola-tutti-grani-cacao-coco.jpg",
    categoria: "granolas"
  },

  // ===== SUPLEMENTOS =====
  {
    nombre: "Vitamina C en Polvo (Ácido Ascórbico) x 300 g",
    precio: 0,
    descripcion: "Inmunidad · Antioxidante · Colágeno · Absorción de hierro",
    imagen: "img/vitamina-c.jpg",
    categoria: "suplementos"
  },
  {
    nombre: "Cloruro de Magnesio x 300 g",
    precio: 0,
    descripcion: "Músculos · Sistema nervioso · Energía · Huesos",
    imagen: "img/cloruro-magnesio.jpg",
    categoria: "suplementos"
  },
  {
    nombre: "Citrato de Calcio x 300 g",
    precio: 0,
    descripcion: "Huesos · Dientes · Alta absorción · Sin lactosa",
    imagen: "img/citrato-calcio.jpg",
    categoria: "suplementos"
  },
  {
    nombre: "Creatina Monohidrato x 300 g",
    precio: 0,
    descripcion: "Fuerza · Rendimiento · Masa muscular · Recuperación",
    imagen: "img/creatina-300.jpg",
    categoria: "suplementos",
    destacado: true
  },
  {
    nombre: "Colágeno x 300 g",
    precio: 0,
    descripcion: "Articulaciones · Piel · Pelo · Uñas · Recuperación",
    imagen: "img/colageno-300.jpg",
    categoria: "suplementos"
  },
  {
    nombre: "Citrato de Magnesio x 300 g",
    precio: 0,
    descripcion: "Alta absorción · Músculos · Sueño · Sistema nervioso",
    imagen: "img/citrato-magnesio.jpg",
    categoria: "suplementos"
  },
  {
    nombre: "Citrato de Potasio x 300 g",
    precio: 0,
    descripcion: "Presión arterial · Músculos · Hidratación · Corazón",
    imagen: "img/citrato-potasio.jpg",
    categoria: "suplementos"
  },
  {
    nombre: "Maca Micropulverizada x 500 g",
    precio: 0,
    descripcion: "Energía · Vitalidad · Hormonal · Resistencia",
    imagen: "img/maca.jpg",
    categoria: "suplementos"
  },
  {
    nombre: "Maca Negra Micropulverizada x 500 g",
    precio: 0,
    descripcion: "Energía · Fertilidad · Rendimiento · Antioxidantes",
    imagen: "img/maca-negra.jpg",
    categoria: "suplementos"
  },

  // ===== OTROS =====
  {
    nombre: "Pasta de Maní x 1 kg",
    precio: 0,
    descripcion: "Proteínas · Grasas saludables · Energía · Sin aditivos",
    imagen: "img/pasta-mani.jpg",
    categoria: "otros",
    destacado: true
  },
  {
    nombre: "Flor de Hibiscus x 300 g",
    precio: 0,
    descripcion: "Antioxidantes · Diurética · Vitamina C · Antiinflamatoria",
    imagen: "img/flor-hibiscus.jpg",
    categoria: "otros",
    destacado: true
  },
  {
    nombre: "Manzanilla x 300 g",
    precio: 0,
    descripcion: "Digestiva · Relajante · Antiinflamatoria · Natural",
    imagen: "img/manzanilla.jpg",
    categoria: "otros"
  },
  {
    nombre: "Clavo de Olor x 200 g",
    precio: 0,
    descripcion: "Antioxidante · Digestivo · Antibacterial · Aromático",
    imagen: "img/clavo-de-olor.jpg",
    categoria: "otros"
  },
  {
    nombre: "Gelatina Sin Sabor x 300 g",
    precio: 0,
    descripcion: "Colágeno · Articulaciones · Proteínas · Bajo en calorías",
    imagen: "img/gelatina-sin-sabor.jpg",
    categoria: "otros",
    destacado: true
  },
  {
    nombre: "Avena Instantánea x 2 kg",
    precio: 0,
    descripcion: "Fibra · Energía sostenida · Saciedad · Bajo índice glucémico",
    imagen: "img/avena-instantanea-2kg.jpg",
    categoria: "otros",
    destacado: true
  },

  // ===== CONGELADOS =====
  {
    nombre: "Mix de Frutos Rojos Congelados x 1 kg",
    precio: 22000,
    descripcion: "Antioxidantes · Vitaminas · Natural",
    imagen: "img/mix-frutos-rojos.jpg",
    categoria: "congelados",
    destacado: true
  }
];

/* =====================================
   RENDERIZADO CATEGORÍAS
   ===================================== */
const gridCategorias = document.querySelector(".categorias-grid");

if (gridCategorias) {
  categorias.forEach(cat => {
    gridCategorias.innerHTML += `
      <a href="${cat.url}" class="categoria-card">
        <div class="categoria-icono">
          <i class="ti ${cat.icono}"></i>
        </div>
        <span>${cat.nombre}</span>
      </a>
    `;
  });
}

/* =====================================
   CARRUSEL DE PRODUCTOS - INFINITO
   ===================================== */
function crearCarrusel(idContenedor, listaProductos) {
  const wrapper = document.getElementById(idContenedor);
  if (!wrapper || listaProductos.length === 0) return;

  let lista = listaProductos;
  while (lista.length < 3) lista = [...lista, ...listaProductos];

  const GAP = 0;
  const anchoWrapper = wrapper.parentElement.offsetWidth || window.innerWidth;
  const ANCHO_CENTRO  = Math.round(anchoWrapper * 0.40);
  const ANCHO_LATERAL = Math.round((anchoWrapper - ANCHO_CENTRO) / 2);
  const PASO = ANCHO_LATERAL + GAP;

  const listaTriple = [...lista, ...lista, ...lista];
  const offsetInicial = lista.length;

  wrapper.style.cssText = `
    position: relative;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    overflow: visible;
    padding: 20px 0 10px 0;
    box-sizing: border-box;
  `;
  wrapper.parentElement.style.overflow = "hidden";

  const track = document.createElement("div");
  track.style.cssText = `
    display: flex;
    gap: ${GAP}px;
    align-items: center;
    will-change: transform;
  `;

  function crearCard(producto) {
    const card = document.createElement("article");
    card.className = "producto carrusel-card";
    card.style.cssText = `
      flex-shrink: 0;
      width: ${ANCHO_LATERAL}px;
      opacity: 0.6;
      transform: scale(0.9);
      box-sizing: border-box;
      transition: width 0.5s ease, opacity 0.5s ease, transform 0.5s ease;
    `;
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" style="width:100%;max-width:80px;height:auto;margin-bottom:8px;display:block;margin-left:auto;margin-right:auto;">
      <h3 style="font-size:0.95rem;">${producto.nombre}</h3>
      <p class="precio">$${producto.precio}</p>
      <p style="font-size:0.85rem;">${producto.descripcion}</p>
      ${producto.contenido ? `<p style="font-size:0.78rem;color:#888;margin-top:-8px;"><strong>Contiene:</strong> ${producto.contenido}</p>` : ""}
      <button class="btn-producto"
        data-nombre="${producto.nombre}"
        data-precio="${producto.precio}"
        onclick="agregarAlCarrito(this)">
        Agregar al carrito
      </button>
    `;
    return card;
  }

  listaTriple.forEach(p => track.appendChild(crearCard(p)));
  wrapper.appendChild(track);

  let pos = offsetInicial + 1;
  let bloqueado = false;

  function calcularOffset(p) {
    return p * PASO - ANCHO_LATERAL - GAP + (ANCHO_LATERAL - ANCHO_CENTRO) / 2;
  }

  function aplicarEstilos(animado) {
    track.style.transition = animado ? "transform 0.5s ease" : "none";
    track.style.transform = `translateX(-${calcularOffset(pos)}px)`;

    const cards = track.querySelectorAll(".carrusel-card");
    cards.forEach((card, i) => {
      if (i === pos) {
        card.style.width = ANCHO_CENTRO + "px";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      } else if (i === pos - 1 || i === pos + 1) {
        card.style.width = ANCHO_LATERAL + "px";
        card.style.opacity = "0.6";
        card.style.transform = "scale(0.9)";
      } else {
        card.style.width = ANCHO_LATERAL + "px";
        card.style.opacity = "0";
        card.style.transform = "scale(0.85)";
      }
    });
  }

  function mover(dir) {
    if (bloqueado) return;
    bloqueado = true;
    pos += dir;
    aplicarEstilos(true);

    setTimeout(() => {
      if (pos >= lista.length * 2) {
        pos -= lista.length;
        aplicarEstilos(false);
      }
      if (pos < lista.length) {
        pos += lista.length;
        aplicarEstilos(false);
      }
      bloqueado = false;
    }, 510);
  }

  const btnIzq = document.createElement("button");
  btnIzq.className = "carrusel-prod-btn";
  btnIzq.innerHTML = "&#8592;";
  btnIzq.style.cssText = "position:absolute;left:8px;top:50%;transform:translateY(-50%);z-index:10;";

  const btnDer = document.createElement("button");
  btnDer.className = "carrusel-prod-btn";
  btnDer.innerHTML = "&#8594;";
  btnDer.style.cssText = "position:absolute;right:8px;top:50%;transform:translateY(-50%);z-index:10;";

  wrapper.appendChild(btnIzq);
  wrapper.appendChild(btnDer);

  aplicarEstilos(false);

  // DOTS indicadores
  const dotsContainer = document.createElement("div");
  dotsContainer.style.cssText = "text-align:center; padding: 12px 0; position: relative; z-index: 5;";

  lista.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.style.cssText = `
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ccc;
      margin: 0 4px;
      cursor: pointer;
      transition: background 0.3s;
    `;
    dot.onclick = () => {
      pos = lista.length + i + 1;
      aplicarEstilos(true);
      actualizarDots();
    };
    dotsContainer.appendChild(dot);
  });

  function actualizarDots() {
    const dots = dotsContainer.querySelectorAll("span");
    const posReal = ((pos - 1) % lista.length + lista.length) % lista.length;
    dots.forEach((dot, i) => {
      dot.style.background = i === posReal ? "#2BBDA8" : "#ccc";
    });
  }

  function moverConDots(dir) {
    mover(dir);
    setTimeout(actualizarDots, 520);
  }

  btnIzq.onclick = () => moverConDots(-1);
  btnDer.onclick = () => moverConDots(1);

  actualizarDots();
  setInterval(() => moverConDots(1), 4000);

  wrapper.insertAdjacentElement("afterend", dotsContainer);
}

const destacados = productos.filter(p => p.destacado === true);
crearCarrusel("productos-destacados", destacados);

if (typeof categoriaActual !== "undefined") {
  const contenedorCategoria = document.getElementById("productos-categoria");
  if (contenedorCategoria) {
    productos
      .filter(p => p.categoria === categoriaActual)
      .forEach(producto => {
        contenedorCategoria.innerHTML += `
          <article class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width:100%;max-width:80px;height:auto;margin-bottom:8px;">
            <h3>${producto.nombre}</h3>
            <p class="precio">$${producto.precio}</p>
            <p>${producto.descripcion}</p>
            ${producto.contenido ? `<p style="font-size:0.78rem;color:#888;margin-top:-8px;"><strong>Contiene:</strong> ${producto.contenido}</p>` : ""}
            <button class="btn-producto"
              data-nombre="${producto.nombre}"
              data-precio="${producto.precio}"
              onclick="agregarAlCarrito(this)">
              Agregar al carrito
            </button>
          </article>
        `;
      });
  }
}

/* =====================================
   CARRITO
   ===================================== */
let carrito = [];

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

function abrirCarrito() {
  document.getElementById("carrito-panel").classList.add("activo");
  document.getElementById("carrito-overlay").classList.add("activo");
}

function cerrarCarrito() {
  document.getElementById("carrito-panel").classList.remove("activo");
  document.getElementById("carrito-overlay").classList.remove("activo");
}

function actualizarCarrito() {
  const carritoItems = document.getElementById("carrito-items");
  const contador = document.getElementById("contador-carrito");
  const totalSpan = document.getElementById("carrito-total");

  if (!carritoItems || !totalSpan) return;

  carritoItems.innerHTML = "";

  if (carrito.length === 0) {
    carritoItems.innerHTML = '<p class="carrito-vacio">El carrito está vacío</p>';
    if (contador) contador.textContent = 0;
    totalSpan.textContent = totalSpan.tagName === "STRONG" ? "Total: $0" : "0";
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

  if (contador) contador.textContent = carrito.reduce((sum, i) => sum + i.cantidad, 0);
  totalSpan.textContent = total;
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

document.addEventListener("click", function(e) {
  const boton = e.target.closest("#btn-finalizar-compra");
  if (!boton) return;

  if (carrito.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }

  let textoPedido = "Hola 👋, quiero finalizar mi compra en Sabores de la Tierra.\n\n";
  textoPedido += "Mi pedido:\n";

  let total = 0;
  carrito.forEach(item => {
    textoPedido += `- ${item.nombre} | Cantidad: ${item.cantidad} | Precio: $${item.precio * item.cantidad}\n`;
    total += item.precio * item.cantidad;
  });

  textoPedido += `\nTotal: $${total}\n\n`;
  textoPedido += "Por favor, coordinemos el pago y el envío.";

  const mensaje = encodeURIComponent(textoPedido);
  window.open(`https://wa.me/5493515426971?text=${mensaje}`, "_blank");
});

/* =====================================
   CARRUSEL INSTAGRAM
   ===================================== */
let posicionCarrusel = 0;

function moverCarrusel(direccion) {
  const track = document.getElementById("carrusel-track");
  if (!track) return;

  const items = track.querySelectorAll(".carrusel-item");
  const totalItems = items.length;

  posicionCarrusel += direccion;

  if (posicionCarrusel < 0) posicionCarrusel = totalItems - 1;
  if (posicionCarrusel >= totalItems) posicionCarrusel = 0;

  const ancho = items[0].offsetWidth + 20;
  track.style.transform = `translateX(-${posicionCarrusel * ancho}px)`;
}

function cargarCarrito() {
  const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
  if (carritoGuardado) {
    carrito = carritoGuardado;
    actualizarCarrito();
  }
}

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

/* =====================================
   INICIAR
   ===================================== */
cargarCarrito();

/* =====================================
   BUSCADOR
   ===================================== */
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function buscarProductos(texto) {
  const query = normalizar(texto.trim());
  const resultadosDiv = document.getElementById("resultados-busqueda");
  const gridResultados = document.getElementById("grid-resultados");

  if (query === "") {
    resultadosDiv.style.display = "none";
    gridResultados.innerHTML = "";
    return;
  }

  const encontrados = productos.filter(p => {
    const enNombre = normalizar(p.nombre).includes(query);
    const enDescripcion = normalizar(p.descripcion).includes(query);
    const enContenido = p.contenido ? normalizar(p.contenido).includes(query) : false;
    return enNombre || enDescripcion || enContenido;
  });

  gridResultados.innerHTML = "";

  if (encontrados.length === 0) {
    gridResultados.innerHTML = "<p style='text-align:center;color:#888;'>No encontramos productos para esa búsqueda.</p>";
  } else {
    encontrados.forEach(producto => {
      gridResultados.innerHTML += `
        <article class="producto">
          <img src="${producto.imagen}" alt="${producto.nombre}" style="width:100%;max-width:80px;height:auto;margin-bottom:8px;">
          <h3>${producto.nombre}</h3>
          <p class="precio">$${producto.precio}</p>
          <p>${producto.descripcion}</p>
          ${producto.contenido ? `<p style="font-size:0.78rem;color:#888;"><strong>Contiene:</strong> ${producto.contenido}</p>` : ""}
          <button class="btn-producto"
            data-nombre="${producto.nombre}"
            data-precio="${producto.precio}"
            onclick="agregarAlCarrito(this)">
            Agregar al carrito
          </button>
        </article>
      `;
    });
  }

  resultadosDiv.style.display = "block";
}