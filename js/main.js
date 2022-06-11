const quote = document.querySelector('.quote-text');
const author = document.querySelector('.quote-author');

//all the buttons
const newQuoteBtn = document.querySelector('.new-quote-btn');
const facbookShareBtn = document.querySelector('.facebook-share-btn');
const speechBtn = document.querySelector('.speech-btn');
const copyBtn = document.querySelector('.copy-btn');

newQuoteBtn.addEventListener('click', clickHandler);
facbookShareBtn.addEventListener('click', clickHandler);
speechBtn.addEventListener('click', clickHandler);
copyBtn.addEventListener('click', clickHandler);


function clickHandler(e) {
    e.preventDefault();
    console.log('clicked');
}