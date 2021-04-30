var knopkaElement = document.querySelector('#knopka');

var sectionElement = document.querySelector('#section');

var bodyElement = document.querySelector('body');

knopkaElement.addEventListener('click', function(){
    sectionElement.classList.toggle('hello');
    bodyElement.classList.toggle('extraBody')
});






















