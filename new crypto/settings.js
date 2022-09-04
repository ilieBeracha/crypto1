let toggleMode = document.getElementById('toggleMode')
// toggleMode.addEventListener('click', function () {
//     let body = document.body;
//     let toggleText = document.getElementById('toggleText')
//     if (toggleText.innerText === "light mode") {
//         toggleText.innerText = 'dark mode'
//         body.style.backgroundColor = "white"
//     } else {
//         toggleText.innerText = 'light mode'
//         body.style.backgroundColor = "revert"
//     }
// })

toggleMode.addEventListener('change', function () {
    localStorage.setItem('dark', this.checked);
    if (this.checked) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
        localStorage.removeItem('dark')
    }
});


if(localStorage.getItem('dark')) {
    document.body.classList.add('dark');
}

