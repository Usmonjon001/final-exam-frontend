const selectElement = document.querySelector('.pizzaSelect');
let pizzaSize = document.querySelectorAll('.pizzaSize');
let pizzaCheckBox = document.querySelectorAll('.masalliq');
let extraMeals = document.querySelector('.extraMeals');
let extraFoods = document.querySelectorAll('.extraFoods');
let exraFoodsResult = document.querySelector('.exraFoodsResult');

let ingradient = [];
let extrIngradient = [];

selectElement.addEventListener('change', function(e) {
  const result = document.querySelector('.result');
  result.textContent = `${selectElement.value}`;
});

pizzaSize.forEach(function(radio){
    radio.addEventListener('change', function(){
        const sizeOfPizza = document.querySelector('.sizeOfPizza');
        sizeOfPizza.innerHTML = `${radio.value}`;
    })
});

function checkboxAppender(checkboxList, checkboxResult, resultArr, idString){
    checkboxList.forEach(function(checkbox){
        checkbox.addEventListener('change', function(){
            let listItem = document.createElement('li');
            listItem.textContent = checkbox.value;
            listItem.setAttribute('id', `${idString}-${checkbox.dataset.checkboxId}`)


        if(resultArr.includes(checkbox.value)){
            document.querySelector(`#${idString}-${checkbox.dataset.checkboxId}`).remove();

            let removedItemIndex = resultArr.findIndex(item => checkbox.value == item);
            resultArr.splice(removedItemIndex, 1); 
        }else{
            checkboxResult.appendChild(listItem);
            resultArr.push(checkbox.value);
        }
        });

    });
}

checkboxAppender(pizzaCheckBox, extraMeals, ingradient, 'ing');

checkboxAppender(extraFoods, exraFoodsResult, extrIngradient, 'extraing');

// extraFoods.forEach(function(checkbox){
//     checkbox.addEventListener('change', function(){
//         let listItem = document.createElement('li');
//         listItem.textContent = checkbox.value;

//         exraFoodsResult.appendChild(listItem);
//     })
// });


