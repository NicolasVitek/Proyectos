import { initializeProductList } from "../js/Functions/ProductList.js"
import {initializeBalance, initializeBalanceDiv } from "./Functions/Balance.js";
import { initializeProductCart } from "./Functions/ProductCart.js";
import { initializeFilteredProducts } from "./Functions/ProductListSearch.js";
import { initializeClientForm } from "./Functions/RegisterClient.js";

document.addEventListener("DOMContentLoaded", () => {
    initializeProductList();
    initializeClientForm();
    initializeFilteredProducts();
    initializeProductCart();
    initializeBalance();
    initializeBalanceDiv();
});