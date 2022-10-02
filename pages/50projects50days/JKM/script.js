// 获取时间
function format(num) {
    if (num < 10) return '0' + num
    return '' + num
}
let date = new Date(),
    mon = format(date.getMonth() + 1),
    day = format(date.getDate()),
    hour = format(date.getHours()),
    min = format(date.getMinutes()),
    sec = format(date.getSeconds())
function updateTime() {
    date = new Date()
    hour = format(date.getHours()),
    min = format(date.getMinutes()),
    sec = format(date.getSeconds())
    timeDom.innerText = hour + ':' + min + ':' + sec
}

const dateDom = document.querySelector('.date'),
    timeDom = document.querySelector('.time')
dateDom.innerText = mon + '月' + day + '日'
timeDom.innerText = hour + ':' + min + ':' + sec
setInterval(updateTime, 1000)


const edit = document.querySelector('.icon-gengduo'),
body = document.body, mask = document.querySelector('.mask')
edit.addEventListener('touchend',()=>{
    mask.style.display = 'block'
})

const nameDom = document.querySelector('#updateName')
const placeDom = document.querySelector('#updatePlace')
const confirmDom = document.querySelector('#confirm')
const toName = document.querySelector('.name')
const toPlace = document.querySelector('.place')

confirmDom.addEventListener('touchend', ()=>{
    if(nameDom.value) toName.innerText = nameDom.value
    if(placeDom.value) toPlace.innerText = placeDom.value
    mask.style.display = 'none'
})
