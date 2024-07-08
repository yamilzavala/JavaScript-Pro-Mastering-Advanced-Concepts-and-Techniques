const searchEl = document.querySelector('#search');

function fakeApi(p1, p2) {
    console.log('START FAKE API!!')
    console.log('p1: ', p1)
    console.log('p2: ', p2)
    console.log('END FAKE API!!')
}

// let debounceTimeOut;
// searchEl.addEventListener('input', () => {
//     clearTimeout(debounceTimeOut);
//     debounceTimeOut = setTimeout(() => {
//         fakeApi();
//     },400)
// })

//custom debounce function
function debounce(callback, delay){
    let timeoutId;
    return (...args) => {
        if(timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}

const debouncedQueryApi = debounce(fakeApi,400)
searchEl.addEventListener('input', (e) => {
    debouncedQueryApi(e.target.value, 'blue')
})
