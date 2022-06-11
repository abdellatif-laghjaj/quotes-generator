const quote = document.querySelector('.quote-text');
const author = document.querySelector('.quote-author');

//all the buttons
const newQuoteBtn = document.querySelector('.new-quote-btn');
const facbookShareBtn = document.querySelector('.facebook-share-btn');
const speechBtn = document.querySelector('.speech-btn');
const copyBtn = document.querySelector('.copy-btn');

newQuoteBtn.addEventListener('click', getRandomQuote);
facbookShareBtn.addEventListener('click', shareToFacebook);
speechBtn.addEventListener('click', quoteToSpeech);
copyBtn.addEventListener('click', copyQuote);


//get a random quote
function getRandomQuote(){
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(result => {
        console.log(result);
    });
}

//share the quote to facboook
function shareToFacebook(){
    console.log("");
}

//generate the speech of the quote
function quoteToSpeech(){
    console.log("");
}

//copy the quote to the clipbord
function copyQuote(){
    console.log("");
}
