var todoForm = document.querySelector('#todo-form');
var todoInput = document.querySelector('#todo-input');
var todoListGroup = document.querySelector('#todo-list-group');


var todos=[         //Eleemntlarni o'z ichiga oluchi Paqir
    {
        id: 0,
        text: 'Lorem ipsum',
    }
];

function TodoPrototype(title, id){
    this.title = title;
    this.id = id;
}

todoForm.addEventListener('submit', function(e){
    e.preventDefault();

    todoCreate(todoInput.value);

    console.log(todos);

    todoForm.reset(); // Kiritilgan qiymatlarni submit dan so'ng tozalab yuborish Uchun
});



