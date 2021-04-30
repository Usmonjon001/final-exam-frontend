var temperatureForm = document.querySelector('#temperature-form');
var temperatureInput = document.querySelector('#temperature-input');
var temperatureSelect = document.querySelector('#temperature-select');
var temperatureHolder = document.querySelector('.temperature-holder');

function fahrenheit(gradus){
    return (gradus * 5/9) + 32;
}

function kelvin(gradus){
    return gradus - 272;
}

function universal(){
    if(temperatureSelect.value == 'fahrenheit'){
        temperatureHolder.innerHTML = fahrenheit(temperatureInput.value);
    }
    else if(temperatureSelect.value == 'kelvin'){
        temperatureHolder.innerHTML = kelvin(temperatureInput.value);
    }
    else{
        console.log('Bunday Qiymat Mavjud Emas!');
    }
}

temperatureInput.addEventListener('keyup', function(e){
    e.preventDefault();

    universal();
})

temperatureSelect.addEventListener('change', function(e){
    e.preventDefault();

    universal();
})
