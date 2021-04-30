var accordionItem = document.querySelectorAll('.accordion__item');

function removeAllClasses(clickedItem){
    accordionItem.forEach(item => {
        if(item.dataset.accOrder != clickedItem.dataset.accOrder){
            item.classList.remove('active');
        }
    })
}

accordionItem.forEach((item, index) => {
     item.addEventListener('click', function(e){
        e.preventDefault; 

        item.classList.toggle('active');
        removeAllClasses(item);
        if(index == item.dataset.accOrder){
        }
     })
});