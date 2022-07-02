let data = ["Javiera", "Camila", "Francisco", "Jorge", "Daniela"];
let html = "";
let d = document.querySelector("#dynamic-content");
for (let item of data) {
  html += `<li> ${item} </li>`;
}
d.innerHTML = html;

const articulo = {
  id: 31,
  titulo: "Autos nuevos en Chile",
  subtitulo: "El mercado de autos se normaliza",
  descripcion:
    "No es novedad que los precios de los autos usados se han disparado debidoa la falta en stock de autos nuevos, sin embargo puede que esto esté llegando a su fin…",
};



const propiedades = [
  {
  nombre: "Departamento1",
  descripcion: "Desde las alturas todo se ve mejor",
  src: "...",
  cuartos: 3,
  metros: 200
},
{
  nombre: "Departamento2",
  descripcion: "Desde las alturas todo se ve mejor",
  src: "...",
  cuartos: 3,
  metros: 200
},
{
  nombre: "Departamento3",
  descripcion: "Desde las alturas todo se ve mejor",
  src: "...",
  cuartos: 3,
  metros: 200
},{
  nombre: "Departamento4",
  descripcion: "Desde las alturas todo se ve mejor",
  src: "...",
  cuartos: 3,
  metros: 200
}];

const articulosSection = document.querySelector(".articulos");
let contador = 0;
// for (let depto of propiedades){
//   propiedades += `
//   <article class="articulo">
//   <h4>${depto[contador].nombre}</h4>
//   <h6>${depto[contador].descripcion}</h6>
//   <p>${depto[contador].metros}</p>
//   <a
//   href="/articulo/${articulo.id}"><butto
//   n>Ver más</button></a>
//   </article>
//   `;
//   contador++;
// }


articulosSection.innerHTML = propiedades;