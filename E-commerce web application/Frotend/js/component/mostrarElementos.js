
export const cleanDiv = () => {
    document.getElementById("divMain").innerHTML="";
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



