var i = 0;
var x = 0;
var y = 0;  


setInterval(() => {
    document.body.style.backgroundColor = `rgba(${i} ${x} ${y})`;
    if(i >= 255){
        i = 0;
    }
    else{
        i = i + 1;
    }

    if(x >= 255){
        x = 0;
    }
    else{
        x = x + 2;
    }

    if(y >= 255){
        y = 0;
    }
    else{
        y = y + 3;
    }
}, 100);