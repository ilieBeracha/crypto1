var baseUrl = 'https://api.coinranking.com/v2/coins?limit=100';
var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
var apiKey = "coinranking766bf45217a0898add10146928f3c15774e25c3af6e3445c";

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

async function printCoins() {
    let coins = await fetching();
    console.log(coins);
    let portfoilio = document.querySelector('.portfoilio')
    for (let i = 0; i < 5; i++) {
        let coinDiv = document.createElement('div')
        coinDiv.setAttribute('class', 'portfolioEach')
        let label = document.createElement('label')
        label.innerText = 'amount:'
        let input = document.createElement('input');
        input.setAttribute('id', 'amount' + i)
        let label2 = document.createElement('label')
        label2.innerText = 'choose coin:'
        var select = document.createElement('select');
        select.setAttribute('class', 'selectBox')
        select.setAttribute('id', 'coin' + i)
        for (let j = 0; j < coins.length; j++) {
            var option = document.createElement('option')
            option.value = coins[j].symbol
            option.innerText = coins[j].symbol
            select.append(option)
        }
        coinDiv.append(label, input, label2, select)
        portfoilio.append(coinDiv)
    }
    let calculateBtn = document.getElementById('calculateBtn')
    calculateBtn.addEventListener('click', calculate)
}

printCoins()




async function calculate(e) {
    let coins = await fetching()
    let sum = 0
    for (let i = 0; i < 5; i++) {
        let input = document.getElementById(`amount${i}`);
        let select = document.getElementById(`coin${i}`);
        let coin = coins.filter(coin => coin.symbol === select.value)[0]
        console.log(coin);
        sum += input.value * coin.price
    }
    let portfolioAmount = document.getElementById('portfolioAmount')
    let amountAfterCheckDiv = document.getElementById('amountAfterCheck')
    if (sum === 0) {
        e.preventDefault();
        alert('no coins applied')
    } else {

        portfolioAmount.innerText = Number.parseFloat(sum).toFixed(2) + "$"
        amountAfterCheckDiv.style.display = "block"
    }
}


if (localStorage.getItem('dark')) {
    document.body.classList.add('dark');
}

