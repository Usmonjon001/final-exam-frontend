var temperatureForm = document.querySelector('#temperature-form');
var temperatureInput = document.querySelector('#temperature-number');
var temperatureSelect = document.querySelector('#temperature-select');
var temperatureHolder = document.querySelector('.temperature-holder');

function fahrenheit(gradus){
    return (gradus * 9/5) + 32;
}

function kelvin(gradus){
    return gradus + 273;
}

temperatureInput.addEventListener('keyup', function(e){
    e.preventDefault();

    var tempVar = parseInt(temperatureInput.value)

    if(temperatureSelect.value == 'fahrenheit'){
        temperatureHolder.innerHTML = fahrenheit(tempVar);
    }
    else if(temperatureSelect.value == 'kelvin'){
        temperatureHolder.innerHTML = kelvin(tempVar);
    }
    else{
        console.log('Hello! qiymat mavjud emas')
    }
})
