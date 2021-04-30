var odamlar = [
    {
        name: 'Odil',
        age: 12
    },
    {
        name: 'Asadullo',
        age:  48
    },
    {
        name: 'ShoxAbbos',
        age: 25,
    },
    {
        name: 'Jakhongir',
        age:  34,
    },
    {
        name: 'Muhlisa',
        age: 20
    },
    {
        name: 'Usmonjon',
        age: 20
    },
    {
        name: 'Iroda',
        age: 86
    },
    {
        name: 'Bekzod',
        age: 18
    },
    {
        name: 'SaidAbror',
        age: 20
    }
]

var yangiChelak = [];

for(i = 0; i < odamlar.length; i++){
    if(odamlar[i].age >= 20){
        yangiChelak.push(odamlar[i].name)
    }
}

console.log(yangiChelak);