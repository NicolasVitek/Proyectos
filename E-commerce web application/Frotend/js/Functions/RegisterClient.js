import { cleanDiv } from "../component/mostrarElementos.js";
import { crearCliente } from "../service/fetchService.js";

var btnRegistrarCliente = document.getElementById("registrarCliente");
let _cliente = document.getElementById("divRegistrarCliente");
let divMian = document.getElementById("divMain");

export const displayClientForm = () => `
<form class="clientForm">
  <div class="form-row">
    <h3 class="text-primary">Registro de clientes</h3>
    <div class="col-md-4 mb-3">
      <label for="validationServer01">Primer nombre</label>
      <input type="text" class="form-control" id="nombreCliente" placeholder="Primer nombre" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Apellido</label>
      <input type="text" class="form-control" id="apellidoCliente" placeholder="Apellido" required>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">DNI</label>
      <input type="text" id='dniCliente' class="form-control" placeholder="DNI" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer04">Direccion</label>
      <input type="text" class="form-control" id="direccionCliente" placeholder="Direccion" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer05">Numero de telefono</label>
      <input type="text" class="form-control" id="telefonoCliente" placeholder="Numero de telefono" required>
    </div>
  </div>
  <button class="btn btn-primary" id="btnCliente" type="button" onClick="registrarCliente()">Registrar cliente</button>
</form> 
`
const deshabilitarFormulario = () => {
  let formInputs = document.querySelectorAll("#divRegistrarCliente input");
  formInputs.forEach(input => {
    input.disabled = true;
  });
};
window.deshabilitarFormulario = deshabilitarFormulario;
export const registrarCliente = () => {
  let nombre = document.getElementById("nombreCliente");
  let apellido = document.getElementById("apellidoCliente");
  let dni = document.getElementById("dniCliente");
  let direccion = document.getElementById("direccionCliente");
  let telefono = document.getElementById("telefonoCliente");
  crearCliente(dni.value,nombre.value, apellido.value,direccion.value,telefono.value);
  deshabilitarFormulario();
};
window.registrarCliente = registrarCliente;

export const renderFormulario = () => {
  cleanDiv();
  _cliente.innerHTML = displayClientForm();
  divMian.appendChild(_cliente);
};
export const desplegarFormulario = () => {
  btnRegistrarCliente.addEventListener("click", renderFormulario)
};