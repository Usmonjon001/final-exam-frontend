let accordionItem = document.querySelectorAll(".accordion__item");

function removeAllClasses(clickedItem){
    console.log(clickedItem);
    accordionItem.forEach(item => {
        if(item.dataset.accOrder != clickedItem.dataset.accOrder){
            item.classList.remove('active')
        }
    })
}

accordionItem.forEach((item, index) =>{
    item.addEventListener('click', function(e) {
        e.preventDefault();
        removeAllClasses(item)
        if(index == item.dataset.accOrder){
            item.classList.toggle('active');
        }
    });
});