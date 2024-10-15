const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    localStorage.setItem('mainColor', color)
    alternateStyles.forEach(style => {
        if(localStorage.getItem('mainColor') == style.getAttribute('title')) {
            style.removeAttribute('disabled')
        } else {
            style.setAttribute('disabled', 'true')
        }
    });
}

setActiveStyle(localStorage.getItem('mainColor'))

const skinBgItem = document.querySelectorAll('.skin-bg-item a');
const root = document.querySelector('#root')

function bgToggler(imgItem) {
    root.style.cssText = `background: url('image/skins-bg/background-${imgItem}.jpg') center center / cover no-repeat;`
}

skinBgItem.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        bgToggler(i + 1)
        localStorage.setItem('bgItem', i + 1)
    })
})

bgToggler(localStorage.getItem('bgItem'))

