'use strict';

const btnShare = document.querySelector('.article__share-icon');
const containerShare = document.querySelector('.share');
const containerArticle = document.querySelector('.article');


window.addEventListener('click', e => {

    if (e.target == btnShare) {

        containerShare.classList.remove('share--hide');

        return;

    }

    if (e.target.closest('.share') !== containerShare) {

        containerShare.classList.add('share--hide');
    }

});

