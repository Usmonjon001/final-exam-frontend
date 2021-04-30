var time = document.querySelector('#time');
var submit = document.querySelector('#submit');

submit.addEventListener('click', function(){
    console.log(`${time.value} minutingiz ` + time.value *  60 + 'sekundga teng!');
})
