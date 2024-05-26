export class formForTextAnalyzed {
  static addForm(container) {
    let form = `
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Resultados</label>
            <textarea class="form-control" id="txtResult" rows="3"></textarea>
        </div>
        <button class="btn btn-primary" id="btn" type="submit">Guardar datos</button>
    `;
    container.innerHTML += form;
  }
}
