var humans = [
    {
        name: 'Usmonjon',
        age: 20
    },
    {
        name: 'Oyatillo',
        age: 19
    },
    {
        name: 'Abdulaziz',
        age: 20
    },
    {
        name: 'Asadbek',
        age: 20
    },
    {
        name: 'Jamshid',
        age: 19
    },
    {
        name: 'Abdulaziz',
        age: 17,
    },
    {
        name: 'Shamsiddin',
        age: 17
    },
    {
        name: 'Otabek',
        age: 20
    }
];
var newBox = [];


for(i = 0; i < humans.length; i++){
    if(humans[i].age >= 20){
        newBox.push(humans[i].name);
    }
}

newBox.unshift('Salom!');
newBox.push('Hello')

console.log(humans.length)

console.log(newBox);
