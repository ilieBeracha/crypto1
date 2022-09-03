var baseUrl = 'https://api.coinranking.com/v2/coins';
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
var apiKey = "coinranking766bf45217a0898add10146928f3c15774e25c3af6e3445c"

async function fetching() {
  let fetchApi = await fetch(`${proxyUrl}${baseUrl}`, {
    method: "GET",
    params: {
      limit: '100',
    },
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${apiKey}`,
      'Access-Control-Allow-Origin': '*'
    }
  })
  fetchApi = await fetchApi.json()
  fetchApi = await fetchApi.data.coins
  console.log(fetchApi)
  return fetchApi
}

async function loadCoins() {
  let coins = await fetching();
  let wrapDiv = document.querySelector('.wrapDiv')
  let btnPrice = document.getElementById('btnPrice')
  let btnMarketCap = document.getElementById('btnMarketCap')
  let btnChange = document.getElementById('btnChange')
  let coinsArrPrice = coins
  for (let i = 0; i < coins.length; i++) {
    if (!(coins[i].symbol.includes('US'))) {
      createDiv(coins[i].iconUrl, coins[i].symbol, coins[i].price, coins[i].marketCap, coins[i].change, coins[i].rank)
    }
  }
  btnPrice.addEventListener('click', function () {
    if (btnPrice.innerText === 'price') {
      wrapDiv.innerHTML = ""
      btnPrice.innerText = 'price ↑'
      coinsArrPrice.sort((a, b) => b.price - a.price)
      for (let i = 0; i < coinsArrPrice.length; i++) {
        if (!(coins[i].symbol.includes('US'))) {
          createDiv(coinsArrPrice[i].iconUrl, coinsArrPrice[i].symbol, coinsArrPrice[i].price, coinsArrPrice[i].marketCap, coinsArrPrice[i].change, coinsArrPrice[i].rank)
        }
      }
    } else if (btnPrice.innerText === 'price ↑') {
      wrapDiv.innerHTML = ""
      btnPrice.innerText = 'price ↓'
      coinsArrPrice.sort((a, b) => a.price - b.price)
      for (let i = 0; i < coinsArrPrice.length; i++) {
        if (!(coins[i].symbol.includes('US'))) {
          createDiv(coinsArrPrice[i].iconUrl, coinsArrPrice[i].symbol, coinsArrPrice[i].price, coinsArrPrice[i].marketCap, coinsArrPrice[i].change, coinsArrPrice[i].rank)
        }
      }
    } else if (btnPrice.innerText === 'price ↓') {
      wrapDiv.innerHTML = ""
      btnPrice.innerText = 'price'
      coinsArrPrice.sort((a, b) => b.marketCap - a.marketCap)
      for (let i = 0; i < coinsArrPrice.length; i++) {
        if (!(coins[i].symbol.includes('US'))) {
          createDiv(coinsArrPrice[i].iconUrl, coinsArrPrice[i].symbol, coinsArrPrice[i].price, coinsArrPrice[i].marketCap, coinsArrPrice[i].change, coinsArrPrice[i].rank)
        }
      }
    }
  })
  btnMarketCap.addEventListener('click', function () {
    if (btnMarketCap.innerText === 'market cap') {
      wrapDiv.innerHTML = ""
      btnMarketCap.innerText = 'market cap ↓'
      coinsArrPrice.sort((a, b) => a.marketCap - b.marketCap)
      for (let i = 0; i < coinsArrPrice.length; i++) {
        if (!(coins[i].symbol.includes('US'))) {
          createDiv(coinsArrPrice[i].iconUrl, coinsArrPrice[i].symbol, coinsArrPrice[i].price, coinsArrPrice[i].marketCap, coinsArrPrice[i].change, coinsArrPrice[i].rank)
        }
      }
    } else if (btnMarketCap.innerText === 'market cap ↓') {
      wrapDiv.innerHTML = ""
      btnMarketCap.innerText = 'market cap'
      coinsArrPrice.sort((a, b) => b.marketCap - a.marketCap)
      for (let i = 0; i < coinsArrPrice.length; i++) {
        if (!(coins[i].symbol.includes('US'))) {
          createDiv(coinsArrPrice[i].iconUrl, coinsArrPrice[i].symbol, coinsArrPrice[i].price, coinsArrPrice[i].marketCap, coinsArrPrice[i].change, coinsArrPrice[i].rank)
        }
      }
    }
  })
  btnChange.addEventListener('click', function () {
    if (btnChange.innerText === 'change') {
      wrapDiv.innerHTML = ""
      btnChange.innerText = 'change ↑'
      coinsArrPrice.sort((a, b) => b.change - a.change)
      for (let i = 0; i < coinsArrPrice.length; i++) {
        if (!(coins[i].symbol.includes('US'))) {
          createDiv(coinsArrPrice[i].iconUrl, coinsArrPrice[i].symbol, coinsArrPrice[i].price, coinsArrPrice[i].marketCap, coinsArrPrice[i].change, coinsArrPrice[i].rank)
        }
      }
    } else if (btnChange.innerText === 'change ↑') {
      wrapDiv.innerHTML = ""
      btnChange.innerText = 'change ↓'
      coinsArrPrice.sort((a, b) => a.change - b.change)
      for (let i = 0; i < coinsArrPrice.length; i++) {
        if (!(coins[i].symbol.includes('US'))) {
          createDiv(coinsArrPrice[i].iconUrl, coinsArrPrice[i].symbol, coinsArrPrice[i].price, coinsArrPrice[i].marketCap, coinsArrPrice[i].change, coinsArrPrice[i].rank)
        }
      }
    } else if (btnChange.innerText === 'change ↓') {
      wrapDiv.innerHTML = ""
      btnChange.innerText = 'change'
      coinsArrPrice.sort((a, b) => b.marketCap - a.marketCap)
      for (let i = 0; i < coinsArrPrice.length; i++) {
        if (!(coins[i].symbol.includes('US'))) {
          createDiv(coinsArrPrice[i].iconUrl, coinsArrPrice[i].symbol, coinsArrPrice[i].price, coinsArrPrice[i].marketCap, coinsArrPrice[i].change, coinsArrPrice[i].rank)
        }
      }
    }
  })
}
document.body.addEventListener('load', loadCoins())


function createDiv(image, names, prices, cap, changes, ranks) {
  let divAllCoins = document.querySelector('.allCoins')
  let wrapDiv = document.querySelector('.wrapDiv')
  let divCoin = document.createElement('div');
  divCoin.setAttribute('class', 'coin');
  let img = document.createElement('img');
  img.src = image
  let symbol = document.createElement('p');
  symbol.innerText = names
  let coinPrice = document.createElement('p');
  coinPrice.innerText = parseFloat(prices).toFixed(6)
  let marketCap = document.createElement('p');
  marketCap.innerText = cap
  let change = document.createElement('p');
  change.innerText = changes + "%"
  let rank = document.createElement('p');
  rank.innerText = ranks
  divCoin.append(img, symbol, coinPrice, marketCap, change, rank)
  wrapDiv.append(divCoin)
  divAllCoins.append(wrapDiv)
}