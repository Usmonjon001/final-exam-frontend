var valyutaForm = document.querySelector('#valyuta-form');
var valyutaInput = document.querySelector('#valyuta-input');
var valyutaSelect = document.querySelector('#valyuta-selection');
var valyutaHolder = document.querySelector('.valyuta-holder');

function dollor(kursi){
    return kursi * 10440;
}

function rubl(kursi){
    return kursi * 140;
}

function euro(kursi){
    return kursi * 11000;
}

valyutaInput.addEventListener('keyup', function(e){
    e.preventDefault();
    calc();
});

valyutaSelect.addEventListener('change', function() {
    calc()
})

function calc() {
    if(valyutaSelect.value == 'dollor'){
        valyutaHolder.innerHTML = dollor(valyutaInput.value);
    }
    else if(valyutaSelect.value == 'rubl'){
        valyutaHolder.innerHTML = rubl(valyutaInput.value);
    }
    else if(valyutaSelect.value = 'euro'){
        valyutaHolder.innerHTML = euro(valyutaInput.value);
    }
    else{
        console.log('Bizda bunday qiymat yoq!')
    }
}