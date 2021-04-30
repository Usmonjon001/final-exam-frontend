function fizzBuzzer(randomNumber){
    switch(true){
        case(randomNumber % 3 == 0 && randomNumber % 5 == 0):
            console.log("FizzBuzzer");
        break;
        case randomNumber % 3 == 0: 
            console.log('Fizz');
        break;
        case randomNumber % 5 == 0:
            console.log('Buzzer');
        break;
        default:
            console.log('Ungayam Bungayam Bo\'linmaydi');
    }
}

fizzBuzzer(1)