import { cleanDiv } from "../component/mostrarElementos.js";
import { getProducto } from "../service/fetchService.js";

const rootElement = document.getElementById("divProductos");
const btnListaProductos = document.getElementById("listaProductos");
const divMain = document.getElementById("divMain");
let productCounter = 1;

export const createProductCard = ({ productId, image, name, brand, price, code, description }, index) => `
  <div class="card p-4 border border-primary rounded" id="card${index}">
      <img class="card-image" src="${image}" alt="${name}">
      <div class="d-flex justify-content-between align-items-center"></div>
      <div class="card-body" id="cardBody${index}">
          <h4 class="card-title" id='title${productId}'>${name}</h4>
          <h6 class="card-subtitle mb-2 text-muted">${brand}</h6>
          <p class="card-text">${description}. Código: ${code}</p>
          <div id="btnProducto">
              <button id='btnSumar${index}' type="button" onClick="sumarUnidad(${index})">+</button>
              <button id="btnRestar${index}" type="button" onClick="restarUnidad(${index})">-</button>
              <input id='impCantidad${index}' name=${productId} type="number" min="0" value="0" readonly></input>
          </div>
          <div class="buy d-flex justify-content-between align-items-center">
              <div class="price text-success"><h5 class="mt-4">${"$" + price}</h5></div>
              <button class="btn btn-primary" id="btnAgregar${index}" type="button" onClick="agregarCarrito(${index})">Agregar</button>
          </div>
      </div>
  </div>
`;

const renderProductList = async () => {
    cleanDiv();
    for (let i = 1; i <= 10; i++) {
        const productData = await getProducto(i);
        appendProductToDOM(productData, productCounter);
        productCounter++;
    }
};

const appendProductToDOM = (productData, index) => {
    const productCard = createProductCard(productData, index);
    rootElement.innerHTML += productCard;
    divMain.appendChild(rootElement);
};

export const initializeProductList = () => {
    btnListaProductos.addEventListener("click", renderProductList);
};