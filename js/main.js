const shareBtn = document.querySelector('.card__share-btn');
const share = document.querySelector('.card__share');
const svgItems = document.querySelector('.card__svg-box');

const showShareBtn = () => {
	svgItems.classList.toggle('card__svg-box-block');
	shareBtn.classList.toggle('card__share-btn-bg');
	share.classList.toggle('card__currentcolor-share');
};
shareBtn.addEventListener('click', showShareBtn);
