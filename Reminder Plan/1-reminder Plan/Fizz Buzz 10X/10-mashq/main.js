var numberInput = document.querySelector('#number');

numberInput.addEventListener('keyup', function(e){
    e.preventDefault();

    if(numberInput.value % 3 == 0 && numberInput.value % 5 == 0){
        console.log('FizzBuzzer');
    }
    else if(numberInput.value % 3 == 0){
        console.log('Fizzer');
    }
    else if(numberInput.value % 5 == 0){
        console.log('Buzzer');
    }
    else{
        console.log('Son qiymati 2g3a ham, 5ga ham b\'linmaydi!')
    }
})