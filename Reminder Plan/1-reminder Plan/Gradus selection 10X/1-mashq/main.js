var temperatureForm = document.querySelector('#temperature-form');
var temperatureInput = document.querySelector('#temperature-input');
var temperatureSelect = document.querySelector('#temperature-select');
var temperatureHolder = document.querySelector('.temperature-holder');

console.log(temperatureHolder);


function celciusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

function celciusToKelvin(temperature){
    return  temperature + 273; 
}

function universalFunctin(){
    var tempVal = parseInt(temperatureInput.value);

     if(temperatureSelect.value == 'fahrenheit'){
        temperatureHolder.innerHTML = celciusToFahrenheit(tempVal); 
     }
     else{
        temperatureHolder.innerHTML = celciusToKelvin(tempVal);
     }
}

temperatureForm.addEventListener('submit', function(e){
    e.preventDefault();

    universalFunctin();
})

temperatureSelect.addEventListener('change', function(e){
    e.preventDefault();

    universalFunctin(); 

})
