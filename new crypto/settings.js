let toggleMode = document.getElementById('toggleMode')
let toggleText = document.getElementById('toggleText')

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

