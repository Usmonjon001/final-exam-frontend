var input = document.querySelector('#input');
var holder = document.querySelector('.holder');

function sigaretlar(turlari){
    switch(turlari){
        case 'PallMall':
            return turlari = '11 000 sum';
            break;
        case 'Milano':
            return turlari = '10 000 sum';
            break;
        case 'Esse Gold':
            return turlari = '12 000 sum';
            break;
        case 'Malbra':
            return turlari = '14 000 sum';
            break;
        case 'Belamur':
            return turlari = '1 000 sum';
            break;
        default:
            return turlari = 'Afsus Bunmday Turdagi Tamaki Mahsuloti Hali Yetib Kelmagan!';
    }
}

input.addEventListener('keyup', function(e){
    e.preventDefault();

    holder.innerHTML = sigaretlar(input.value);
})
