import { showBalance } from "../service/fetchService.js";
import { limpiarDiv } from "../component/mostrarElementos.js";

var verBalance = document.getElementById("verBalance");
var btnBalance = document.getElementById("btnBalance");
let divMian=document.getElementById("divMain");
let _balance = document.getElementById("tabla");

export const displayBalance = (
  numero,
  firstName,
  lastName,
  nombreProducto,
  precioProducto,
  cantidadProducto,
  subTotal
) => `
    <tr class="bg-success">
        <th scope="row">${numero}</th>
        <td>${firstName}</td>
        <td>${lastName}</td>
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

export const renderFila = (array) => {
    let total;
    let numeroFila = 1
    let contadorOrdenes = 0
    let cantidadOrdenes = array.length
    while (contadorOrdenes < cantidadOrdenes) {
        let firstNameClient = array[contadorOrdenes].firstNameClient
        let lastName = array[contadorOrdenes].lastNameClient
        total = array[contadorOrdenes].total
        let subTotal = array[contadorOrdenes].subTotal
        let nombreProducto = array[contadorOrdenes].productName
        let cantidadProducto = array[contadorOrdenes].productAmount
        let precioProducto = array[contadorOrdenes].productPrice
        _balance.innerHTML += displayBalance(numeroFila, firstNameClient, lastName, nombreProducto, precioProducto, cantidadProducto, subTotal)
        contadorOrdenes++;
        numeroFila++;
    }
    _balance.innerHTML += displayTotal(total)
    divMian.appendChild(_balance);
}
export const initializeBalance = () => {
    btnBalance.addEventListener("click", mostrarBalance)
}
export const initializeBalanceDiv = () => {
    verBalance.addEventListener("click", limpiarDiv)
}
export const mostrarBalance = async () => {
    const desde = document.getElementById("fechaInicio")
    const hasta = document.getElementById("fechaFin")
    document.getElementById("filaTitulos").removeAttribute("hidden")
    await showBalance(desde.value, hasta.value, renderFila)
}