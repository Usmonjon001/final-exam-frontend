var temperatureForm = document.querySelector('#temperature-form');

var temperatureInput = document.querySelector('#temperature-input');

var temperatureHolder = document.querySelector('.temperature-holder');

function temperature(gradus){
    return (gradus * 9/5) + 32;
}

temperatureInput.addEventListener('keyup', function(e){
    e.preventDefault();

    temperatureHolder.innerHTML = temperature(temperatureInput.value);
})
