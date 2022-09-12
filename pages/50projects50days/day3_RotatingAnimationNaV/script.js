const container = document.querySelector('.container')
const contentContainer = document.querySelector('.contentContainer')
const menu = document.querySelector('.menu')
const caidan = document.getElementById('caidan')
const close = document.getElementById('close')

caidan.addEventListener('click',()=>{
    container.classList.add('show-nav')
})

close.addEventListener('click',()=>{
    container.classList.remove('show-nav')
})