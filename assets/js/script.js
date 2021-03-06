//DEFINICION DE VARIABLES

var sidebar = document.getElementsByClassName(
  "d-flex align-items-center justify-content-around flex-column sidebar"
)[0];
const inputCantidadCuartos = document.querySelector("#inputCantidadCuartos");
const inputDesdeMc = document.querySelector("#inputDesdeMc");
const inputHasta = document.querySelector("#inputHastaMc");
const linkAllPropiedades = document.querySelector("#linkAllPropiedades");
var pNumeroTotal = document.querySelector("#pNumeroTotal");

//INCIALIZACION DE VARIABLES
inputCantidadCuartos.value = 0;
inputDesdeMc.value = 0;
inputHasta.value = 0;
let contadorAlertaCuartos = 0;
let contadorAlertaMetros = 0;
let contadorAlertaNull = false;
var titleError = "";

//FUNCIONES Y METODOS
sidebar.style.backgroundImage = "url('assets/imgs/fondoFiltro.png')";
const propiedades = [
  {
    nombre: "Departamento1",
    descripcion: "El barbudo Hotel",
    src: "...",
    cuartos: 1,
    metros: 100,
  },
  {
    nombre: "Departamento2",
    descripcion: "Deluxe Hotel",
    src: "...",
    cuartos: 2,
    metros: 200,
  },
  {
    nombre: "Departamento3",
    descripcion: "Vistas valle hermoso",
    src: "...",
    cuartos: 3,
    metros: 300,
  },
  {
    nombre: "Departamento4",
    descripcion: "Hotel Doctor Strange",
    src: "...",
    cuartos: 4,
    metros: 400,
  },
  {
    nombre: "Departamento5",
    descripcion: "Hotel Cielo Azulado",
    src: "...",
    cuartos: 1,
    metros: 500,
  },
  {
    nombre: "Departamento6",
    descripcion: "Hotel curvado",
    src: "...",
    cuartos: 3,
    metros: 600,
  },
  {
    nombre: "Departamento7",
    descripcion: "Hotel Spiner",
    src: "...",
    cuartos: 2,
    metros: 700,
  },
];

const propiedadesSection = document.querySelector("#propiedadesSection");

function updatePropiedades() {
  let propiedadesUpdate = "";
  let contador = 0;
  for (let propiedad of propiedades) {
    let metrosSolicitados = Number(inputDesdeMc.value * inputHasta.value);
    if (
      propiedad.cuartos <= inputCantidadCuartos.value
    ) {
      if (
        propiedad.metros >= inputDesdeMc.value &&
        propiedad.metros <= inputHasta.value
      ) {
        propiedadesUpdate += `
        <div class="p-2">
        <div class="card" id="itemGalleryTablerDesktop">
          <img
            src="assets/imgs/edificio${contador}.png"
            class="card-img-top"
            alt="..."
            id="imgGalleryProperty"
          />
          <center>
            <div class="card-body">
              <h5 class="card-title">${propiedad.nombre}</h5>
              <div class="divDescriptionCard">
                <div class="flexColumn">
                  <p>N?? Cuartos:</p>
                  <p id="paddingRight">${propiedad.cuartos}</p>
                </div>
                <div class="flexColumn">
                  <p>Metros: </p>
                  <p id="paddingLeft">${propiedad.metros}</p>
                </div>
              </div>
              <p class="card-text">${propiedad.descripcion}</p>
              <a href="#" class="btn btn-primary">Ver mas</a>
            </div>
          </center>
        </div>
        </div>
        `;
        contador++;
        contadorAlertaMetros++;
      }
      contadorAlertaCuartos++;
    } else {
      if (propiedad.metros <= metrosSolicitados) {
        contadorAlertaMetros++;
      }
    }
  }
  if (contador == 0) {
    contadorAlertaNull = true;
  }
  alertError();
  pNumeroTotal.innerText = "Total encontrado: " + contador;
  console.log(propiedadesUpdate);
  return propiedadesUpdate;
}

const buttonSidebar = document.querySelector("#buttonSidebar");
buttonSidebar.addEventListener("click", function update() {
  if (alertError() == true) {
    propiedadesSection.innerHTML = updatePropiedades();
  }
  limpiarFiltro();
});

function alertError() {
  
  if (
    contadorAlertaNull == true &&
    contadorAlertaCuartos > 0 &&
    contadorAlertaMetros == 0
  ) {
    titleError = "Error";
    titleDescription =
      "No se encontro ninguna propiedad con esa cantidad de metros";
    showModal();
    return false;
  } else if (
    contadorAlertaNull == true &&
    contadorAlertaCuartos == 0 &&
    contadorAlertaMetros > 0
  ) {
    titleError = "Error";
    titleDescription =
      "Existen propiedades con los metros seleccionados pero con mas cuartos";
    showModal();
    return false;
  } else if (
    contadorAlertaNull == true &&
    contadorAlertaCuartos == 0 &&
    contadorAlertaMetros == 0 &&
    (inputCantidadCuartos.value != "0" ||
      inputDesdeMc.value != "0" ||
      inputHasta.value != "0")
  ) {
    titleError = "Error";
    titleDescription = "Debe seleccionar al menos 1 cuarto";
    showModal();
    return false;
  } else if (
    contadorAlertaNull == true &&
    contadorAlertaCuartos == 0 &&
    contadorAlertaMetros == 0
  ) {
    titleError = "Error";
    titleDescription =
      "Debe seleccionar al menos una caracteristica del filtro";
    showModal();
    return false;
  } else if (
    inputDesdeMc.value > inputHasta.value ||
    inputHasta.value < inputDesdeMc.value
  ) {
    titleError = "Error Filtro";
    titleDescription = 'No puede ser el filtro "Desde" mayor que "Hasta"';
    showModal();
    return false;
  }else {
    return true;
  }
}

//MOSTRAR TODAS LAS PROPIEDADES
linkAllPropiedades.addEventListener("click", function allPropiedades() {
  let propiedadesUpdate = "";
  let contador = 0;
  for (let propiedad of propiedades) {
    propiedadesUpdate += `
        <div class="p-2">
        <div class="card" id="itemGalleryTablerDesktop">
          <img
            src="assets/imgs/edificio${contador}.png"
            class="card-img-top"
            alt="..."
            id="imgGalleryProperty"
          />
          <center>
            <div class="card-body">
              <h5 class="card-title">${propiedad.nombre}</h5>
              <div class="divDescriptionCard">
                <div class="flexColumn">
                  <p>N?? Cuartos:</p>
                  <p id="paddingRight">${propiedad.cuartos}</p>
                </div>
                <div class="flexColumn">
                  <p>Metros: </p>
                  <p id="paddingLeft">${propiedad.metros}</p>
                </div>
              </div>
              <p class="card-text">${propiedad.descripcion}</p>
              <a href="#" class="btn btn-primary">Ver mas</a>
            </div>
          </center>
        </div>
        </div>
        `;
    contador++;
  }
  pNumeroTotal.innerText =
    "Total: Hay " + propiedades.length + " esperando tu llegada";
  propiedadesSection.innerHTML = propiedadesUpdate;
  console.log("pasa");
});

//MODAL
var modalWrap = null;
const showModal = () => {
  modalWrap = document.createElement("div");
  modalWrap.innerHTML = `
  <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${titleError}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>${titleDescription}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>      </div>
    </div>
  </div>
</div>
  `;

  document.body.append(modalWrap);
  var modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
  modal.show();
};

//LIMPIAR VARIABLES
function limpiarFiltro() {
  contadorAlertaCuartos = 0;
  contadorAlertaMetros = 0;
  contadorAlertaNull = false;
  inputCantidadCuartos.value = 0;
  inputDesdeMc.value = 0;
  inputHasta.value = 0;
}

//VALIDACIONES DE CAMPO NUMERICO
class CampoNumerico {
  constructor(selector) {
    this.nodo = document.querySelector(selector);
    this.valor = "";

    this.empezarAEscucharEventos();
  }

  empezarAEscucharEventos() {
    this.nodo.addEventListener(
      "keydown",
      function (evento) {
        const teclaPresionada = evento.key;
        const teclaPresionadaEsUnNumero = Number.isInteger(
          parseInt(teclaPresionada)
        );

        const sePresionoUnaTeclaNoAdmitida =
          teclaPresionada != "ArrowDown" &&
          teclaPresionada != "ArrowUp" &&
          teclaPresionada != "ArrowLeft" &&
          teclaPresionada != "ArrowRight" &&
          teclaPresionada != "Backspace" &&
          teclaPresionada != "Delete" &&
          teclaPresionada != "Enter" &&
          !teclaPresionadaEsUnNumero;
        const comienzaPorCero =
          this.nodo.value.length === 0 && teclaPresionada == 0;

        if (sePresionoUnaTeclaNoAdmitida || comienzaPorCero) {
          evento.preventDefault();
        } else if (teclaPresionadaEsUnNumero) {
          this.valor += String(teclaPresionada);
        }
      }.bind(this)
    );

    this.nodo.addEventListener(
      "input",
      function (evento) {
        const cumpleFormatoEsperado = new RegExp(/^[0-9]+/).test(
          this.nodo.value
        );

        if (!cumpleFormatoEsperado) {
          this.nodo.value = this.valor;
        } else {
          this.valor = this.nodo.value;
        }
      }.bind(this)
    );
  }
}

new CampoNumerico("#inputDesdeMc");
new CampoNumerico("#inputHastaMc");
new CampoNumerico("#inputCantidadCuartos");
