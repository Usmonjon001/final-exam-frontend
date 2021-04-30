var i = 0;
var x = 0;
var y = 0;

setInterval(() =>{
    document.body.style.backgroundColor = `rgba(${i}, ${x}, ${y})`;
    document.body.style.transition = 'all ease 1s';

    if(i >= 255){
        i = 0;
    }
    else{
        i++;
    };

    if(x >= 255){
        x = 0;
    }
    else{
        x = x + 2;
    };

    if(y >= 255){
        y = 0;
    }
    else{
        y = y + 1;
    };


}, 100);
