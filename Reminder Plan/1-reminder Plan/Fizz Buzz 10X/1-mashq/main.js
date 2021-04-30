// function fizzBuzzer(lyuboyRaqam){
//     if(lyuboyRaqam % 5 == 0 && lyuboyRaqam % 3 == 0){
//         console.log('Fizz Buzz!');
//     }
//     else if(lyuboyRaqam % 5  == 0){
//         console.log('Fizz');
//     }
//     else if(lyuboyRaqam % 3 == 0){
//         console.log('Buzz');
//     }
//     else{
//         console.log('Ikkisiga ham bo\'linmaydi!');
//     }

// }

// fizzBuzzer(15)

var numberInput = document.querySelector('#number');

numberInput.addEventListener('keyup', function(e){
    e.preventDefault();

    if(numberInput.value % 3 == 0 && numberInput.value % 5 == 0){
        console.log('FizzBuzzer!');
    }
    else if(numberInput.value % 3 == 0){
        console.log('Fizz');
    }
    else if(numberInput.value % 5 == 0){
        console.log('Buzzer');
    }
    else{
        console.log('Son Ikkisiga ham bo\'linmaydi!');
    }
});
