var valyutaForm = document.querySelector('#valyuta-form');
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

function universal(){
    if(valyutaSelect.value == 'dollor'){
        valyutaHolder.innerHTML = dollor(valyutaInput.value);
    }
    else if(valyutaSelect.value == 'rubl'){
        valyutaHolder.innerHTML = rubl(valyutaInput.value);
    }
    else if(valyutaSelect.value == 'euro'){
        valyutaHolder.innerHTML = euro(valyutaInput.value);
    }
}

valyutaInput.addEventListener('keyup', function(e){
    e.preventDefault();

    universal();
});

valyutaSelect.addEventListener('change', function(e){
    e.preventDefault();

    universal();
})
