var people = [
    {
        name: 'Usmonjon',
        gender: 'male'
    },
    {
        name: 'Shohida',
        gender: 'female'
    },
    {
        name: 'Saidkamol',
        gender: 'male'
    },
    {
        name: 'Xolida',
        gender: 'female'
    },
    {
        name: 'Saidillo',
        gender: 'male'
    },
    {
        name: 'Mubina',
        gender: 'female'
    },
    {
        name: 'Azim',
        gender: 'male',
    },
    {
        name: 'Omina',
        gender: 'female'
    }
];

var male = [];
var female = [];

male.unshift('hello');

for(i = 0; i < people.length; i++){
    if(people[i].gender == 'male'){
        male.push(people[i].name)
    }
    else if(people[i].gender == 'female'){
        female.push(people[i].name)
    }
}

male.push('Salom');

console.log(male);
console.log(female);
