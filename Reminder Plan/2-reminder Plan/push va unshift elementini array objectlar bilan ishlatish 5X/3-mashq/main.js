var people = [
    {
        name: 'Usmonjon',
        age: 20
    },
    {
        name: 'Rahmatillo',
        age: 12
    },
    {
        name: 'Sardor',
        age: 18,
    },
    {
        name: 'Bobur',
        age: 15,
    },
    {
        name: 'Nafisa',
        age: 24
    },
    {
        name: 'Shoxrux',
        age: 32,
    },
    {
        name: 'Islom',
        age: 37,
    },
    {
        name: 'Alina',
        age: 16
    },
    {
        name: 'Artyom',
        age: 22
    },
    {
        name: 'Gulmira',
        age: 42
    },
    {
        name: 'Yelena',
        age: 18
    },
    {
        name: 'Muslima',
        age: 24
    }
];

var adults = [];
var teens = [];



for(i = 0; i < people.length; i++){
    if(people[i].age >= 20){
        adults.push(people[i].name)
    }
    else if(people[i].age <= 18){
        teens.push(people[i].name);
    }
}

adults.unshift('ISM:');
adults.push('Name:')

teens.unshift('Salom');
teens.push('Hello');

console.log(adults);
console.log(teens);
