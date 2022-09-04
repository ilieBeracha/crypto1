function regexPhoneNum(e) {
    let validNum = /^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$/
    let inputNum = document.getElementById('phoneNumber')
    if (!inputNum.value.match(validNum)) {
        e.preventDefault()
        inputNum.style.border = '2px solid red'
    } else {
        inputNum.style.borderColor = "revert"
    }

    let numbers = window.localStorage.getItem('numbers');
    if (!numbers) {
        numbers = []
    } else {
        JSON.parse(numbers)
    }
    const indiPhone = {
        'phoneNumber': inputNum.value
    }
    numbers.push(indiPhone)
    window.localStorage.setItem('numbers', JSON.stringify(numbers))
}


function rain(){
    let rainingBtc = document.querySelector('.rainingBtc')
    var interval = setInterval(function(){
        let div = document.createElement('div')
        div.setAttribute('class','rainingDiv')
        console.log(div);
        let img = document.createElement('img')
        div.style.left = Math.floor(Math.random()*70)+'%'
        div.style.top = "0"
        img.src = './pages/btcRain.png'
        img.setAttribute('class','imgBtcRain')
        img.style.color = "white"
        div.append(img)
        rainingBtc.append(div)
    },2200)
}
rain()

let toggleMode = document.getElementById('checkboxDark')
let toggleText = document.getElementById('checkboxDarkLabel')

toggleMode.addEventListener('change', function () {
    localStorage.setItem('dark', this.checked);
    if (this.checked) {
        document.body.classList.add('dark')
        toggleText.innerText = "light mode"
    } else {
        document.body.classList.remove('dark')
        localStorage.removeItem('dark')
        toggleText.innerText = "dark mode"

    }
});

if(localStorage.getItem('dark')) {
    document.body.classList.add('dark');
  }
  
