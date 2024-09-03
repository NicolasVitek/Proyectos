import { getProductCart } from "../service/fetchService.js";
import { mostrarOrden } from "./factura.js";

let divMian=document.getElementById("divMain");
let divProductCart = document.getElementById("divProductCart");
var liProductCart = document.getElementById("liProductCart");
let divCompletePurchase=document.getElementById("divCompletePurchase");
var counterProductCart = 1;

export const dislayBtnCerrarVenta = () => `
<button id='btnCompletePurchase' type="button" onClick="mostrarOrden()" class="btn btn-primary btn-lg btn-block">Finalizar compra</button>
`;
window.mostrarOrden=mostrarOrden;
export const displayCarrito = (productId, image, name, price, brand, numero, amaount) => `
  <div class="card w-95 p-3" id="card${numero}">
  <div class="d-flex justify-content-between align-items-start">
      <div class="mt-2">
          <h4 id='title${productId}'>${name}</h4>
          <div class="mt-5">
              <h5 class="text-uppercase mb-0">${brand}</h5>
              <h1 class="main-heading mt-0">${"$" + price}</h1>
          </div>
      </div>
      <div class="image mt-2">
          <image src="${image}" width="150">
      </div>
      <button class="btnDanger" id="btnEliminar${numero}" type="button" onClick="eliminarCarrito(${numero})">X</button>
  </div>       
  <div class="align-items-center" id="btnProducto">
      <button id='btnSumar${numero}' type="button" onClick="sumarUnidad(${numero})">+</button>
      <button id="btnRestar${numero}" type="button" onClick="restarUnidad(${numero})">-</button>
      <input id='impCantidad${numero}' name="${productId}" type="number" min=0 minLength=1 value=${amaount} placeholder="" readonly></input>
      <button class="btn btn-warning" id="btnModificar${numero}" type="button" onClick="modificarCarrito(${numero})">Modificar</button>
  </div>    
`;

export const mostrarCarrito = async () => {
    for (let i = 0; i < localStorage.length; i++) {
        const productId = localStorage.key(i);
        const product = JSON.parse(localStorage.getItem(productId));
        try {
            const json = await getProductCart(product.productId, product.amaount);
            renderCarrito(product.amaount, json);
        } catch (error) {
            console.error("Error al obtener el producto del carrito:", error);
        }
    }
};

export const renderCarrito = (amaount, { name, image, price, productId, brand }) => {
    divProductCart.innerHTML += displayCarrito(productId, image, name, price, brand, counterProductCart, amaount);
    divCompletePurchase.innerHTML = dislayBtnCerrarVenta();
    divMian.appendChild(divProductCart);
    divMian.appendChild(divCompletePurchase);
    counterProductCart++;
};

export const initializeProductCart = () => {
    liProductCart.addEventListener("click", mostrarCarrito);
};
