# CRYPTOZADOR

> Demo de cotizador de cryptomonedas Web, utilizando la API publica de BINANCE.

## Demo En Vivo
> Demo en vivo desplegada en **github Pages**:

https://migueldh137.github.io/cotizador-cripto/

---

## Stack Tecnológico
- **Lenguajes:**
  - HTML5.
    
  - CSS3.

  - JavaScript ES6.
 
- **API:**
  - Binance Spot Public API.
 
### Binance Public API:
> CriptoZador obtiene las cotizaciones y métricas de mercado de forma directa a través de la API pública Spot de Binance, una de las plataformas de intercambio de criptoactivos con mayor volumen y liquidez a nivel global

**EndPoint utilizado:**
> [documentación del endpoint](https://developers.binance.com/en/docs/catalog/core-trading-spot-trading/api/rest-api/market#ticker24hr)
- Se utiliza el endpoint de ticker de 24 horas (`/api/v3/ticker/24hr`), el cual proporciona (entre otros datos) la información sobre el último precio, el precio máximo y mínimo de las ultimas 24h, y el porcentaje de variación.

- A partir de la selección del usuario en la interfaz, se concatenan la criptomoneda y la divisa (por ejemplo: `BTC + USDT = BTCUSDT`), opteniendo el siguiente endpoint `https://api.binance.com/api/v3/ticker/24hr?symbol=${cryptoSelected}${coinSelected}`

- Se realiza un fetch() hacia la API de Binance, mostrando con css una carga mientras se espera la respuesta.
 
- Parámetros utilizados:
  - lastPrice: Precio actual.

  - highPrice / lowPrice: Valor máximo y mínimo de las últimas 24 horas.

  - priceChangePercent: Variación porcentual del valor.

  - Cálculo de conversión: Si el usuario ingresa un monto, se calcula la cantidad exacta de criptomoneda que puede adquirir dividiendo el monto entre el precio actual (monto / lastPrice).

---

## Diseño De Baja Fidelidad
<img width="1905" height="897" alt="desing excalidraw" src="https://github.com/user-attachments/assets/c1dfeb9b-db74-4973-b4d4-8814faaae078"/>

---

## Colaboradores
- **Miguel Amaya** ([@MiguelDH137](https://github.com/MiguelDH137))
