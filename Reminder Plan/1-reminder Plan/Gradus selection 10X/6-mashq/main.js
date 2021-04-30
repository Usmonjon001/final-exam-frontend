var valyutaForm = document.querySelector('#valyuta-form'); // HTML elementidan id olish
var valyutaInput = document.querySelector('#valyuta-input'); // HTML elementidan id olish
var valyutaSelect = document.querySelector('#valyuta-select'); // HTML elementidan id olish
var valyutaHolder = document.querySelector('.valyuta-holder'); // HTML elementidan id olish

// Dollor kursini aniqlash funsiyasi

function dollor(kursi){
    return kursi * 10400;
}

// Rubl kursini aniqlash funsiyasi

function rubl(kursi){
    return kursi * 1400;
}

// Euro kursini aniqlash funsiyasi

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
    else{
        console.log('Bunday Qiymat Mavjud Emas!')
    }
}

valyutaInput.addEventListener('keyup', function(e){
    e.preventDefault() //refresh ni oldini olish

    universal();
});

valyutaSelect.addEventListener('change', function(e){
    e.preventDefault();

    universal();
})