var numberInput = document.querySelector('#number');

numberInput.addEventListener('keyup', function(e){
    e.preventDefault();

    if(numberInput.value % 3 == 0 && numberInput.value % 5 == 0){
        console.log('FizzBuzzer');
    }
    else if(numberInput.value % 3 == 0){
        console.log('Fizz');
    }
    else if(numberInput.value % 5 == 0){
        console.log('Buzz');
    }
    else{
        console.log('Son 3ga ham 5ga ham bo\'linmaydi!');
    }
})