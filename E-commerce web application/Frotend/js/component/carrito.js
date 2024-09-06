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

