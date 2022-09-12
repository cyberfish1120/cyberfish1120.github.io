const mask = document.querySelector('.mask')
const loading = document.querySelector('.loading')

let load = 0

let int = setInterval(()=>{
    load++
    if(load==100) clearInterval(int)
    loading.innerText = `${load}%`
    loading.style.opacity = 1 - load/100
    mask.style.filter = `blur(${10-load/10}px)`
}, 30)



