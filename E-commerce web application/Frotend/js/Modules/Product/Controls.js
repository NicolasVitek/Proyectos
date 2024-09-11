const updateAmount = (cardIndex, increment) => {
  let btnDecreaseAmount = document.getElementById(`btnDecreaseAmount` + cardIndex);
  let inpAmount = document.getElementById(`inpAmount` + cardIndex);
  let newAmount = parseInt(inpAmount.value) + increment;
  if (newAmount <= 0) {
    newAmount = 0;
    btnDecreaseAmount.disabled = true;
  } else {
    btnDecreaseAmount.disabled = false;
  }
  inpAmount.value = newAmount;
};
export const increaseAmount = (cardIndex) => updateAmount(cardIndex, 1);
export const decreaseAmount = (cardIndex) => updateAmount(cardIndex, -1);