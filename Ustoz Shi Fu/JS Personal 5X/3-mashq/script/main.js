var knopkaElement = document.querySelector('#knopka');

var elementElement = document.querySelector('#element');

var bodyElement = document.querySelector('body')

knopkaElement.addEventListener('click', function(){
    elementElement.classList.toggle('extraBox');
    bodyElement.classList.toggle('extraBody');
});



