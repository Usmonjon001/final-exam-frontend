var i = 0;
var j = 0;
var k = 0;

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max))
}

setInterval(function(){
    document.body.style.backgroundColor = `rgba(${getRandomInt(255)} ${getRandomInt(255)} ${getRandomInt(255)})`;
    document.body.style.transition = 'all ease 1s';

    if(i >= 255){
        i = 0;
    }else{
        i = i + 1;
    };

    if(j >= 255){
        j = 0;
    }else{
        j = j + 2;
    };

    if(k >= 255){
        k = 0;
    }else{
        k = k + 3;
    };

}, 300);
