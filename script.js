// ========== SELECTORES ========== //
const cryptoForm = document.querySelector('#crypto-form');
const selectCoin = document.querySelector('#select-coin');
const selectCrypto = document.querySelector('#select-crypto');
const inputAmount = document.querySelector('#amount');

// ========== EVENTOS ========== //
cryptoForm.addEventListener('submit', (e) => {
    // Evita que se reinicie la pagina al subir el formulario
    e.preventDefault();

    const coinSelected = [...selectCoin.children].find(Option => Option.selected).value;
    const cryptoSelected = [...selectCrypto.children].find(Option => Option.selected).value;
    const inputAmountValue = inputAmount.value;

    console.log(coinSelected, cryptoSelected, inputAmountValue)

});