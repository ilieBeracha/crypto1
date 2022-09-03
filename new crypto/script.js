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

async function loadCoins() {
  let coins = await fetching();
  console.log(coins[0]);
  let divAllCoins = document.querySelector('.allCoins')
  for (let i = 0; i < 10; i++) {
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


async function printHigherCoins24Hrs() {
  let coins = await fetching();
  let topCoinsArr = [];
  let counterAbove = 0;
  let counterBelow = 0;
  let ContentTitile = document.getElementById('24ChangeHeader')
  coins.map(coin => coin.change > 0 ? counterAbove++ : counterBelow++)
  console.log(counterAbove, counterBelow);
  let allOther = document.querySelector('.allOther')
  if (counterAbove >= counterBelow) {
    topCoinsArr = coins.sort((a, b) => b.change - a.change);
  } else {
    topCoinsArr = coins.sort((a, b) => a.change - b.change);
  }
  for (let i = 0; i < 8; i++) {
    ContentTitile.innerText = '24% change'
    let div = document.createElement('div');
    div.setAttribute('class', 'change24Div')
    let img2 = document.createElement('img');
    img2.src = topCoinsArr[i].iconUrl
    let symbol = document.createElement('p');
    symbol.innerText = topCoinsArr[i].symbol
    let change = document.createElement('p');
    change.innerText = topCoinsArr[i].change + "%"
    div.append(img2, symbol, change)
    allOther.append(div)
  }

}


printHigherCoins24Hrs()



async function btcChart1() {
  let fetching = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  fetching = await fetching.json();
  let data = fetching.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  // console.log(data);
  return {
    times,
    prices
  }
}

async function ethChart2() {
  let fetching = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  fetching = await fetching.json();
  let data = fetching.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}


async function cosmosChart3() {
  let fetching = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=SOL&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  fetching = await fetching.json();
  let data = fetching.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}


/// Charts ///
let createBtcChart
let createCosmosChart
let createethereumChart

async function printBtcChart() {
  let { times, prices } = await btcChart1()

  let btcChart = document.getElementById('canvas2').getContext('2d');

  let gradient = btcChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createBtcChart = new Chart(btcChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function () { }
        },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030'
      }
    }
  });
}





async function printEthereumChart() {
  let { times, prices } = await ethChart2()

  let ethereumChart = document.getElementById('canvas1').getContext('2d');

  let gradient = ethereumChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(78,56,216,.5)');
  gradient.addColorStop(.425, 'rgba(118,106,192,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createEthereumChart = new Chart(ethereumChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(118,106,192,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function () { }
        },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030'
      }
    }
  });
}


async function printCosmosChart() {
  let { times, prices } = await cosmosChart3()

  let cosmosChart = document.getElementById('canvas3').getContext('2d');

  let gradient = cosmosChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(27,30,54,.5)');
  gradient.addColorStop(.425, 'rgba(46,49,72,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createCosmosChart = new Chart(cosmosChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: "",
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(70,70,110,200)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function () { }
        },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030'
      }
    }
  });
}



async function updateBitcoinPrice() {
  let { times, prices } = await btcChart1()
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("btcPrice").innerText = "$" + currentPrice;
}

/// Update current price ///
async function updateEthereumPrice() {
  let { times, prices } = await ethChart2()
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("ethPrice").innerHTML = "$" + currentPrice;
}

async function updateCosmosPrice() {
  let { times, prices } = await cosmosChart3()
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("atomPrice").innerHTML = "$" + currentPrice;
}


updateBitcoinPrice()
printBtcChart()

updateEthereumPrice()
printEthereumChart()

updateCosmosPrice()
printCosmosChart()




