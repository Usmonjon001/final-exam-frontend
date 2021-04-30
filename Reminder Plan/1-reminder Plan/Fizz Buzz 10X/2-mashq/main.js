var numberInput = document.querySelector('#number');

numberInput.addEventListener('keyup', function(e){
    e.preventDefault();

    if(numberInput.value % 3 == 0 && numberInput.value % 5 == 0){
        console.log('FizzBuzzzer');
    }
    else if(numberInput.value % 3 == 0){
        console.log('Fizz');
    }
    else if(numberInput.value % 5 == 0){
        console.log('Buzz');
    }
    else{
        console.log('Son qiytmati ikkisiga ham bo\'linmaydi!');
    }
})
