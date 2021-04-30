var speedForm = document.querySelector('#speed-form');
var speedRoad = document.querySelector('#road-input');
var speedTime = document.querySelector('#time-input');
var speedHolder = document.querySelector('.speed-holder');

function velocity(speed){
    return speed =  speedRoad.value / speedTime.value;
}

speedRoad.addEventListener('keyup', function(e){
    e.preventDefault();

    speedHolder.innerHTML = velocity(speedRoad.value);
});

speedTime.addEventListener('keyup', function(e){
    e.preventDefault();

    speedHolder.innerHTML = velocity(speedTime.value);
});
