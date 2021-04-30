var input = document.querySelector('#input');
var holder = document.querySelector('.holder');

function people(humans){
    switch(humans){
        case 'Usmonjon':
            return humans = 'TOKHIRJONOV USMONJON 2001-YIL ANDIJON VILOYATIDA TUG\'ILGAN!'
            break;
        case 'Odil':
            return humans = 'NIZOMOV ODIL 2001-YIL TOSHKENT VILOYATIDA TUG\'ILGAN!';
            break;
        case 'Humoyun':
            return humans = 'INAYATOV KHUMOYUN 1996-YIL TOSHKENT VILOYATIDA TUG\'ILGAN!';
            break;
        default:
            return humans = 'Afsuski bizda bunday shaxs kiritilmagan!';
    }
}

input.addEventListener('keyup', function(e){
    e.preventDefault();

    holder.innerHTML = people(input.value);
})
