var numberInput = document.querySelector('#number');

numberInput.addEventListener('keyup', function(e){
    if(numberInput.value % 3 == 0 && numberInput.value % 5 == 0){
        console.log('Fizz Buzzer');
    }
    else if(numberInput.value % 3 == 0){
        console.log('Fizzer');
    }
    else if(numberInput.value % 5 == 0){
        console.log('Buzzer');
    }
    else {
        console.log('Son Ikkaramga ham bo\'linmaydi!');
    }
})