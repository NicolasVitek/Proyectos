import { displayProducto } from "../component/carrito.js"
import { mostrarProductosFiltrados } from "../component/mostrarElementos.js"

import { createProductCard } from "../Functions/Product.js"

import { desplegarCarrito } from "../Functions/ProductCar.js"
import { desplegarFormulario } from "../Functions/RegisterClient.js"
import { desplegarFactura } from "../Functions/factura.js"
import { desplegarBalance } from "../Functions/tabla.js"
import { desplegarFechas } from "../Functions/tabla.js"
import { displayClientForm } from "../Functions/RegisterClient.js"
import { dislayBtnCerrarVenta } from "../Functions/ProductCar.js"


const btnBuscarProducto = document.getElementById("btnBuscarProducto")


export const renderProducto = (json) => {
    let nombre = json.nombre
    let img = json.image
    let precio = json.precio
    let id = json.id
    _carrito.innerHTML += displayProducto(id, img, nombre, precio, contadorProductos);
    contadorProductos++
}

export const renderSearch = (array) => {
    let contador = 0
    let cantidad = array.length
    while (contador < cantidad) {
        let nombre = array[contador].nombre
        let img = array[contador].image
        let marca = array[contador].marca
        let precio = array[contador].precio
        let id = array[contador].id
        let codigo = array[contador].codigo
        let descripcion = array[contador].descripcion
        _root.innerHTML += createProductCard(id, img, nombre, marca, precio, codigo, descripcion);
        contador++;
    }
}


const desplegarProductosFiltrados = () => {
    btnBuscarProducto.addEventListener("click", mostrarProductosFiltrados)
}

export const IndexRender =  () => {
    //document.getElementById("divCerrarVenta").innerHTML = dislayBtnCerrarVenta();
    initializeProductList();
    desplegarProductosFiltrados();
    desplegarCarrito();
    desplegarBalance();
    desplegarFechas();
    desplegarFactura();
    desplegarFormulario();
}