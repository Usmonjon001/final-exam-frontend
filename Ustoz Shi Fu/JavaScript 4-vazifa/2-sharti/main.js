var pupil = prompt('Qaysi uquvchi haqida malumotga ega bo\'lmoqchisiz?');

switch(pupil){
    case 'Odil':
        console.log('Odil yomon bola');
        break;
    case 'Shoxrux':
        console.log('Shoxrux Yoshligidayam yomon bola bo\'gan');
        break;
    case 'Asadullo':
        console.log('Oldindan odamni asabiga tegib kelgan!');
        break;
    case 'Orolbek':
        console.log('Oldindan ko\'p gapirib kelgan!');
        break;
    case 'Humoyun':
        console.log('Har dooim zo\'r kayfiyatda!');
        break;
    default:
        console.log('Kimda kim hardoimni har doim dib yoziladi desa, chiqib keladi!');
        break;
}