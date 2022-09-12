const line = document.querySelector('.line')
const circles = document.querySelectorAll('.circle')
const btns = document.querySelectorAll('.btn')

let curId = 1

btns[1].addEventListener('click', ()=>{
    if(curId<4){
        circles[curId].classList.add('active')
        curId++
    }
    if(curId==1){
        btns[0].classList.add('disabled')
    }else if(curId==4){
        btns[1].classList.add('disabled')
    }else{
        btns[0].classList.remove('disabled')
        btns[1].classList.remove('disabled')
    }
    line.style.width = (curId-1)*33.333 + '%'
})

btns[0].addEventListener('click', ()=>{
    if(curId>1){
        curId--
        circles[curId].classList.remove('active')
    }
    if(curId==1){
        btns[0].classList.add('disabled')
    }else if(curId==4){
        btns[1].classList.add('disabled')
    }else{
        btns[0].classList.remove('disabled')
        btns[1].classList.remove('disabled')
    }
    line.style.width = (curId-1)*33.333 + '%'
})