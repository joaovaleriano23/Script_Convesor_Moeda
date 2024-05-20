const convertButton = document.querySelector(".convert-button");
// const currencySelectConvert = document.querySelector(".currency-select-convert")
const currencySelect = document.querySelector(".currency-select")

async function convertValues () {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); //valor do Real
  const currencyValueConverted = document.querySelector(".currency-value"); //Outras moedas

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

  console.log(data)

  const dolarToday = data.USDBRL.high
  const euroTody = data.EURBRL.high
  const libraTody = 2.0
  const bitcoinToday = data.BTCBRL.high
  
  // const convertedValue = inputCurrencyValue / dolarToday

  if(currencySelect.value == "dolar"){
    // Se o select estiver selecionado o valor de dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style:"currency",
      currency:"USD"
      }).format(inputCurrencyValue / dolarToday)

  }

  if(currencySelect.value == "euro"){
    // Se o select estiver selecionado o valor de euro, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style:"currency",
      currency:"EUR"
    }).format(inputCurrencyValue / euroTody)

  }

  if(currencySelect.value == "libra"){
    //Se o select estiver selecionado o valor de Libra, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style:"currency",
      currency:"GBP"
    }).format(inputCurrencyValue / libraTody)

  }

  if(currencySelect.value == "bitcoin"){
    //Se o select estiver selecionado o valor de Bitcoin, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style:"currency",
      currency:"BTC"
    }).format(inputCurrencyValue / bitcoinToday)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)

}

function changeCurrency(){
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")

  if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/Estado-unido.png"
  }

  if(currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  }

  if(currencySelect.value == "libra"){
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra.png"
  }

  if(currencySelect.value == "bitcoin"){
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"

  }

  convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)