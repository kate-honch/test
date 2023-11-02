const headerBtnOpen = document.querySelector('.header__mob--btn-open');
const headerBtnClose = document.querySelector('.header__mob--btn-close');
const headerMenu = document.querySelector('.header__mob--nav');
const questionTitles = document.querySelectorAll('.main__questions---subtitle');

headerBtnOpen.addEventListener('click', () => {
    headerMenu.classList.add('active');
    headerBtnClose.classList.add('active');
    headerBtnOpen.classList.add('hide');
});

headerBtnClose.addEventListener('click', () => {
    headerMenu.classList.remove('active');
    headerBtnClose.classList.remove('active');
    headerBtnOpen.classList.remove('hide');
});

questionTitles.forEach(title => {
    title.addEventListener('click', () => {
        title.nextElementSibling.classList.toggle('active');
    })
})