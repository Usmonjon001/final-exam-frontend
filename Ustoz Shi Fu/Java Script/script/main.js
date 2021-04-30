var knopkaElement;
knopkaElement = document.querySelector('#knopka');

var shadowFight = document.querySelector('#shadow-fight');

var bodyElement = document.querySelector("body");


knopkaElement.addEventListener('click', function(){
    shadowFight.classList.toggle('clicked');
    bodyElement.classList.toggle('night');
});




