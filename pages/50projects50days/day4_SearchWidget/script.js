const icon = document.querySelector('.icon-sousuo')
const input = document.querySelector('input')

icon.addEventListener('click', ()=>{
    input.classList.toggle('active')
    input.focus()
})