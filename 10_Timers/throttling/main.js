const content = document.querySelector('#root');

function getRandomColor() {
    const palette = [
        '#FFADAD',
        '#FFC3A0',
        '#FF677D',
        '#FF603D',
        '#FF710D',
        '#FF110D',
        '#FF155D',
        '#FF250D',
        '#AB112D',
        '#AB892D',
    ]
    const randomIndex = Math.floor(Math.random() * palette.length)
    return palette[randomIndex]
}

function loadMoreItems() {
    const scrollDistanceToBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

    if(scrollDistanceToBottom < 200){
        console.log('LOADING FAKE DATA!!!')
        for (let i = 0; i < 10; i++) {
            const item = document.createElement('div');
            item.classList.add('item');
            item.textContent = 'item ' + (content.children.length + 1)
            item.style.background = getRandomColor()
            content.appendChild(item)            
        }
    }
}

//initial load
loadMoreItems();

let flag = false;
//scroll event
window.addEventListener('scroll', () => {
    if(!flag) {
        loadMoreItems();
        flag = true;
        setTimeout(() => {
            flag = false;
        },300)
    }
})