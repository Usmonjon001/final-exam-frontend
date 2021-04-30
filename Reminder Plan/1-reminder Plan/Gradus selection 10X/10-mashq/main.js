var valyutaForm = document.querySelector('#valyuta-Form');
var valyutaInput = document.querySelector('#valyuta-input');
var valyutaSelect = document.querySelector('#valyuta-select');
var valyutaHolder = document.querySelector('.valyuta-holder');

function dollor(kursi){
    return kursi * 10500;
}

function rubl(kursi){
    return kursi * 1500;
}

function euro(kursi){
    return kursi * 11000;
}


