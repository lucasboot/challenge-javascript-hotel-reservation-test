import Hotel from "./hotel.js";

const lakewood = new Hotel(110, 80, 90, 80, 3);
const bridgewood = new Hotel(160, 110, 60, 50, 4);
const ridgewood = new Hotel(220, 100, 150, 40, 5);

function getCheapestHotel (input) { //DO NOT change the function's name.
    let text = input.replace(/,/g, '');
    let weekDays = 0;
    let weekEndDays = 0;
    
    text = text.replace(':', '');
    const myArray = text.split(" ");
    weekEndDays += (text.match(/sun/g) || []).length;
    weekEndDays += (text.match(/sat/g) || []).length;
    weekDays = myArray.length - 1 - weekEndDays;

    if(myArray[0] === 'Regular'){
        let hotel1 = {
            'cost' : lakewood.cost(weekDays, weekEndDays),
            'name': 'Lakewood'
        };
        let hotel2 = {
            'cost' : bridgewood.cost(weekDays, weekEndDays),
            'name': 'Bridgewood'
        };
        let hotel3 = {
            'cost' : ridgewood.cost(weekDays, weekEndDays),
            'name': 'Ridgewood'
        };
     

    } else if (myArray[0] === 'Rewards'){
        let hotel1 = {
            'cost' : lakewood.costFid(weekDays, weekEndDays),
            'name': 'Lakewood'
        };
        let hotel2 = {
            'cost' : bridgewood.costFid(weekDays, weekEndDays),
            'name': 'Bridgewood'
        };
        let hotel3 = {
            'cost' : ridgewood.costFid(weekDays, weekEndDays),
            'name': 'Ridgewood'
        };
    }

    return myArray[0];
}

console.log(getCheapestHotel('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)'));


exports.getCheapestHotel = getCheapestHotel
