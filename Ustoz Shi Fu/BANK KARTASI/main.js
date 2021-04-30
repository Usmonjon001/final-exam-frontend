var cardNumberInput = document.querySelectorAll('.card-numb-inpput');
let bankTitle = document.querySelector('.bank-title');
let cardTypeImage = document.querySelector('#card-type-img');

function cardTypeSwitcher(cardTitleNumber) {
    switch (cardTitleNumber) {
        case '5600':
            console.log('Uzcard!');
            cardTypeImage.setAttribute('src', './images/uzcard.png');
            break;
        case '5300':
            console.log('MasterCard!');
            cardTypeImage.setAttribute('src', './images/MasterCard.png');
            break;  
        case '4278':
            console.log('Visa');
            cardTypeImage.setAttribute('src', './images/visa.png');
            break;
        case '9860':
            console.log('Humo!');
            cardTypeImage.setAttribute('src', './images/humo.png');
            break;
        default:
            console.log('default');
            cardTypeImage.setAttribute('src', './images/chip.png');
    }
}

function bankTypeSwitcher(bankTitleNubmer) {
    switch (bankTitleNubmer) {
        case '1135':
            bankTitle.textContent = 'Xalk Banki';
            break;
        case '1660':
            bankTitle.textContent ='OFB';
            break;
        case '3572':
            bankTitle.textContent = 'TBS';
            break;
        case '2742':
            bankTitle.textContent = 'NBU';
            break;
        case '1650':
            bankTitle.textContent = 'Capital Bank';
            break;
        case '7532':
            bankTitle.textContent = 'SQB';
            break;
        default:
            bankTitle.textContent = 'Your Bank ';
            break;
    }
}

cardNumberInput.forEach(function (cardInput) {
    cardInput.addEventListener('keyup', function () {
        if (cardInput.dataset.inputType === 'card') {
            cardTypeSwitcher(cardInput.value);
        } else if (cardInput.dataset.inputType === 'bank') {
            bankTypeSwitcher(cardInput.value);
        }
    })
});