var valyutaForm = document.querySelector('#valyuta-form');

var valyutaInput = document.querySelector('#valyuta-input');

var valyutaHolder = document.querySelector('.valyuta-holder');


function valyuta(dollor){
    return dollor * 10498.19;
}

valyutaInput.addEventListener('keyup', function(e){
    e.preventDefault();

    valyutaHolder.innerHTML = valyuta(valyutaInput.value);

});
