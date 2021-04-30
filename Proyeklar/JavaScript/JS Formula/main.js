var temperatureForm = document.querySelector('#temperatura-ozgartrator');
var temperatureInput = document.querySelector('#temperatura-input');
var temperatureHolder = document.querySelector('.temperatura-holder');
var temperatureButton = document.querySelector('#temperatura-button');


function celsiusToFahrenheit(temperatura){
    return (temperatura * 9/5) + 32
}



temperatureInput.addEventListener('keyup', function(e){
    temperatureHolder.innerHTML = celsiusToFahrenheit(temperatureInput.value);
});
 