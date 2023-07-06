const cardNumberInput = document.getElementById('cardNumber');
const cardholderNameInput = document.getElementById('cardholderName');
const expiryDateInput = document.getElementById('expiryDate');
const securityCodeInput = document.getElementById('securityCode');

const cardNumberDisplay = document.getElementById('cardNumberDisplay');
const cardholderNameDisplay = document.getElementById('cardholderNameDisplay');
const expiryDateDisplay = document.getElementById('expiryDateDisplay');
const securityCodeDisplay = document.getElementById('securityCodeDisplay');

const cardElement = document.querySelector('.card');
const cardInnerElement = document.querySelector('.card-inner');

cardNumberInput.addEventListener('input', () => {
    cardNumberDisplay.textContent = cardNumberInput.value;
});

cardholderNameInput.addEventListener('input', () => {
    cardholderNameDisplay.textContent = cardholderNameInput.value.toUpperCase();
});

expiryDateInput.addEventListener('input', () => {
    expiryDateDisplay.textContent = expiryDateInput.value;
});

securityCodeInput.addEventListener('input', handleSecurityCodeInput);

function handleSecurityCodeInput() {  // Cuando se cambia el codigo de seguridad, se da vuelta la tarjeta, sino, esta en la parte del frente.
  const isFlipped = securityCodeInput.value.length > 0;

  if (isFlipped) {
    cardElement.classList.add('flip');
    cardInnerElement.style.transform = 'rotateY(-180deg)';
  } else {
    cardElement.classList.remove('flip');
    cardInnerElement.style.transform = 'rotateY(0)';
  }

  securityCodeDisplay.textContent = securityCodeInput.value;
}

securityCodeInput.addEventListener('blur', () => {
  cardElement.classList.remove('flip');
  cardInnerElement.style.transform = 'rotateY(0)';
});

const btnPayment = document.getElementById('button-pay').addEventListener('click', () => { //boton para simular pago y resetea los campos
    document.getElementById('formPayment').reset();
});
