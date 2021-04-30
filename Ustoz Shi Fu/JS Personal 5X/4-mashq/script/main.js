var knopkaElement = document.querySelector('#knopka');

var boxElement = document.querySelector('#box');

var bodyElement = document.querySelector('body')

knopkaElement.addEventListener('click', function(){
    boxElement.classList.toggle('extraBox');
    bodyElement.classList.toggle('extraBody')
});







