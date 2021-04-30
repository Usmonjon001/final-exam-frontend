var knopkaElement = document.querySelector('#knopka');

var karopkaElement = document.querySelector('#uzgaruvchi');

var bodyElement = document.querySelector('body')

knopkaElement.addEventListener('click', function(){
    karopkaElement.classList.toggle('boxextra');
    bodyElement.classList.toggle('bodyExtra')
});





