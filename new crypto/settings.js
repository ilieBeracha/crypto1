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