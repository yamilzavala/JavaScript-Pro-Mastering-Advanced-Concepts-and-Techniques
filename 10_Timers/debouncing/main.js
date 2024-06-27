const searchEl = document.querySelector('#search');

function fakeApi() {
    console.log('START FAKE API!!')
    console.log('END FAKE API!!')
}

let debounceTimeOut;
searchEl.addEventListener('input', () => {
    clearTimeout(debounceTimeOut);
    debounceTimeOut = setTimeout(() => {
        fakeApi();
    },400)
})