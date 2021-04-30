// !!! CallBack => Nomi yo'q Funksiyani ichida argument qilib beriladigan qiymat "callback" deb ataladi!!!


// setTimeout => birorbir vazifa malum bir vaqtdan so'ng 1-martagina bajarilishini taminlaydi!!!
// setTimeout(function(){
//     console.log('2');
// },3000);


// Biror bir vazifani berilgan vaqtda takrornan bajarishga aytiladi!!!

// setInterval(function(){
//     console.log('Hello')
// }, 1000);

//  var stopIntervalBtn = document.querySelector('#stop-button');


// var solomInterval = setInterval(function(){
//     console.log('Hello')
// }, 1000);

// stopIntervalBtn.addEventListener('click', function(e){
//     e.preventDefault();

//     clearInterval(solomInterval)
// });

// setTimeout(function(){
//     clearInterval(solomInterval);
// },10000);
// console.log ('4 ning ildizi  = ',  Math.sqrt(4));

console.log(Math.random());
console.log(Math.random()*10);

function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

console.log('The number is - ',getRandomInt(30));

let kartaGuli = getRandomInt(3);
let playingCardHolder = document.querySelector('.playing-card-holder');



console.log(playingCardHolder);

switch(kartaGuli){
     case 0:
         playingCardHolder.classList.add('olma');
        break;
    case 1:
        playingCardHolder.classList.add('gisht');
        break;
    case 2:
        playingCardHolder.classList.add('chilli');
        break; 
    case 3:
        playingCardHolder.classList.add('qarga');
        break;
    default:

}
