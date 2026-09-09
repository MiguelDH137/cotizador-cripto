// ========== SELECTORES ========== //
const cryptoForm = document.querySelector('#crypto-form');
const selectCoin = document.querySelector('#select-coin');
const selectCrypto = document.querySelector('#select-crypto');
const inputAmount = document.querySelector('#amount');
const cryptoInfo = document.querySelector('#crypto-info')

// ========== EVENTOS ========== //
cryptoForm.addEventListener('submit', async (e) => {
    // Evita que se reinicie la pagina al subir el formulario
    e.preventDefault();

    const coinSelected = [...selectCoin.children].find(Option => Option.selected).value;
    const cryptoSelected = [...selectCrypto.children].find(Option => Option.selected).value;
    const inputAmountValue = parseFloat(inputAmount.value);

    try {
        cryptoInfo.innerHTML = `
            <div class="loader"></div>
            <p class="info-p">Procesando...</p>
        `

        const response = await (await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${cryptoSelected}${coinSelected}`)).json();
        const price = parseFloat(response.lastPrice);
        const priceHigh = parseFloat(response.highPrice);
        const priceLow = parseFloat(response.lowPrice);
        const priceVariation = parseFloat(response.priceChangePercent);
        const result = (inputAmountValue / price)

        inputAmount.value != '' ?
            cryptoInfo.innerHTML = `
                <p class="info-p">Precio: <span class="price">${price} ${coinSelected}</span></p>
                <p class="info-p">Precio mas alto: <span class="price">${priceHigh} ${coinSelected}</span></p>
                <p class="info-p">Precio mas bajo: <span class="price">${priceLow} ${coinSelected}</span></p>
                <p class="info-p">Variacion de 24h: <span class="price">${priceVariation} %</span></p>
                <p class="info-p">Puede comprar: <span class="price">${result.toFixed(4)} ${cryptoSelected}</span></p>
            `
            :cryptoInfo.innerHTML = `
                <p class="info-p">Precio: <span class="price">${price} ${coinSelected}</span></p>
                <p class="info-p">Precio mas alto: <span class="price">${priceHigh} ${coinSelected}</span></p>
                <p class="info-p">El precio mas bajo: <span class="price">${priceLow} ${coinSelected}</span></p>
                <p class="info-p">Variacion de 24h: <span class="price">${priceVariation} %</span></p>
            `


        
    } catch (error) {
        console.log(error)
    }

});