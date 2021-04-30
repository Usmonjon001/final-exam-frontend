var number = document.querySelector('#number');
var holder = document.querySelector('.holder');

function fizzBuzzer(qiymat){
    switch(true){
        case (qiymat % 3 == 0 && qiymat % 5 == 0):
            holder.innerHTML = 'FizzBuzzer';
            break;
        case qiymat % 3 == 0:
            holder.innerHTML = 'Fizzer';
            break;
        case qiymat % 5 == 0:
            holder.innerHTML = 'Buzzer';
            break;
        default:
            holder.innerHTML = 'Son 3ga ham 5ga ham bo\'linmaydi!';
    }
}

number.addEventListener('keyup', function(e){
    e.preventDefault();
    fizzBuzzer(number.value);
})
