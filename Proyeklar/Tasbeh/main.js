var numberHolder = document.querySelector('.container-screen__number');
var adder = document.querySelector('#adder');
var lower = document.querySelector('#lower');

info = 0;

adder.addEventListener('click', function(e){
    e.preventDefault();
    
    info++;
    numberHolder.innerHTML= info;
});

lower.addEventListener('click', function(e){
    e.preventDefault();
    
    info--;
    numberHolder.innerHTML= info;
});
