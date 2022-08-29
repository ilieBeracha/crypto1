
async function fetchNews() {
    let fetching = await fetch('https://cryptonews-api.com/api/v1/category?section=general&items=50&page=1&token=y0qtyi1xdad0vxemc3hiklkgdnc5mhpn7i2a3tiu');
    fetching = await fetching.json()
    fetching = fetching.data
    return fetching
}


async function createDivAndPrint(){
    let articles = await fetchNews();
    console.log(articles);
    for (let i = 0; i < 15; i++) {
        let allNews = document.querySelector('.news')
        let divNews = document.createElement('div')
        divNews.setAttribute('class','divNews');
        let img = document.createElement('img');
        img.src = articles[i].image_url
        let header = document.createElement('h6');
        header.innerText = articles[i].title
        let content = document.createElement('p');
        content.innerText = articles[i].text
        let date = document.createElement('p')
        date.innerText = articles[i].date
        divNews.append(header ,img ,content,date)
        allNews.append(divNews)
        divNews.addEventListener('click',function(){
            location.href = articles[i].news_url;
        })
    }
}
createDivAndPrint()







