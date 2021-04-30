var valyutaForm = document.querySelector('#valyuta-form');
var valyutaInput = document.querySelector('#valyuta-input');
var valyutaHolder = document.querySelector('.valyuta-holder');

function valyuta(qiymat){
    return qiymat * 12681;
}

valyutaInput.addEventListener('keyup', function(e){
    e.preventDefault();

    valyutaHolder.innerHTML = valyuta(valyutaInput.value);
});