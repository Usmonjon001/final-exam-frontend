var temperatureForm = document.querySelector('#temperatura-ozgartrator');
var temperatureInput = document.querySelector('#temperatura-input');
var temperatureHolder = document.querySelector('.temperatura-holder');
var temperatureButton = document.querySelector('#temperatura-button');
var temperaturaSelect = document.querySelector('#temperatura-select');


function celsiusToFahrenheit(temperatura){
    return (temperatura * 9/5) + 32
}


function celsiusToKelvin(temperatura){
    return temperatura + 273
}

function superFunction(){
    console.log('ishladi!');

    var tempVal = parseInt(temperatureInput.value);

    if(temperaturaSelect.value == 'fahrenheit'){
        temperatureHolder.innerHTML = celsiusToFahrenheit(tempVal); 
    }else{
        temperatureHolder.innerHTML  = celsiusToKelvin(tempVal); 
    }
}

temperatureForm.addEventListener('submit', function(e){
    e.preventDefault();
    superFunction();
})

temperaturaSelect.addEventListener('change', function(e){
    e.preventDefault();
    superFunction();
})
 