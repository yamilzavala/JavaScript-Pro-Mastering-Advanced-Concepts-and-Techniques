function startCountdown(time) {
    let duration = time;
    const el = document.getElementById('root')

    const timer = setInterval(() => {
        el.innerText = duration;
        duration--;

        if(duration <= 0) {
            clearInterval(timer);
        }
    }, time)
}

startCountdown(100)