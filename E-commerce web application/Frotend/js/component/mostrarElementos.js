import { renderProducto, renderListaProducto, renderCarrito, renderFactura, renderFila, renderSearch} from "../container/index.js"
import { getProducto, getProductoCarrito, showOrder, showBalance, buscarProducto} from "../service/fetchService.js"
import {dislayBtnCerrarVenta} from "../component/carrito.js"

export const cleanDiv=()=>{
    document.getElementById("divProductos").innerHTML=""
    document.getElementById("divCarrito").innerHTML=""
    document.getElementById("divCerrarVenta").innerHTML=""
    document.getElementById("divRegistrarCliente").innerHTML=""
    document.getElementById("divBalance").setAttribute("hidden", "hidden")
    document.getElementById("seccionBalance").setAttribute("hidden", "hidden")
    document.getElementById("divFactura").innerHTML=""
}

export const mostrarListaProductos=async ()=>{
    cleanDiv()
    let contador=1
    while(contador<=10){
        await getProducto(contador,renderListaProducto)
        contador++
    }   
}
export const mostrarProductos=async ()=>{
    cleanDiv()
    let contador=1
    while(contador<=10){
        await getProducto(contador,renderProducto)
        contador++
    }    
}
export const mostrarCarrito= async()=>{
    cleanDiv()
    for(var posicion=0;posicion<localStorage.length; posicion++){
        var productId=localStorage.key(posicion)
        var elemen=JSON.parse(localStorage.getItem(productId))
        await getProductoCarrito(elemen.productoId, elemen.productoCant, renderCarrito)
    }
    document.getElementById("divCerrarVenta").innerHTML+=dislayBtnCerrarVenta();
}
export const mostrarOrden=async()=>{
    document.getElementById("divProductos").innerHTML=""
    document.getElementById("divCarrito").innerHTML=""
    document.getElementById("divCerrarVenta").innerHTML=""
    document.getElementById("divRegistrarCliente").innerHTML=""
    document.getElementById("divBalance").setAttribute("hidden", "hidden")
    document.getElementById("seccionBalance").setAttribute("hidden", "hidden")
    await showOrder(renderFactura)
}

/*Funcion para ver balance*/
export const limpiarDiv=()=>{
    document.getElementById("divProductos").innerHTML=""
    document.getElementById("divCarrito").innerHTML=""
    document.getElementById("divCerrarVenta").innerHTML=""
    document.getElementById("divFactura").innerHTML=""
    document.getElementById("divBalance").removeAttribute("hidden")
    document.getElementById("seccionBalance").removeAttribute("hidden")

}
export const mostrarBalance=async()=>{
    const desde=document.getElementById("fechaInicio")
    const hasta=document.getElementById("fechaFin")
    document.getElementById("filaTitulos").removeAttribute("hidden")
    await showBalance(desde.value, hasta.value, renderFila)
}
export const mostrarProductosFiltrados=async()=>{
    cleanDiv()
    await buscarProducto(renderSearch)
}

