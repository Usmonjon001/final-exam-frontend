
window.addEventListener('mousemove', function(event){
    //console.log(`Mouse X: ${event.clientX}, Y: ${event.clientY}`);

});

document.querySelector('.kotta-div').addEventListener('mousemove', function(event){
    console.log(`Mouse X: ${event.offsetX}, Y: ${event.offsetY}`);
    this.style.transform = `rotateX(${event.offsetX/8}deg)`;
    this.style.transform = `rotateY(${event.offsetX/8}deg)`;
})
