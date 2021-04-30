var number = document.querySelector('#number');

function universal(son){
    for(i = 0; i <= number.value; i++ ){
        console.log(i);
    }
}

number.addEventListener('submit', function(e){
    e.preventDefault();

    universal(number.value);
});
