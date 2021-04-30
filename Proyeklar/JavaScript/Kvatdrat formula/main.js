var kvadrat = document.querySelector('#kvadrat');

var oshirish = document.querySelector('#oshirish');

oshirish.addEventListener('click', function(){
    console.log(kvadrat.value * kvadrat.value)
});


var kub = document.querySelector('#kub');

var oshirish2 = document.querySelector('#oshirish2');

oshirish2.addEventListener('click', function(){
    console.log(kub.value * kub.value * kub.value);
});