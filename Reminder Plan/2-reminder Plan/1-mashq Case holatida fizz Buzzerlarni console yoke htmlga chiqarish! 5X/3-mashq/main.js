var number = document.querySelector('#number');
var holder = document.querySelector('.holder');

function fizzBuzzer(son){
    switch(true){
        case (son % 3 == 0 && son % 5 == 0):
            holder.innerHTML = 'FizzBuzzer!';
            break;
        case (son % 3 == 0):
            holder.innerHTML = 'Fizzer!';
            break;
        case (son % 5 == 0):
            holder.innerHTML = 'Buzzer';
            break;
        default:
            holder.innerHTML = 'Bu son 3ga ham 5ga ham bo\'linmaydi!';
    }
}

number.addEventListener('keyup', function(e){
    e.preventDefault();

    fizzBuzzer(number.value);
})
