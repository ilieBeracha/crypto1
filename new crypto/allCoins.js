var baseUrl = 'https://api.coinranking.com/v2/coins';
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
var apiKey = "coinranking766bf45217a0898add10146928f3c15774e25c3af6e3445c"


async function fetching() {
  let fetchApi = await fetch(`${proxyUrl}${baseUrl}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${apiKey}`,
      'Access-Control-Allow-Origin': '*'
    }
  })
  fetchApi = await fetchApi.json()
  fetchApi = await fetchApi.data.coins
  return fetchApi
}

async function loadCoins() {
    let coins = await fetching();
    let divAllCoins = document.querySelector('.allCoins')
    for (let i = 0; i < coins.length; i++) {
      if (!(coins[i].symbol.includes('US'))) {
        let divCoin = document.createElement('div');
        divCoin.setAttribute('class', 'coin');
        let img = document.createElement('img');
        img.src = coins[i].iconUrl
        let symbol = document.createElement('p');
        symbol.innerText = coins[i].symbol
        let coinPrice = document.createElement('p');
        parseFloat(coins[i].price).toFixed(2)
        coinPrice.innerText = parseFloat(coins[i].price).toFixed(2)
        let marketCap = document.createElement('p');
        marketCap.innerText = coins[i].marketCap
        let change = document.createElement('p');
        change.innerText = coins[i].change + "%"
        let rank = document.createElement('p');
        rank.innerText = coins[i].rank
        divCoin.append(img, symbol, coinPrice, marketCap, change, rank)
        divAllCoins.append(divCoin)
      }
    }
  
  }
  document.body.addEventListener('load', loadCoins())