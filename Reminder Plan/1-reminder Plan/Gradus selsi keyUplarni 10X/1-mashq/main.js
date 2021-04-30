var  temperatureForm = document.querySelector('#temperature-uzgarturator');
var temperatureInput = document.querySelector('#temperature-input');
var temperatureButton = document.querySelector('#temperature-button');
var temperatureHolder = document.querySelector('.temperature-holder')

function celciusToFahrenheit(temperature){
    return (temperature * 9/5) + 32
}

temperatureInput.addEventListener('keyup', function(e){
    e.preventDefault();
    
    temperatureHolder.innerHTML = celciusToFahrenheit(temperatureInput.value);
})















// temperatureForm.addEventListener('submit', function(e){
//     e.preventDefault(); 

//     var fahTemp = (celciusToFahrenheit(temperatureInput.value));

//     temperatureHolder.innerHTML = fahTemp; 
// });
