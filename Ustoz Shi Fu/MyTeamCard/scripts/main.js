var info = document.querySelectorAll('.CardWrapper-box--activeText');
var plus = document.querySelectorAll('.CardWrapper-box--plus');

function removeAllClasses(clickedItem) {
    console.log(clickedItem);
    info.forEach(item => {
        if (item.dataset.numberInfo != clickedItem.dataset.numberPlus) {
            item.classList.remove('show');
        }else{
            item.classList.toggle('show');
        }
    })
}

plus.forEach((item) => {
    item.addEventListener('click', function(e) {
        removeAllClasses(item)
    })
})