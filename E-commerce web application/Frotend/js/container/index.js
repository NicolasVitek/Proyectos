import {displayCarrito, displayProducto} from "../component/carrito.js"
import { cleanDiv, limpiarDiv, mostrarBalance, mostrarCarrito, mostrarListaProductos, mostrarOrden, mostrarProductosFiltrados } from "../component/mostrarElementos.js"
import { displayFactura } from "../component/factura.js"
import { displayProductoEnLista } from "../component/producto.js"
import { displayBalance, displayTotal } from "../component/tabla.js"
import { displayClientForm } from "../component/cliente.js"

const btnRegistrarCliente=document.getElementById("registrarCliente")
const btnListaProductos=document.getElementById("listaProductos")
const btnBuscarProducto=document.getElementById("btnBuscarProducto")
const btnModProductos=document.getElementById("eliminarProducto")
const verBalance=document.getElementById("verBalance") 
const btnBalance=document.getElementById("btnBalance")
const btnFactura=document.getElementById("verFactura")

let _root=document.getElementById("divProductos")
let _carrito=document.getElementById("divCarrito")
let _balance=document.getElementById("tabla")
let _factura=document.getElementById("divFactura")
let _cliente=document.getElementById("divRegistrarCliente")
var contadorProductos=1

export const renderListaProducto=(json)=>{
    let nombre=json.nombre
    let img=json.image
    let marca=json.marca
    let precio=json.precio
    let id=json.id
    let descripcion=json.descripcion
    let codigo=json.codigo
    _root.innerHTML+=displayProductoEnLista(id, img, nombre, marca, precio, codigo, descripcion, contadorProductos);
    contadorProductos++
}

export const renderFormulario=()=>{
    cleanDiv()
    _cliente.innerHTML+=displayClientForm();
}

export const renderProducto= (json)=>{
    let nombre=json.nombre
    let img=json.image
    let precio=json.precio
    let id=json.id
    _carrito.innerHTML+= displayProducto(id, img,nombre,precio, contadorProductos);
    contadorProductos++
}
var identificador=1
export const renderCarrito=(cantidad, json)=>{
    let nombre=json.nombre
    let img=json.image
    let precio=json.precio
    let id=json.id
    let marca=json.marca
    _carrito.innerHTML+=displayCarrito(id, img,nombre,precio, marca ,identificador, cantidad);
    identificador++
}

export const renderSearch=(array)=>{
    let contador=0
    let cantidad=array.length
    while(contador<cantidad){
        let nombre=array[contador].nombre
        let img=array[contador].image
        let marca=array[contador].marca
        let precio=array[contador].precio
        let id=array[contador].id
        let codigo=array[contador].codigo
        let descripcion=array[contador].descripcion
        _root.innerHTML+=displayProductoEnLista(id, img, nombre, marca, precio, codigo, descripcion);
        contador++;
    }
}
export const renderFila=(array)=>{
    let total;
    let numeroFila=1
    let contadorOrdenes=0
    let cantidadOrdenes=array.length
    while(contadorOrdenes<cantidadOrdenes){
        let nombreCliente=array[contadorOrdenes].nameClient
        let apellidoCliente=array[contadorOrdenes].lastNameClient
        total=array[contadorOrdenes].income
        let subTotal=array[contadorOrdenes].subTotal
        let nombreProducto=array[contadorOrdenes].productName
        let cantidadProducto=array[contadorOrdenes].cantProduct
        let precioProducto=array[contadorOrdenes].priceProduct
        _balance.innerHTML+=displayBalance(numeroFila, nombreCliente, apellidoCliente,nombreProducto, precioProducto, cantidadProducto, subTotal)
        contadorOrdenes++;
        numeroFila++;
    }
    _balance.innerHTML+=displayTotal(total)
}
export const renderFactura=(json)=>{
    let fecha=json.fecha
    let total=json.total
    _factura.innerHTML+=displayFactura(total, fecha)
}
const desplegarFormulario=()=>{
    btnRegistrarCliente.addEventListener("click",renderFormulario)
}

const desplegarListaProductos=()=>{
    btnListaProductos.addEventListener("click",mostrarListaProductos)
}

const desplegarProductosFiltrados=()=>{
    btnBuscarProducto.addEventListener("click", mostrarProductosFiltrados)
}

const desplegarCarrito=()=>{
    btnModProductos.addEventListener("click", ()=>mostrarCarrito(1))
}
const desplegarBalance=()=>{
    btnBalance.addEventListener("click", mostrarBalance)
}
const desplegarFechas=()=>{
    verBalance.addEventListener("click",limpiarDiv)
}
const desplegarFactura=()=>{
    btnFactura.addEventListener("click", mostrarOrden)
}
export const IndexRender=async ()=>{
    desplegarListaProductos()
    desplegarProductosFiltrados()
    desplegarCarrito()
    desplegarBalance()
    desplegarFechas()
    desplegarFactura()
    desplegarFormulario()
}