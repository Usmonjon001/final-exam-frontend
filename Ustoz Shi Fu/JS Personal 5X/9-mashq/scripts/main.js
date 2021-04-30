var knopka = document.querySelector('#knopka');

var box = document.querySelector('#box');

var body = document.querySelector('body');

knopka.addEventListener('click', function(){
    box.classList.toggle('active');
    body.classList.toggle('body');
});