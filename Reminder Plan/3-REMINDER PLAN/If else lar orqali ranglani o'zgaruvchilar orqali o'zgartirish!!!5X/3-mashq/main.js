var a = 0;
var b = 0;
var c = 0;

setInterval(() =>{
    document.body.style.backgroundColor = `rgba(${a} ${b} ${c})`;
    document.body.style.transition = 'all ease 1s';
    if(a >= 255){
        a = 0;
    }
    else{
        a++;
    };

    if(b >= 255){
        b = 0;
    }
    else{
        b = b + 2;
    };

    if(c >= 255){
        c = 0;
    }
    else{
        c = c + 3;
    }
});
