import { cleanDiv } from "../component/mostrarElementos.js";
import { createClient } from "../service/fetchService.js";

const divMain = document.getElementById("divMain");
const divRegisterClient = document.getElementById("divRegisterClient");
const liClientForm = document.getElementById("liClientForm");

const createClientForm = () => `
<form class="clientForm">
  <div class="form-row">
    <h3 class="text-primary">Registro de clientes</h3>
    <div class="col-md-4 mb-3">
      <label for="validationServer01">Primer nombre</label>
      <input type="text" class="form-control" id="firstName" placeholder="Primer nombre" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Apellido</label>
      <input type="text" class="form-control" id="lastName" placeholder="Apellido" required>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">DNI</label>
      <input type="text" id='dni' class="form-control" placeholder="DNI" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer04">Dirección</label>
      <input type="text" class="form-control" id="address" placeholder="Dirección" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer05">Número de teléfono</label>
      <input type="text" class="form-control" id="phoneNumber" placeholder="Número de teléfono" required>
    </div>
  </div>
  <button class="btn btn-primary" id="btnRegisterClient" type="button" onClick="registerClient()">Registrar cliente</button>
</form>
`;

const disableForm = () => {
  const formInputs = document.querySelectorAll("#divRegisterClient input");
  const btnRegisterClient = document.getElementById("btnRegisterClient");
  btnRegisterClient.disabled=true;
  formInputs.forEach(input => {
    input.disabled = true;
  });
};

const registerClient = async () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dni = document.getElementById("dni").value;
  const address = document.getElementById("address").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  try {
    await createClient(dni, firstName, lastName, address, phoneNumber);
    disableForm();
  } catch (error) {
    console.error("Error al crear cliente:", error);
  }
};
window.registerClient=registerClient;
const renderClientForm = () => {
  cleanDiv();
  divRegisterClient.innerHTML = createClientForm();
  divMain.appendChild(divRegisterClient);
};

export const initializeClientForm = () => {
  liClientForm.addEventListener("click", renderClientForm);
};