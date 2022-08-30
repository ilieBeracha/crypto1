// function insertPhoneNumber(e){
//     let inputNum = document.getElementById('phoneNumber')
//     if(inputNum.value===""){
//         e.preventDefault()
//     } 
// }


function regexPhoneNum(e) {
    let validNum = /^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$/
    let inputNum = document.getElementById('phoneNumber')
    if (!inputNum.value.match(validNum)) {
        e.preventDefault()
        inputNum.style.border = '2px solid red'
        // inputNum.style.borderColor = "red"
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
    // let counter = 0
    let rainingBtc = document.querySelector('.rainingBtc')
    var interval = setInterval(function(){
        // counter++
        // console.log(counter);
        // if(counter>=5){
        //     clearInterval(interval)
        // }
        let div = document.createElement('div')
        div.setAttribute('class','rainingDiv')
        let img = document.createElement('img')
        div.style.left = Math.floor(Math.random()*70)+'%'
        div.style.top = "0"
        img.src = './pages/btcRain.png'
        img.setAttribute('class','imgBtcRain')
        img.style.color = "white"
        div.append(img)
        rainingBtc.append(div)
    },2000)
}
rain()
