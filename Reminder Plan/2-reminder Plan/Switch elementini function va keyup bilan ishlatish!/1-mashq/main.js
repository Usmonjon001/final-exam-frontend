var pupil = document.querySelector('#number');

function members(namers){

    var returnbox;

    switch(namers){
        case 'Odil':
            return namers = 'Salom Odil';
            break;
        case 'Shohrux':
            return namers = 'Salom Shohrux';
            break;
        case 'Asadullo':
            return namers = 'Salom Asadullo';
            break;
        case 'Orolbek':
            return namers = 'Salom Orolbek!';
            break;
        case 'Humyun':
            return namers = 'Salom Khumoyun!';
            break;
        default:
            namers = 'Bizda bunday shaxsning ismi mavjud emas!';
    }
}

pupil.addEventListener('keyup', function(e){
    e.preventDefault();

    var chiqarish = members(pupil.value);

    console.log(chiqarish);
})
