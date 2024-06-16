export class inscriptionForm {
  static addForm(container) {
    let form = `<h2>Analisis de sentimientos</h2>
    <form class="inscriptionForm" id="inscriptionForm">
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="validationServer01">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="inpName"
            placeholder="Nombre"
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationServer02">Apellido</label>
          <input
            type="text"
            class="form-control"
            id="inpLastName"
            placeholder="Apellido"
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationServerUsername">Nombre de usuario</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inpUserName">@</span>
            </div>
            <input
              type="text"
              class="form-control"
              id="userName"
              placeholder="Nombre de usuario"
              aria-describedby="inputGroupPrepend3"
              required
            />
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="validationServer03">Ciudad</label>
          <input
            type="text"
            class="form-control"
            id="inpCity"
            placeholder="Ciudad"
            required
          />
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationServer04">Provincia</label>
          <input
            type="text"
            class="form-control"
            id="inpState"
            placeholder="Provincia"
            required
          />
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationServer05">Codigo postal</label>
          <input
            type="text"
            class="form-control"
            id="inpZipCode"
            placeholder="Codigo postal"
            required
          />
        </div>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Texto a analizar</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="inpText"
            required
          />
          <label class="form-check-label" for="invalidCheck3">
            Acepta los terminos y condiciones
          </label>
          <div class="invalid-feedback">Debe aceptar antes de continuar</div>
        </div>
      </div>
      <button class="btn btn-primary" id="btnSubmit" onClick="submitClient()" type="button">
        Registrar cliente
      </button>
      <button class="btn btn-primary" id="btnSubmit" onClick="textAnalizer()" type="button">
        Analizar texto
      </button>
      <div class="textAnalyzed"></div>
    </form>`;
    container.innerHTML += form;
  }
  static disableForm() {
    const elements = document.querySelector(".inscriptionForm").elements;
    for (let i = 0; i < elements.length; i++) {
      elements[i].disabled = true;
    }
  }
}
