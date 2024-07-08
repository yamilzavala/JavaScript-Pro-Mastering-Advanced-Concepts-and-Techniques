
//first example
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

//startCountdown(100)

//second example
const getElement = (selector) => {
    const el = document.querySelector(selector);
    if(el) return el;
    throw new Error('Please check your selector classes');
}

let angleRotation = 0;
let idInterval;
function animateEl() {
    clearInterval(idInterval)
    const el = getElement('.box')
    el.style.transform = `rotate(${angleRotation}deg)`;
    angleRotation+=2;
    idInterval = setInterval(animateEl,10);
}

animateEl()
