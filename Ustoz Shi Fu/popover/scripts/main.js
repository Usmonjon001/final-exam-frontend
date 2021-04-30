var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

var someBtn =document.querySelector('#some-btn');


var toastTrigger =document.querySelector('#toast-trigger');
var toster =document.querySelector('#toster');

toastTrigger.addEventListener('click', function(){
    toster.classList.toggle("show")
});


















