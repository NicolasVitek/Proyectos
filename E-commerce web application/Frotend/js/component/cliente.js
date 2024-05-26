export const displayClientForm=(dni, name, lastName, adress, phoneNumber)=>`
<form>
<div class="form-row ">
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
<div class="form-group">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="invalidCheck3" required>
    <label class="form-check-label" for="invalidCheck3">
      Acepta los terminos y condiciones
    </label>
    <div class="invalid-feedback">
      Debe aceptar antes de registrarse
    </div>
  </div>
</div>
<button class="btn btn-primary" id="btnCliente" type="button" onClick="registrarCliente()">Registrar cliente</button>
</form> 
`