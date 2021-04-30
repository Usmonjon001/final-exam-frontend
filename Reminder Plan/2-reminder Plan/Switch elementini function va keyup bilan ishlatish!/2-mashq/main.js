var number = document.querySelector('#number');
var holder = document.querySelector('.holder');

function inputqiymat(qiymat){
    switch(qiymat){
        case 'Usmonjon':
            return qiymat = 'Salom Usmonjon';
            break;
        case 'Odil':
            return qiymat = 'Salom Odil';
            break;
        case 'Shohrux':
            return qiymat = 'Salom Shoxrux';
            break;
        case 'SaidAbror':
            return qiymat = 'Salom SaidAbror';
            break;
        case 'Humoyun':
            return qiymat = 'Salom Humyun';
            break;
        case 'Asadullo':
            return qiymat = 'Salom Asadullo';
            break;
        default:
            return qiymat = 'Bizdan Bunday shaxsning ismi yo!'; 
    }
}

number.addEventListener('keyup', function(e){
    e.preventDefault();


    holder.innerHTML = inputqiymat(number.value);
});