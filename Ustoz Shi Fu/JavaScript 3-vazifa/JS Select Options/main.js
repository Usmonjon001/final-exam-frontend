var currencyForm = document.querySelector('#kurs-ozgartrator');
var currencyInput = document.querySelector('#kurs-input');
var currencyHolder = document.querySelector('.kurs-holder');
var currencyButton = document.querySelector('#kurs-button');
var currencySelect = document.querySelector('#kurs-select');

function yevroCurrency(yevroKurs){
    console.log(currencyInput.value * 1268129)
}

currencyButton.addEventListener('click', function(e){
    e.preventDefault();
    console.log(yevroCurrency);
})