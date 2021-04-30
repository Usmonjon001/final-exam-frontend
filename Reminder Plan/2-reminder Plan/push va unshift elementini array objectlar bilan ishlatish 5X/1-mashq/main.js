var pupils = [
    {
        name: 'Usmonjon',
        age: 20
    },
    {
        name: 'Oyatillo',
        age: 19
    },
    {
        name: 'Abbos',
        age: 19
    },
    {
        name: 'O\'ktam',
        age: 25
    },
    {
        name: 'Humoyun',
        age: 25
    },
    {
        name: 'Abdulaziz',
        age: 20
    },
    {
        name: 'Komiljon',
        age: 26,
    },
    {
        name: 'Abdulaziz',
        age: 17
    },
    {
        name: 'Samandar',
        age: 18
    },
    {
        name: 'Orolbek',
        age: 16
    }
];

var yangiPaqir = [];



for(i = 0; i < pupils.length; i++){
   if(pupils[i].age >= 20){
       yangiPaqir.push(pupils[i].name)
   }
}

yangiPaqir.unshift('Hello World!');

yangiPaqir.push('Lazy');

console.log(yangiPaqir);