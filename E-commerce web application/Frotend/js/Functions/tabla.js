import { showBalance } from "../service/fetchService.js";
import { limpiarDiv } from "../component/mostrarElementos.js";

var verBalance = document.getElementById("verBalance");
var btnBalance = document.getElementById("btnBalance");

export const displayBalance = (
  numero,
  nombreCliente,
  apellidoCliente,
  nombreProducto,
  precioProducto,
  cantidadProducto,
  subTotal
) => `
    <tr class="bg-success">
        <th scope="row">${numero}</th>
        <td>${nombreCliente}</td>
        <td>${apellidoCliente}</td>
        <td>${nombreProducto}</td>
        <td>${cantidadProducto}</td>
        <td>$${precioProducto}</td>
        <td>$${subTotal}</td>
    `;
export const displayTotal = (total) => `
    <tr class="bg-primary">
        <th scope="row">Total</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><b>$${total}</b></td>
`;
let _balance = document.getElementById("tabla");
export const renderFila = (array) => {
    let total;
    let numeroFila = 1
    let contadorOrdenes = 0
    let cantidadOrdenes = array.length
    while (contadorOrdenes < cantidadOrdenes) {
        let nombreCliente = array[contadorOrdenes].nameClient
        let apellidoCliente = array[contadorOrdenes].lastNameClient
        total = array[contadorOrdenes].income
        let subTotal = array[contadorOrdenes].subTotal
        let nombreProducto = array[contadorOrdenes].productName
        let cantidadProducto = array[contadorOrdenes].cantProduct
        let precioProducto = array[contadorOrdenes].priceProduct
        _balance.innerHTML += displayBalance(numeroFila, nombreCliente, apellidoCliente, nombreProducto, precioProducto, cantidadProducto, subTotal)
        contadorOrdenes++;
        numeroFila++;
    }
    _balance.innerHTML += displayTotal(total)
}
export const desplegarBalance = () => {
    btnBalance.addEventListener("click", mostrarBalance)
}
export const desplegarFechas = () => {
    verBalance.addEventListener("click", limpiarDiv)
}
export const mostrarBalance = async () => {
    const desde = document.getElementById("fechaInicio")
    const hasta = document.getElementById("fechaFin")
    document.getElementById("filaTitulos").removeAttribute("hidden")
    await showBalance(desde.value, hasta.value, renderFila)
}