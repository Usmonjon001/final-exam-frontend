var person = prompt("O'zingiz yoqtirgan UzAM moshinsini tanlang!", "Matiz Damas Spark Cobalt Gentra Tracker Captiva Malibu Malibu2");

var Matiz = {type: 'Matiz', color: 'white', speed: 140, comfort: 'oddiy', price: 46000000};
var Damas = {type: 'Damas', color: 'white', speed: 140, comfort: 'oddiy', price: 86000000};
var Spark = {type: 'Spark', color: 'green', speed: 180, comfort: 'yuqori', price: 96000000};
var Cobalt = {type: 'Cobalt', color: 'Black', speed: 200, comfort: 'yuqori', price: 118000000};
var Gentra = {type: 'Gentra', color: 'blue', speed: 220, comfort: 'yuqori', price: 158000000};
var Tracker = {type: 'Tracker', color: 'yellow', speed: 240, comfort: 'yuqori', price: 168000000};
var Captiva = {type: 'Captiva', color: 'silver', speed: 260, comfort: 'yuqori', price: 218000000};
var Malibu = {type: 'Malibu', color: 'silver', speed: 280, comfort: 'yuqori', price: 198000000};
var Malibu2 = {type: 'Malibu2', color: 'black', speed: 300, comfort: 'yuqori', price: 310000000};

if (person === 'Matiz') {
    document.write('Sizning Tanlovingiz: ' + Matiz.type + '<br>Malumotlar: ' + '<br>Rangi: ' + Matiz.color + "<br>Tezligi: " + Matiz.speed + 'Qulayli Darajasi: ' + Matiz.comfort + '<br>Narxi: ' + Matiz.price + '<video width="320" height="240" controls autoplay style="display: block; margin-top: 50px;"><source src="./videos/matiz.mp4" type="video/mp4"></video>');
}

if (person === 'Damas') {
    document.write('Sizning Tanlovingiz: ' + Damas.type + '<br>Malumotlar: ' + '<br>Rangi: ' + Damas.color + "<br>Tezligi: " + Damas.speed + 'Qulayli Darajasi: ' + Damas.comfort + '<br>Narxi: ' + Damas.price + '<video width="320" height="240" controls autoplay style="display: block; margin-top: 50px;"><source src="./videos/DAMAS.mp4" type="video/mp4"></video>');
}

if (person === 'Spark') {
    document.write('Sizning Tanlovingiz: ' + Spark.type + '<br>Malumotlar: ' + '<br>Rangi: ' + Spark.color + "<br>Tezligi: " + Spark.speed + '<br>Qulayli Darajasi: ' + Spark.comfort + '<br>Narxi: ' + Spark.price +'<video width="320" height="240" controls autoplay style="display: block; margin-top: 50px;"><source src="./videos/spark.mp4" type="video/mp4"></video>');
}

if (person === 'Cobalt') {
    document.write('Sizning Tanlovingiz: ' + Cobalt.type + '<br>Malumotlar: ' + '<br>Rangi: ' + Cobalt.color + "<br>Tezligi: " + Cobalt.speed + '<br>Qulayli Darajasi: ' + Cobalt.comfort + '<br>Narxi: ' + Cobalt.price +'<video width="320" height="240" controls autoplay style="display: block; margin-top: 50px;"><source src="./videos/COBALT.mp4" type="video/mp4"></video>');
}

if (person === 'Gentra') {
    document.write('Sizning Tanlovingiz: ' + Gentra.type + '<br>Malumotlar: ' + '<br>Rangi: ' + Gentra.color + "<br>Tezligi: " + Gentra.speed + '<br>Qulayli Darajasi: ' + Gentra.comfort + '<br>Narxi: ' + Gentra.price + '<video width="320" height="240" controls autoplay style="display: block; margin-top: 50px;"><source src="./videos/gentra.mp4" type="video/mp4"></video>');
}

if (person === 'Tracker') {
    document.write('Sizning Tanlovingiz: ' + Tracker.type + '<br>Malumotlar: ' + '<br>Rangi: ' + Tracker.color + "<br>Tezligi: " + Tracker.speed + '<br>Qulayli Darajasi: ' + Tracker.comfort + '<br>Narxi: ' + Tracker.price);
}

if (person === 'Captiva') {
    document.write('Sizning Tanlovingiz: ' + Captiva.type + '<br>Malumotlar: ' + '<br>Rangi: ' + Captiva.color + "<br>Tezligi: " + Captiva.speed + '<br>Qulayli Darajasi: ' + Captiva.comfort + '<br>Narxi: ' + Captiva.price);
}


if (person === 'Malibu') {
    document.write('Sizning Tanlovingiz: ' + Malibu.type + '<br>Malumotlar: ' + '<br>Rangi: ' + Malibu.color + "<br>Tezligi: " + Malibu.speed + '<br>Qulayli Darajasi: ' + Malibu.comfort + '<br>Narxi: ' + Malibu.price);
}


if (person === 'Malibu2') {
    document.write('Sizning Tanlovingiz: ' + Malibu2.type + '<br>Malumotlar: ' + '<br>Rangi: ' + Malibu2.color + "<br>Tezligi: " + Malibu2.speed + '<br>Qulayli Darajasi: ' + Malibu2.comfort + '<br>Narxi: ' + Malibu2.price);
}