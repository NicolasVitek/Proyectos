import { buscarProducto } from "../service/fetchService.js";
import { cleanDiv } from "../component/mostrarElementos.js";
import { createProductCard } from "./ProductList.js";

const rootElement = document.getElementById("divProductList");
const btnBuscarProducto = document.getElementById("btnBuscarProducto");
const divMain = document.getElementById("divMain");

export const renderSearch = (array) => {
    cleanDiv();
    for (let i = 0; i < array.length; i++) {
        const { productId, image, name, brand, price, code, description } = array[i];
        rootElement.innerHTML += createProductCard({ productId, image, name, brand, price, code, description }, i);
        divMain.appendChild(rootElement);
    }
};

export const mostrarProductosFiltrados = async () => {
    await buscarProducto(renderSearch); 
};

export const initializeFilteredProducts = () => {
    btnBuscarProducto.addEventListener("click", mostrarProductosFiltrados);
};
