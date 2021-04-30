var temperaturaForm = document.querySelector('#temperatura-form');

var temperaturaInput = document.querySelector('#temperatura-input');

var temperaturaHolder = document.querySelector('.temperatura-holder');

function temperatura(gradus){
    return (gradus * 9/5) + 32;
}

temperaturaInput.addEventListener('keyup', function(e){
    e.preventDefault();

    temperaturaHolder.innerHTML = temperatura(temperaturaInput.value);
})
