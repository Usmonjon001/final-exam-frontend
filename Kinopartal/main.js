// Navigation Bar uchun JS

let navBarSearch = document.querySelector('#navigationBar-searchIcon');
let navBarCansel = document.querySelector('#navigationBar-cansel');
let navSearch = document.querySelector('.header-navigationBar-menu-search-box-search');

navBarSearch.addEventListener('click', function(){
    navSearch.classList.toggle('navBaractive');
    console.log('sdsds')
});



// Header Image slayder uchun JS

let headerBtnLeft = document.querySelector('.header-main__leftbtn');
let headerBtnRight = document.querySelector('.header-main__rightbtn');
let mainImage = document.querySelector('#headerMain');

let arrayImage = [
    './images/first.jpg',
    './images/second.jpg',
    './images/third.jpg',
    './images/fivth.jpg',
    './images/sixth.jpg',
    './images/seventh.jpg',
    './images/eighth.jpg',
    './images/nineth.jpg',
];

i = 0;

setInterval(function(){
    i++;
    if(i == arrayImage.length){
        i = 0; 
    }
    mainImage.setAttribute('src', arrayImage[i]);
},3000);

headerBtnLeft.addEventListener('click', function(e){
    e.preventDefault();
    i = i - 1;
    if(i == -1) {
       i = arrayImage.length - 1
    }
    mainImage.setAttribute('src', arrayImage[i]);
    console.log(i);
    
});

headerBtnRight.addEventListener('click', function(e){
    e.preventDefault();

    i++;
    if(i == arrayImage.length){
        i = 0; 
    }
    mainImage.setAttribute('src', arrayImage[i]);
    
});


// Scrolbar uchun animatisya

let progress = document.querySelector('#progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
let percent = document.querySelector('.percent');

window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + '%';
    percent.textContent = "Page Scrolled " + Math.round(progressHeight) + "%";
}

