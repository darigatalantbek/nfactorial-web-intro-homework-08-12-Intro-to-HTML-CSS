let restaurant = {
    name : 'Bastyq',
    'open time' : '10:00',
    'close time' : '22:00',
    isMishelinStar : true,
}

let owner;
const address = null;
restaurant.foundation = 2024;
restaurant['average check'] = 40000;
delete restaurant.isMishelinStar;
delete restaurant['close time'];


let vehicle = {};
vehicle.brandName = 'BMW';
vehicle.model = 'X5';
vehicle.model = 'M1';
delete vehicle.model;


let salaries = {
    Aroo: 100,
    Dalida: 160,
    Samat: 130
}

let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
console.log(sum);