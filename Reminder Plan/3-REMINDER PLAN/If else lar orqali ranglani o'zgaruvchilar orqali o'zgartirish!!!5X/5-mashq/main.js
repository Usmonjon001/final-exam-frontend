var a = 0;
var s = 0;
var d = 0;

setInterval(() => {
    document.body.style.backgroundColor = `rgba(${a} ${s} ${d})`;
    document.body.style.transition = 'all ease 1s';

    if(a >= 255){
        a = 0;
    }else{
        a++;
    };

    if(s >= 255){
        s = 0;
    }else{
        s = s + 2;
    };

    if(d >= 255){
        d = 0;
    }else{
        d = d + 3;
    };
});


