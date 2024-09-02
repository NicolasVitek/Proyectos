import { cleanDiv } from "../component/mostrarElementos.js";
import { crearCliente } from "../service/fetchService.js";

const btnRegistrarCliente = document.getElementById("registrarCliente");
const clienteContainer = document.getElementById("divRegistrarCliente");
const mainContainer = document.getElementById("divMain");

const displayClientForm = () => `
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
      <label for="validationServer04">Dirección</label>
      <input type="text" class="form-control" id="direccionCliente" placeholder="Dirección" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer05">Número de teléfono</label>
      <input type="text" class="form-control" id="telefonoCliente" placeholder="Número de teléfono" required>
    </div>
  </div>
  <button class="btn btn-primary" id="btnCliente" type="button">Registrar cliente</button>
</form>
`;

const deshabilitarFormulario = () => {
  const formInputs = document.querySelectorAll("#divRegistrarCliente input");
  const btnClient=document.getElementById("btnCliente");
  btnClient.disabled=true;
  formInputs.forEach(input => {
    input.disabled = true;
  });
};

const registrarCliente = async () => {
  const firstName = document.getElementById("nombreCliente").value;
  const lastName = document.getElementById("apellidoCliente").value;
  const dni = document.getElementById("dniCliente").value;
  const address = document.getElementById("direccionCliente").value;
  const phoneNumber = document.getElementById("telefonoCliente").value;
  try {
    await crearCliente(dni, firstName, lastName, address, phoneNumber);
    deshabilitarFormulario();
  } catch (error) {
    console.error("Error al crear cliente:", error);
  }
};

const renderFormulario = () => {
  cleanDiv();
  clienteContainer.innerHTML = displayClientForm();
  mainContainer.appendChild(clienteContainer);
  const btnCliente = document.getElementById("btnCliente");
  btnCliente.addEventListener("click", registrarCliente);
};

export const initializeClientForm = () => {
  btnRegistrarCliente.addEventListener("click", renderFormulario);
};