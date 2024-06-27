function showNotification(msg, time) {
    const divEl = document.createElement('div')
    divEl.innerText = msg;
    divEl.className = 'notification'
    document.body.appendChild(divEl)

    setTimeout(() => {
        divEl.remove()
    },time)
}

showNotification('fist notification', 2000)
showNotification('second notification', 4000)
showNotification('third notification', 6000)