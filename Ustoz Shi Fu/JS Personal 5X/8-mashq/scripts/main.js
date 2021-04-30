var knopka = document.querySelector('#uzgartiruvchi');

karopka = document.querySelector('#box');

fon = document.querySelector('body');



knopka.addEventListener('click', function(){
    karopka.classList.toggle('active');
    fon.classList.toggle('body');
});