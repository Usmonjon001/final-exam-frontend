var numberInput = document.querySelector('#number');

numberInput.addEventListener('keyup', function(e){
    e.preventDefault(e);

    if (numberInput.value % 3 == 0 && numberInput.value % 5 ==0) {
        console.log('FizzBuzzer');
    }
    else if(numberInput.value % 3 == 0){
        console.log('Fizz');
    }
    else if(numberInput.value % 5 == 0){
        console.log('Buzzer');
    }
    else{
        console.log('Son 3gayam 5gayam bo\'linmaydi');
    }
})