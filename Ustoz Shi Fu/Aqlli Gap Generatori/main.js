let quoteText = document.querySelector('.quote');
let quoteAuthor = document.querySelector('.quote-author');
let quoteBtn = document.querySelector('.quote-btn');

let quoreList = [
    {
        text: 'Siqilsan siqil, lekin yiqilma!',
        author: 'Odil Nizomov'
    },
    {
        text: 'Motivatsiya birlamchi, Imtizom Doimiy',
        author: 'Azam Aliqulov'
    },
    {
        text: 'Tobutti bersenam, poviddi berma!',
        author: 'Shoxrux Botirov'
    },
    {
        text: 'You must fail hundred time, to succeed once',
        author: 'SaidAbror NizomKhujayev'
    },
    {
        text: 'Kimdir qilgan bo\'lsa senham qila olasan!',
        author: 'Shoxabbos Urinov'
    },
    {
        text: 'Bir dengizchidan ahvollar qale deb so\'rashganda, Yomon emas lekin cho\'yapmiz deb javob bergan ekan!!!',
        author: 'Orolbek Abduqodirov'
    },
    {
        text: 'Bir kottani bir kichikni gapiga kir!!!',
        author: 'Samandar  Xoliqov'
    },
    {
        text: 'O\'zbeklardan aqlli gap chiqmayapti',
        author: 'Jasurbek Ashurbekov'
    },
    {
        text: 'Jo\'jani Imtihondan Keyin Sanaymiz!!!',
        author: 'Khumoyun Inoyatov '
    },
    {
        text: 'Qancha ko\'p o\'qisang shuncha  ko\'p topasan!!!',
        author: ' Jakhongir Sag\'dullayev'
    },
    {
        text: 'Uylaning Birodar Uylaning!!!',
        author: 'Laziz G\'oibov',
    },
];

function getInitial(max){
    return Math.floor(Math.random() * Math.floor(max))
}

function quoteChanger(){
    let randomNumber = getInitial(10);
    quoteText.textContent = quoreList[randomNumber].text;
    quoteAuthor.textContent = quoreList[randomNumber].author;
};

quoteBtn.addEventListener('click', function(e){
    e.preventDefault();

    quoteChanger()
});

setInterval(function(){
    quoteChanger();
}, 5000);