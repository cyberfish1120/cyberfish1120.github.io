// 获取时间
function format(num) {
    if (num < 10) return '0' + num
    return '' + num
}
let date = new Date(),
    mon = format(date.getMonth() + 1),
    day = format(date.getDate())
function updateTime() {
    const hour = format(date.getHours())
    const min = format(date.getMinutes())
    const sec = format(date.getSeconds())
    timeDom.innerHTML = hour + ':' + min + ':' + sec
}

const dateDom = document.querySelector('.date'),
    timeDom = document.querySelector('.time')
dateDom.innerText = mon + '月' + day + '日'
setInterval(updateTime, 1000)


let edit = document.querySelector('.icon-gengduo')
