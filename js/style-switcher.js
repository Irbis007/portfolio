const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyles.forEach(style => {
        if(color === style.getAttribute('title')) {
            style.removeAttribute('disabled')
        } else {
            style.setAttribute('disabled', 'true')
        }
    });
}

const skinBgItem = document.querySelectorAll('.skin-bg-item a');
const root = document.querySelector('#root')

function bgToggler() {
    skinBgItem.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            console.log(i)
            root.style.cssText = `background: url('image/skins-bg/background-${i + 1}.jpg') center center / cover no-repeat;`
        })
    })
}
bgToggler()

