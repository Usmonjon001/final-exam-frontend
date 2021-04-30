var speedForm = document.querySelector('.second-Form');
var input = document.querySelector('#second-line__input');
var peshkomHolder = document.querySelector('#peshkom-holder');
var veloHolder = document.querySelector('#velosiped-holder');
var carHolder = document.querySelector('#mashina-holder');
var planeHolder = document.querySelector('#samalyot-holder');

function piyoda(tezlik){
    return tezlik/15;
}

function velosiped(tezlik){
    return tezlik/45;
}

function mashina(tezlik){
    return tezlik/75;
}

function plane(tezlik){
    return tezlik/450;
}

input.addEventListener('keyup', function(e){
    e.preventDefault();

    peshkomHolder.innerHTML = piyoda(input.value) + ' soat';
    veloHolder.innerHTML = velosiped(input.value) + ' soat';
    carHolder.innerHTML = mashina(input.value) + ' soat';
    planeHolder.innerHTML = plane(input.value) + ' soat';
});





// 2 vazifa



var  letterSelect = document.querySelector('#letter-select');
var letterTextarea = document.querySelector('#letter-textarea');

var letterArr = [
    {
        name: 'rasmiy',
        text: 'Men Tokhirjonov Usmonjon, blaa bla bla bal lab lbla lblalblablabal'
    },
    {
        name: 'onamga',
        text: 'Onajonim Mehribonim...'
    },
    {
        name: 'dostimga',
        text: 'Trimisan!...'
    },
    {
        name: 'sevgi',
        text: 'lorem imsut dalet color blin jingi closta dolert'
    }
]

letterSelect.addEventListener('change', function(e){
   for(i = 0; i < letterArr.length; i++){
    if(letterSelect.value == letterArr[i].name){
        letterTextarea.value = letterArr[i].text
    }
   } 
});



// 3-misol


var runForm = document.querySelector('#run-form');
var yesIndicator = document.querySelector('#yes-indicator');
var noIndicator = document.querySelector('#no-indicator');
var runTemperature = document.querySelector('#run-temperature');
var rainCheck = document.querySelector('#check-rain');
var gymCheck = document.querySelector('#check-gym');

function holat(){
    switch(true){
        case (runTemperature.value > 5 && runTemperature.value < 30):
            yesIndicator.style.color = 'green';
            noIndicator.style.color = 'black';
        break;
        case (rainCheck.checked && gymCheck.checked):
            yesIndicator.style.color = 'green';
            noIndicator.style.color = 'black';
        break;
        case (runTemperature.value < 5 && gymCheck.checked):
            yesIndicator.style.color = 'black';
            noIndicator.style.color = 'red';
        break;
        case rainCheck.checked:
            yesIndicator.style.color = 'black';
            noIndicator.style.color = 'red';
        break;
        default:
            yesIndicator.style.color = 'green';
            noIndicator.style.color = 'red';
    }
}

runForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    holat();
});


