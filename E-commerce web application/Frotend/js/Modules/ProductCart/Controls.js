import {
    updateProductCart,
    createProductCart,
    deleteProductCart,
} from "../../service/fetchService.js"

const disableCardControls = (cardIndex) => {
    const btnCreateProductCart = document.getElementById(`btnCreateProductCart` + cardIndex);
    const elements = [
        `btnIncreaseAmount`,
        `btnDecreaseAmount`,
        `inpAmount`
    ].map(id => document.getElementById(id + cardIndex));
    if (btnCreateProductCart === null) {
        elements.forEach(element => element.disabled = true);
    } else {
        btnCreateProductCart.disabled = true;
    }
};

const getInputAmount = (cardIndex) => document.getElementById(`inpAmount${cardIndex}`);

const updateCardStyle = (input) => {
    input.style.color = "#0AE30A";
    input.style.fontWeight = "bold";
};

export const callCreateProductCart = (cardIndex) => {
    const inpAmount = getInputAmount(cardIndex);
    createProductCart(1, inpAmount.name, inpAmount.value);
    disableCardControls(cardIndex);
};

export const callDeleteProductCart = (cardIndex) => {
    const productId = getInputAmount(cardIndex);
    const productCartCard = document.getElementById(`productCartCard${cardIndex}`);
    deleteProductCart(1, productId.name);
    productCartCard.remove();
};

export const callUpdateProductCart = (cardIndex) => {
    const inpAmount = getInputAmount(cardIndex);
    if (inpAmount.value > 0) {
        updateCardStyle(inpAmount);
        updateProductCart(1, inpAmount.name, inpAmount.value);
    }
};

window.callDeleteProductCart = callDeleteProductCart;
window.callUpdateProductCart = callUpdateProductCart;

