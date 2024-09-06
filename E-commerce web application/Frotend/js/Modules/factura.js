import {showOrder} from "../service/fetchService.js"

let _factura = document.getElementById("divFactura");
var btnFactura = document.getElementById("verFactura");

const SaveAsPdf = () => {
  var data = document.getElementById('container');
  html2canvas(data, { scale: 2 }).then(canvas => {
    var imgData = canvas.toDataURL('image/JPEG');
    var imgWidth = 210;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    var doc = new jsPDF('p', 'mm', "a4");
    var position = 1;
    doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, 'FAST');
    heightLeft -= pageHeight;
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    doc.save("Comprobante.pdf");
  });
}
window.SaveAsPdf = SaveAsPdf
export const displayFactura = (total, fecha) => `
<div class="card">
<div class="card-body mx-4">
  <div class="container" id="container">
    <p class="my-5 mx-5" style="font-size: 30px;">Gracias por su compra</p>
    <div class="row">
      <ul class="list-unstyled">
        <li class="text-black">Nicolas Vitek</li>
        <li class="text-muted mt-1"><span class="text-black">Factura</span>#12345</li>
        <li class="text-black mt-1">${fecha}</li>
        </ul>
        <hr>
        <div class="col-xl-10">
          <p><b>Total a pagar</b></p>
        </div>
        <div class="col-xl-2">
          <p class="float-end">$${total}</p>
        </div>
        <hr>
    </div>  
  </div>
    <button class="btn btn-primary hidden-print" onClick="SaveAsPdf()"><span class="glyphicon glyphicon-print"></span> Imprimir</button>
  </div>
</div>
`
export const renderFactura = (json) => {
  let fecha = json.date
  let total = json.total
  _factura.innerHTML += displayFactura(total, fecha);
}
export const mostrarOrden = async () => {
  await showOrder(renderFactura);
}
export const desplegarFactura = () => {
  btnFactura.addEventListener("click", mostrarOrden);
}

