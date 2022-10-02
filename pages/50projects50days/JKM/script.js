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
setInterval(updateTime, 1000)


let edit = document.querySelector('.icon-gengduo')
