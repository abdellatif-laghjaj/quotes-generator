const quote = document.querySelector('.quote-text');
const author = document.querySelector('.quote-author');

//all the buttons
const newQuoteBtn = document.querySelector('.new-quote-btn');
const tweetBtn = document.querySelector('.tweet-btn');
const speechBtn = document.querySelector('.speech-btn');
const copyBtn = document.querySelector('.copy-btn');

newQuoteBtn.addEventListener('click', getRandomQuote);
tweetBtn.addEventListener('click', tweeQuote);
speechBtn.addEventListener('click', quoteToSpeech);
copyBtn.addEventListener('click', copyQuote);


//get a random quote on load
getRandomQuote();


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
function tweeQuote(){
    const text = quote.textContent;
    const url = "https://www.twitter.com/intent/tweet?text=" + text + " By " + author.textContent;
    window.open(url, '_blank');
}

//generate the speech of the quote
function quoteToSpeech(){
    const text = quote.textContent;
    const utterance = new SpeechSynthesisUtterance(text + " by " + author.textContent);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
}

//copy the quote to the clipboard
function copyQuote(){
    //copy the quote to the clipboard
    const text = quote.textContent;
    navigator.clipboard.writeText(text);

    //show the copy success message
    notie.alert({
        type: 'success',
        text: 'Quote copied to clipboard',
        time: 2
    });
}
