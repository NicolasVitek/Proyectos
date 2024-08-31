import {
  changeCarrito,
  crearCarrito,
  deleteCarrito,
} from "../service/fetchService.js";


const deshabilitar = (id) => {
  const btnEliminar = document.getElementById(`btnEliminar` + id);
  const btnModificar = document.getElementById(`btnModificar` + id);
  const btnSumar = document.getElementById(`btnSumar` + id);
  const btnRestar = document.getElementById(`btnRestar` + id);
  const btnAgregar = document.getElementById(`btnAgregar` + id);
  const text = document.getElementById(`impCantidad` + id);
  if (btnAgregar == null) {
    btnEliminar.disabled = true;
    btnModificar.disabled = true;
  } else {
    btnAgregar.disabled = true;
  }
  text.disabled = true;
  btnSumar.disabled = true;
  btnRestar.disabled = true;
};
const sumarUnidad = (id) => {
  const restar = document.getElementById(`btnRestar` + id);
  if (restar.disabled == true) {
    restar.disabled = false;
  }
  const text = document.getElementById(`impCantidad` + id);
  text.value++;
};
export const deployAlert = (texto) => {
  const alerta = document.getElementById("alerta");
  const advertencia = document.getElementById("advertencia");
  advertencia.textContent = texto;
  alerta.removeAttribute("hidden");
  document
    .getElementById("btnCerrar")
    .addEventListener("click", () => alerta.setAttribute("hidden", "hidden"));
  window.scrollTo(0, 0);
};
const restarUnidad = (id) => {
  const text = document.getElementById(`impCantidad` + id);
  const restar = document.getElementById(`btnRestar` + id);
  text.value--;
  if (text.value < 0) {
    restar.disabled = true;
    text.value = 0;
    deployAlert("La cantidad no puede ser negativa");
  }
};
const agregarCarrito = (id) => {
  const text = document.getElementById(`impCantidad` + id);
  if (text.value == 0) {
    deployAlert("La cantidad no puede ser cero");
  } else {
    crearCarrito(1, text.name, text.value);
    deshabilitar(id);
  }
};
window.sumarUnidad = sumarUnidad;
window.restarUnidad = restarUnidad;
window.agregarCarrito = agregarCarrito;
export const displayProducto = (id, img, nombre, precio, numero) => `
        <div class="container" id="carrito_producto">
            <img id="img-producto" src="${img}" alt="">
            <label id="lblNombre">${nombre}</label>
            <label id="lblPrecio">${"$" + precio}</label>
            <button id='btnSumar${numero}' type="button" onClick="sumarUnidad(${numero})">+</button>
            <button id="btnRestar${numero}" type="button" onClick="restarUnidad(${numero})">-</button>
            <input id='impCantidad${numero}' name=${id} type="number" min=0 minLength=1 value=0 placeholder="" readonly></input>
            <button class="btnPrimary" id="btnAgregar${numero}" type="button" onClick="agregarCarrito(${numero})">Agregar</button>
        </div>`;

const eliminarCarrito = (id) => {
  const productId = document.getElementById(`impCantidad` + id);
  const card = document.getElementById(`card` + id);
  deleteCarrito(1, productId.name);
  card.parentNode.removeChild(card);
  /*deshabilitar(id)*/
};
const modificarCarrito = (id) => {
  const text = document.getElementById(`impCantidad` + id);
  if (text.value == 0) {
    deployAlert("La cantidad no puede ser cero");
  } else {
    text.style.color = "#0AE30A";
    text.style.fontWeight = "bold";
    changeCarrito(1, text.name, text.value);
  }
};
window.eliminarCarrito = eliminarCarrito;
window.modificarCarrito = modificarCarrito;

