import { displayProducto } from "../component/carrito.js"



import { desplegarFactura } from "../Functions/factura.js"
import { desplegarBalance } from "../Functions/tabla.js"
import { desplegarFechas } from "../Functions/tabla.js"







export const renderProducto = (json) => {
    let nombre = json.nombre
    let img = json.image
    let precio = json.precio
    let id = json.id
    _carrito.innerHTML += displayProducto(id, img, nombre, precio, contadorProductos);
    contadorProductos++
}






export const IndexRender =  () => {
    //document.getElementById("divCompletePurchase").innerHTML = dislayBtnCerrarVenta();
    initializeProductList();
    desplegarProductosFiltrados();
    desplegarCarrito();
    desplegarBalance();
    desplegarFechas();
    desplegarFactura();
    desplegarFormulario();
}