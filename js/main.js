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
    newQuoteBtn.textContent = "Loading...";
    newQuoteBtn.classList.add('disabled');
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(result => {
        quote.textContent = result.content;
        author.textContent = result.author;
        newQuoteBtn.innerHTML = "New Quote" + "<ion-icon name='add-circle-outline'></ion-icon>";
        newQuoteBtn.classList.remove('disabled');
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
    //copy the quote to the clipboard
    const text = quote.textContent;

}
