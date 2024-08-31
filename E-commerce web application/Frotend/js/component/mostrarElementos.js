import { renderProducto, renderSearch } from "../container/index.js"
import { getProducto, buscarProducto } from "../service/fetchService.js"

export const cleanDiv = () => {
    document.getElementById("divMain").innerHTML="";
}

export const mostrarProductos = async () => {
    cleanDiv()
    let contador = 1
    while (contador <= 10) {
        await getProducto(contador, renderProducto)
        contador++
    }
}

/*Funcion para ver balance*/
export const limpiarDiv = () => {
   /* document.getElementById("divProductos").innerHTML = ""
    document.getElementById("divCarrito").innerHTML = ""
    document.getElementById("divCerrarVenta").innerHTML = ""
    document.getElementById("divFactura").innerHTML = ""*/
    document.getElementById("divBalance").removeAttribute("hidden")
    document.getElementById("seccionBalance").removeAttribute("hidden")

}

export const mostrarProductosFiltrados = async () => {
    cleanDiv()
    await buscarProducto(renderSearch)
}

