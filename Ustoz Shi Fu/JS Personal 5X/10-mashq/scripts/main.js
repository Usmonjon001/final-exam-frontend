var knopka = document.querySelector('#knopka');

var boxElement = document.querySelector('#box');

var body = document.querySelector('body')

knopka.addEventListener('click', function(){
    boxElement.classList.toggle('red');
    body.classList.toggle('body')
});