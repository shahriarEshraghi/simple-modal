'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttons = document.querySelectorAll('.show-modal');
for (let button of buttons) {
    button.addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
document.addEventListener('click', e => {
    if ((e.target.classList.contains('close-modal')) || (!(e.target.classList.contains('show-modal')) && !(e.target.closest('.modal')))) {
        console.log('BASTE');
        closeModal();
    }
});