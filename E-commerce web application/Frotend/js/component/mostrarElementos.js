
export const cleanDiv = () => {
    document.getElementById("divMain").innerHTML="";
}


/*Funcion para ver balance*/
export const limpiarDiv = () => {
   /* document.getElementById("divProductList").innerHTML = ""
    document.getElementById("divProductCart").innerHTML = ""
    document.getElementById("divCompletePurchase").innerHTML = ""
    document.getElementById("divFactura").innerHTML = ""*/
    document.getElementById("divBalance").removeAttribute("hidden")
    document.getElementById("seccionBalance").removeAttribute("hidden")

}



