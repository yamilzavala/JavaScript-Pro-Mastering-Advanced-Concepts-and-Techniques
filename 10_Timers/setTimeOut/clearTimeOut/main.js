const cancelBtn = document.querySelector('#redirection')

const timeOutRedirect = setTimeout(() => {
    window.location.href = 'https://www.google.com'
}, 5000)

cancelBtn.addEventListener('click', () => {
    clearTimeout(timeOutRedirect)
    alert('redirect cancelled')
})