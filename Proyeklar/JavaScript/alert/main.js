var userName = document.querySelector('#UserName');
var userSureName = document.querySelector('#userSureName');
var submit = document.querySelector('#submit');

submit.addEventListener('click', function(){
    alert(`Salom ${userName.value} ${userSureName.value} Mening Saytimga Xush kelibsiz`);
});