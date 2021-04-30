let girlImgElement = document.querySelector('#girl-image');
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let dreams = [
    './images/aralash.jpg',
    './images/jigit1.jpeg',
    './images/men.gif',
    './images/men2.jpg',
    './images/qizcha1.jpg',
    './images/qizcha2.jpg',
    './images/qizcha3.jpg',
    './images/jonindan.jpg'
]; 

var i = 0;

setInterval(function(){
    i++;
    if(i == dreams.length){
        i = 0; 
    }
    girlImgElement.setAttribute('src', dreams[i]);
},2000);

prevBtn.addEventListener('click', function(e){
    e.preventDefault();
    i = i - 1;
    if(i == -1) {
       i = dreams.length - 1
    }
    girlImgElement.setAttribute('src', dreams[i]);
    console.log(i);
    
});

nextBtn.addEventListener('click', function(e){
    e.preventDefault();

    i++;
    if(i == dreams.length){
        i = 0; 
    }
    girlImgElement.setAttribute('src', dreams[i]);
    
});