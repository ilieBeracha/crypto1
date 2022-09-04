
async function fetchNews() {
    let fetching = await fetch('https://cryptonews-api.com/api/v1/category?section=general&items=50&page=1&token=y0qtyi1xdad0vxemc3hiklkgdnc5mhpn7i2a3tiu');
    fetching = await fetching.json()
    fetching = fetching.data
    return fetching
}

let counter = 0

async function createDivAndPrint() {
    let articles = await fetchNews();
    console.log(articles);
    let allNews = document.querySelector('.news')
    allNews.innerHTML = "";
    for (let i = 0; i < 2; i++) {
        counter++
        if (counter === articles.length) {
            counter = 0
        }
        console.log(counter);
        let divNews = document.createElement('div')
        divNews.setAttribute('class', 'divNews');
        let img = document.createElement('img');
        img.src = articles[counter].image_url
        let header = document.createElement('h3');
        header.innerText = articles[counter].title
        let content = document.createElement('p');
        content.innerText = articles[counter].text
        let date = document.createElement('p')
        date.innerText = articles[counter].date
        divNews.append(header, img, content, date)
        allNews.append(divNews)
        divNews.addEventListener('click', function () {
            location.href = articles[i].news_url;
        })
    }
}
createDivAndPrint()
setInterval(createDivAndPrint,5000)

if(localStorage.getItem('dark')) {
    document.body.classList.add('dark');
}


