var valyutaForm = document.querySelector('#valyuta-input');

var valyutaInput = document.querySelector('#valyuta-input');

var valyutaHolder = document.querySelector('.valyuta-holder');

function valyuta(qiymay){
    return qiymay * 142.83;
}

valyutaInput.addEventListener('keyup', function(e){
    e.preventDefault();

    valyutaHolder.innerHTML = valyuta(valyutaInput.value);
})
