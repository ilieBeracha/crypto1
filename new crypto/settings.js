let toggleMode = document.getElementById('toggleMode')
toggleMode.addEventListener('click', function () {
    let body = document.body;
    let toggleText = document.getElementById('toggleText')
    if (toggleText.innerText === "light mode") {
        toggleText.innerText = 'dark mode'
        body.style.backgroundColor = "white"
    } else {
        toggleText.innerText = 'light mode'
        body.style.backgroundColor = "revert"
    }
})