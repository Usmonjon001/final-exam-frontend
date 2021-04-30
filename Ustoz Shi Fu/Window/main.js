// I - Berilgan Malumotlarni Olib Uni LacalStorage Joylash

// if(!window.localStorage.getItem('username')){
//     let usernamePrompt = window.prompt('ILtimos Ismongizni Kirirting!!! ')

//     window.localStorage.setItem('username', usernamePrompt);    
// }else {
//     alert(`Salom ${window.localStorage.getItem('username')}`); 
// };

// II - NET Checker

// window.addEventListener('online', checkStatus);
// window.addEventListener('offline', checkStatus);


// function checkStatus(){
//     if(window.clientInformation.onLine){
//         alert('Networks is Ok');
//     } else{
//         alert('Internetingizni Qayta Tekshirib Ko\'rishingiz So\'raymiz!');
//     }
// }



// Mashqlar

//  1 - kiritilgan Malumot localStorage Joylash!!!

// 2 -mashq kirtilgan Malumotni LocalStorage ga joylash va uni olish!!!

// 3 - mashq Internet cheker Yasash!!!

// N1 ____________________________________________________________

// let inputForm = document.querySelector('#inputForm');
// let inputName = document.querySelector('#inputName');
// let inputSurename = document.querySelector('#inputSurename');
// let inputAge = document.querySelector('#inputAge');

// 1-mashq

// let usernamePrompt = window.prompt('Iltimos Ismingiz Kiriting!!!');

// window.localStorage.setItem('username', usernamePrompt);

// 2-mashq 

// inputForm.addEventListener('submit', function(e){
//     // var formObj = {
//     //     name: inputName.value,
//     //     surname: inputSurename.value,
//     //     age: inoutAge.value,
//     // }
//     // e.preventDefault();
//     // window.localStorage.setItem('username', JSON.stringify(formObj));

//     window.localStorage.setItem('username', inputName.value);
//     window.localStorage.setItem('userSurename', inputSurename.value);
//     window.localStorage.setItem('userAge', inputAge.value);
// });

// 3-mashq 

//  inputForm.addEventListener('submit', function(e){
//     e.preventDefault();

//     window.localStorage.setItem('username', inputName.value);
//     window.localStorage.setItem('userSureName', inputSurename.value);
//     window.localStorage.setItem('userAge', inputAge.value);
// });

// 4-mashq

// inputForm.addEventListener('submit',function(e){
//     e.preventDefault();

//     window.localStorage.setItem('username', inputName.value);
//     window.localStorage.setItem('userSureName', inputSurename.value);
//     window.localStorage.setItem('userAge', inputAge.value);
// });

// 5-mashq

// inputForm.addEventListener('submit', function(e){
//     e.preventDefault();

//     window.localStorage.setItem('userName', inputName.value);
//     window.localStorage.setItem('userSurename', inputSurename.value);
//     window.localStorage.setItem('userAge', inputAge.value);
// });

// N2 ____________________________________________________________

// LocalStoragedagi Malumotlarnidan foydalanish...

// 1-mashq

// let inputForm = document.querySelector('#inputForm');
// let inputName = document.querySelector('#inputName');
// let inputSurename = document.querySelector('#inputSurename');
// let inputAge = document.querySelector('#inputAge');

// inputForm.addEventListener('submit', function(e){
//     e.preventDefault();

//     if(!window.localStorage.getItem('userName')){
    
//         window.localStorage.setItem('userName', inputName.value);
//     } else{
//         alert(`Salom ${window.localStorage.getItem('userName')}`);
//     };
// });

// 2-mashq

// if(!window.localStorage.getItem('username')){
//     let userName = prompt('Iltimos Ismongizni Kiriting!');

//     window.localStorage.setItem('username', userName);
// } else{
//     alert(`Assalomu Alaykum ${window.localStorage.getItem('username')}`);
// };

// 3-mashq

// if(!window.localStorage.getItem('username')){
//     let userName = prompt('Iltimos Ismingizni Kiriting!');

//     window.localStorage.setItem('username', userName);
// } else { 
//     alert(`Assalomu Alaykum ${window.localStorage.getItem('username')}`);
// };

// 4-mashq

// if(!window.localStorage.getItem('userName')){
//     let userName = prompt('Iltimos Ismingizni kiriting!!!');

//     window.localStorage.setItem('userName', userName);
// } else {
//     alert(`Assalomu Alaykum ${window.localStorage.getItem('userName')}`);
// }

// 5-mashq

// if(!window.localStorage.getItem('username')){
//     let userName = prompt('Iltimos ismingizni kiriting!!!');

//     window.localStorage.setItem('username', userName);
// } else{
//     alert(`Assalomu alaykum ${window.localStorage.getItem('username')}`);
// }

// NETWORK CHECKER

// 1-mashq

// if(window.clientInformation.onLine){
//     ale/rt('NETWORKS is ok');
// } else {
//     alert('Please Check your Network!!!');
// }

// 2-mashq

// if(window.clientInformation.onLine){
//     alert('NETWORK IS OK');
// } else{
//     alert('Please Check Your Network');
// }

// 3-mashq

// if(window.clientInformation.onLine){
//     alert('Net is ok');
// } else {
//     alert('You have problem with netwok!');
// }

// 4-mashq

// if(window.clientInformation.onLine){
//     alert('Net is ok!');
// } else {
//     alert('You hava a problem with network!');
// }

// 5-mashq

// if(window.clientInformation.onLine){
//     alert('Your NET is ok');
// } else {
//     alert('You hava a problem with your network connection!');
// }