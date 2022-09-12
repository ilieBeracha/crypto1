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

let allContent = document.querySelector('.allContent')
let menuBtn = document.getElementById('menuBtn')

menuBtn.addEventListener('click', function () {
  let header_menu = document.querySelector('.header_menu');
  let main = document.querySelector('.main');
  if (menuBtn.innerText == "x") {
    header_menu.style.display = "flex"
    header_menu.style.backgroundColor = "#393E46"
    menuBtn.innerText= '-'
    allContent.style.marginTop = "150px"
  } else if(menuBtn.innerText=='-'){
    header_menu.style.display="none";
    menuBtn.innerText='x'
    allContent.style.marginTop = "0px"
  }
})

