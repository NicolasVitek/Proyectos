import { initializeProductList } from "./Modules/Product/ProductList.js"
import { initializeBalanceDiv } from "./Modules/Order/Balance.js";
import { initializeProductCart } from "./Modules/ProductCart/ProductCart.js";
import { initializeFilteredProducts } from "./Modules/Product/ProductListSearch.js";
import { initializeClientForm } from "./Modules/Client/RegisterClient.js";
import { initializeOrder } from "./Modules/Order/Invoice.js";

document.addEventListener("DOMContentLoaded", () => {
    initializeProductList();
    initializeClientForm();
    initializeFilteredProducts();
    initializeProductCart();
    initializeBalanceDiv();
    initializeOrder();
});