var gmCars = ['Tico', 'Nexia', 'Damas', 'Matiz', 'Lacetti', 'Spark', 'Cobalt', 'Epica', 'Captiva', 'Malibu'];

console.log(gmCars.length);

for(i = 0; i < gmCars.length; i++){
    if(gmCars[i] == 'Matiz'){
        for(j = 0; j <= 10; j++){
            console.log(gmCars[i]);
        }
    }
}