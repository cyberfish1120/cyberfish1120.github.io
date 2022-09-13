const body = document.querySelector('body')
const divs = document.querySelectorAll('div')
let maxI = 0
divs.forEach((div,i)=>{
    if(div.offsetTop<document.documentElement.scrollTop+window.innerHeight){
        div.style.visibility='visible'
        maxI = i
    }   
})

window.addEventListener('scroll',()=>{
    divs.forEach((div, i)=>{
        if(i>maxI){
            if(div.offsetTop<document.documentElement.scrollTop+window.innerHeight-100){
                if(i&1){
                    div.style.animation = 'leftScrollIn 1s '
                }else{
                    div.style.animation = 'rightScrollIn 1s'
                }
                div.style.visibility='visible'
            }else{
                if(i&1){
                    div.style.animation = 'rightScrollIn 1s reverse forwards'
                }else{
                    div.style.animation = 'leftScrollIn 1s reverse forwards'
                }
            }
        }
    })
})