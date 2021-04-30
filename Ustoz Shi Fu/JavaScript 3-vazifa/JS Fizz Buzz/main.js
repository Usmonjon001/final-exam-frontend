function fizzBuzzer(lyuboyRaqam){

    if(lyuboyRaqam % 3 == 0 && lyuboyRaqam % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if(lyuboyRaqam % 5 == 0){
        console.log('Buzz');
    }
    else if(lyuboyRaqam % 3 == 0){
        console.log('Fizz')
    }
    else{
        console.log('Ikkalasiga ham bo\'linmaydi!');
    }
}

fizzBuzzer(90);