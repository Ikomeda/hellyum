


const loginButton = document.querySelector('#login')
const modalBg = document.querySelector('.modal-background')
const modal = document.querySelector('.modal')

const joinButton = document.querySelector('#signup')
const joinModal = document.querySelector('#join')
const joinBG = document.querySelector('#joinBg')

loginButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

joinButton.addEventListener('click', () => {
  joinModal.classList.add('is-active');
});

joinBG.addEventListener('click', () => {
    joinModal.classList.remove('is-active');
});


(function () {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();


