var z = 0;
var x = 0;
var c = 0;

setInterval(() =>{
    document.body.style.backgroundColor = `rgba(${z} ${x} ${c})`;
    document.body.style.transition = 'all ease 1s';
    if(z >= 255){
        z = 0;
    }
    else{
        z++;
    };

    if(x >= 255){
        x = 0;
    }
    else{
        x = x + 2;
    };

    if(c >= 255){
        c = 0;
    }
    else{
        c = c + 3;
    };
});