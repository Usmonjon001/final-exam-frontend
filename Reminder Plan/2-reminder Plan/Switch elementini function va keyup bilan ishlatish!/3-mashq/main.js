var input = document.querySelector('#input');
var holder = document.querySelector('.holder');

function pupils(humans){
    switch(humans){
        case 'Usmonjon':
            return humans = 'Usmonjon Aqlli Bola!';
            break;
        case 'Humoyun':
            return humans = 'Humoyun aka meni okam bo\'ladi';
            break;
        case 'SaidAbror':
            return humans = 'SaidAbror Zo\'r bola!';
            break;
        case 'Orolbek':
            return humans = 'Orolbek zo\'r code yozadi';
            break;
        case 'Odil':
            return humans = 'Odil zo\'r Dizayner!';
            break;
        default:
            return humans = 'Afsuski Switchda Bunday Ism yo\'q';
            break;
    }
}

input.addEventListener('keyup', function(e){
    e.preventDefault();

    holder.innerHTML = pupils(input.value);
})
