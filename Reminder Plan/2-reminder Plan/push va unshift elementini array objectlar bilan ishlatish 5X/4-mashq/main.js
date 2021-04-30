var people = [
    {
        name: "Usmonjon",
        age: 20
    },
    {
        name: 'Shohida',
        age: 19
    },
    {
        name: 'Abdulaziz',
        age: 20
    },
    {
        name: 'Nafisa',
        age: 20
    },
    {
        name: 'Saidkamol',
        age: 20,
    },
    {
        name: 'Alina',
        age: 18,
    },
    {
        name: 'Orolbek',
        age: 16
    },
    {
        name: 'Go\'zal',
        age: 14
    },
    {
        name: 'Asilbek',
        age: 15
    },
    {
        name: 'Mubina',
        age: 13
    },
    {
        name: 'Xonzoda',
        age: 17
    },
    {
        name: 'Asadullo',
        age: 23
    },
    {
        name: 'Malika',
        age: 32,
    }
];

var adult = [];
var teen = [];

adult.unshift('ISM:');
teen.unshift('ISM:');


for(i = 0; i < people.length; i++){
    if(people[i].age >= 18){
        adult.push(people[i].name)
    }
    else if(people[i].age <= 18){
        teen.push(people[i].name);
    }
}
adult.push('Salom!');
console.log(adult);
console.log(teen);