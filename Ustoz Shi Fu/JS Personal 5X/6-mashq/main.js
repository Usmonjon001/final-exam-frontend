var green = document.querySelector('#yashil');

var box = document.querySelector('#box');

console.log(box);

green.addEventListener('click', function(){
    box.classList.toggle('active');
});

var blue = document.querySelector("#kuk");

var box = document.querySelector('#box');

blue.addEventListener('click', function(e){
    box.classList.toggle('bluebox');
});