$(document).ready(function () {
    /*  GET QUOTES FROM API AND PARSE INTO JSON*/
    var quotes = new XMLHttpRequest();
    var randomNum, quote, author;
    quotes.onload = function () {
        var parsedQuotes = JSON.parse(quotes.responseText);    
        
        /*  GET NEW QUOTE ON BUTTON CLICK */
    
        $("#newQuote").on('click', function(){
            randomNum = Math.floor(Math.random()*(49));
            quote = parsedQuotes[randomNum].quote;
            author = parsedQuotes[randomNum].author;
            $("#quoteContainer").html('"'+quote+'"');
            $("#authorContainer").html('- '+author+' -');    
    });
    };
    
    quotes.open('GET', 'https://random-quote-generator.herokuapp.com/api/quotes/');
    
    quotes.send();
    
    /* POST TO TWITTER */
    $("#twitterButton").on('click', function(){
        window.open('https://twitter.com/intent/tweet?text='+quote+' ' + author);
    });
    
});