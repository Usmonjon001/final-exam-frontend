// N1 ____________________________________________________________

// 1-mashq

// setTimeout(function(){
//   console.log('Hello')
// }, 1000);

// var komma = setInterval(function(){
//   console.log('Holle')
// },1000);


// setTimeout(function(){
//   clearInterval(komma)
// }, 10000);

// 2-mashq


// setTimeout(function(){
//   console.log('Usmonjon')
// }, 1);

// let usm = setInterval(function(){
//   console.log('Ism')
// },1);

// setTimeout(function(){
//   clearInterval(usm)
// }, 10000);


// 3-mashq


// setTimeout(function(){
//   console.log('Bding')
// }, 100);

// var uzb = setInterval(function(){
//     console.log('Uzbekistan')
// }, 50);

// setTimeout(function(){
//   clearInterval(uzb);
// },5000)


// 4-mashq 

// setTimeout(function(){
//   console.log('red')
// }, 5000);

// var hel = setInterval(function(){
//   console.log('Hello');
// }, 1);

// setTimeout(function(){
//   clearInterval(hel)
// }, 500);


// 5-mashq


// setTimeout(function(){
//   console.log('Salom')
// }, 5000);

// var uzb = setInterval(function(){
//   console.log('uzbek')
// },10);

// setTimeout(function(){
//   clearInterval(uzb);
// }, 7000);

// N2 ____________________________________________________________

// Math Floor Sonning qoldigini 0gacha kamaytirish;

// 1-mashq

// console.log(Math.floor(2.5));    // 2.5 => 2

// // 2-mashq

// console.log(Math.floor(4.5));

// // 3-mashq

// console.log(Math.floor('4.5'));

// // 4-mashq 

// console.log(Math.floor(2.3)); 

// // 5-mashq 

// console.log(Math.floor(9.4));

// N3 ____________________________________________________________

// Math.ceil() => Agar berigan sonning qoldiq mavjud bo'lsa undan olding songa tenlashtirish

// 1-mashq 

// console.log(Math.ceil(3.1)); // 3.1 => 4

// 2-mashq

// console.log(Math.ceil(2.43));

// // 3-mashq

// console.log(Math.ceil(3.1));

// // 4-mashq

// console.log(Math.ceil(4.9));

// // 5-mashq

// console.log(Math.ceil(32.45));

// N4 ____________________________________________________________




// Math abs() => sonni moduldan chiqarish!!!

// 1-mashq 

// console.log(Math.abs(-2));

// // 2-mashq 

// console.log(Math.abs(5));

// // 3-mashq

// console.log(Math.abs(-6));

// // 4-mashq 

// console.log(Math.abs('-7'));

// // 5-mashq

// console.log(Math.abs(-234));

// N5 ____________________________________________________________

// Math.round() => berilgan qiymat qoldig'iga ko'ra aniqlashtirish n=>n.5<=n

// 1-mashq

// console.log(Math.round(12.342));

// // 2-mashq

// console.log(Math.round(12.67));

// // 3-mashq

// console.log(Math.round(34.12));

// // 4-mashq

// console.log(Math.round(32.7));

// // 5-mashq

// console.log(Math.round(873.5));

// N6 ____________________________________________________________

// ParseInt() String Malumotlar Numberga aylantirib berish lekin qoldiq qiymat olmaydi!!!;

// 1-mashq

// var number = '2343.2 Ashurbekov';

// function uy(nomer){
//   return parseInt(nomer);
// }

// uy(number);

// // 2-mashq 

// console.log(parseInt('23dwasdasd'));

// // 3-mashq

// console.log(parseInt('32.324eqads'));

// // 4-mashq 

// console.log(parseInt('234.324dsdf'));

// // 5-mashq

// console.log(parseInt('wqed2131231'));

// N7 ____________________________________________________________


// parseFloat() => bu parseInt()ga o'xshash lekin bu buyruq qoldiq raqamlarni ham ola oladi;

// 1-mashq

// console.log(parseFloat('123.234er43'));

// // 2-mashq

// console.log(parseFloat('123.wer'));

// // 3-mashq

// console.log(parseFloat('123.we2332'));

// // 4-mashq

// console.log(parseFloat('2331.234fsdfs'));

// // 4-mashq

// console.log(parseFloat('23.314wer23'));

// // 5-mashq

// console.log(parseFloat('987wedwr23r32ewdqw.234'));

// N8 ____________________________________________________________

// Math.pow(number,**daraja); => darajaga ko'tarish!!!

// 1-mashq

// console.log(Math.pow(4,1));

// // 2-mashq

// console.log(Math.pow(4,2));

// // 3-mashq

// console.log(Math.pow(4,3));

// // 4-mashq

// console.log(Math.pow(4,4));

// // 5-mashq 

// console.log(Math.pow(4,5));

// N9 ____________________________________________________________

// toFixed() => Berilgan raqamning qoldiqlarini berilgan qiymat orqali keregini olish!

// 1-mashq

// var number = 235/13;

// console.log(number.toFixed(3));

// // 2-mashq

// var raqam =  9890/324;

// console.log(raqam.toFixed(3));

// // 3-mashq

// var number = 234/2;

// console.log(number.toFixed(4));

// // 4-mashq

// var son = 314/23;

// console.log(son.toFixed(4));

// // 5-mashq

// let qiymat = 234/23;

// console.log(qiymat.toFixed(6));

// N10 ____________________________________________________________

// Math.random() => 0 bilan 1 oralig'idagi tasodifiy raqamni oladi!!!
// console.log(Math.random());
// console.log(Math.random()*10);

// Math.random() => uchun

// 1-mashq

// console.log(Math.floor(Math.random()*5));

// // 2-mashq

// console.log(Math.floor(Math.random()*16));

// // 3-mashq

// console.log(Math.floor(Math.random()*324));

// // 4-mashq

// console.log(Math.floor(Math.random()*1324));

// // 5-mashq

// console.log(Math.floor(Math.random()*34132*1231));

// N10 ____________________________________________________________

// Tasodifiy qiymatlar umumligi funksiyasi!!!

// function getRandomInt(max){
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log('The number is - ',getRandomInt(30));

// 1-mashq

// function getRandomInt(max){
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log(getRandomInt(34));

// // 2-mashq

// function getRandomInt(max){
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log(getRandomInt(234));

// // 3-mashq

// function getRandomInt(max){
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log(getRandomInt(932480));

// // 4-mashq

// function getRandomInt(max){
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log(getRandomInt(23));

// // 5-mashq

// function getRandomInt(max){
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log(getRandomInt(234));

























