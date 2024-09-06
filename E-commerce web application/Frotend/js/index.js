import { initializeProductList } from "./Modules/ProductList.js"
import {  initializeBalanceDiv } from "./Modules/Balance.js";
import { initializeProductCart } from "./Modules/ProductCart.js";
import { initializeFilteredProducts } from "./Modules/ProductListSearch.js";
import { initializeClientForm } from "./Modules/RegisterClient.js";

document.addEventListener("DOMContentLoaded", () => {
    initializeProductList();
    initializeClientForm();
    initializeFilteredProducts();
    initializeProductCart();
    initializeBalanceDiv();
});