let menu = document.querySelector('.menu')
let clos = document.querySelector('.close')
let nav = document.querySelector('.elements')
let cover = document.querySelector('.cover')
let features = document.querySelector('ul.features')
let company = document.querySelector('.company')
let arrow0 = document.querySelectorAll('.arrow')[0]
let arrow1 = document.querySelectorAll('.arrow')[1]
let showNav = function () {
    nav.classList.toggle('none')
    cover.classList.toggle('none')
}
// let arrowMap = 
let changeArrow = function () {
        this.classList.toggle('arrowReverse')
        features.classList.toggle('none')
    console.log('mm')
}
let changeArrow1 = function () {
        this.classList.toggle('arrowReverse')
        company.classList.toggle('none')
    console.log('mm')
}
menu.addEventListener('click',showNav)
clos.addEventListener('click',showNav)
arrow0.addEventListener('click',changeArrow)
arrow1.addEventListener('click',changeArrow1)

