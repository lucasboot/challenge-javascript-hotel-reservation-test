import Hotel from "./hotel.js";

const lakewood = new Hotel(110, 80, 90, 80, 3);
const bridgewood = new Hotel(160, 110, 60, 50, 4);
const ridgewood = new Hotel(220, 100, 150, 40, 5);
const arr = [];
arr.push(lakewood);
arr.push(bridgewood);
arr.push(ridgewood);

//Function to visualize the cost of each hotel
function printCosts (hotels){
    console.log('Lakewood: ' + hotels[0].cost);
    console.log('\nBridgewood: ' + hotels[1].cost);
    console.log('\nRidgewood: ' + hotels[2].cost);

}
//Function to determinate the indexes of all occurrences of the lowest cost
function minCost(hotels){
    let min = Math.min(hotels[0].cost, hotels[1].cost, hotels[2].cost);
    console.log('Min encontrado: ' + min);
    const indexes = [];

    for (let index = 0; index < hotels.length; index++) {
      if (hotels[index].cost === min) {
        indexes.push(index);
      }
    }

    return indexes;
}
//Returns the name of the cheapest hotel or the best rated if there's a tie
function getCheapestHotel (input) { //DO NOT change the function's name.
    let text = input.replace(/,/g, '');
    let weekDays = 0;
    let weekEndDays = 0;
    let indexes = [];
    text = text.replace(':', '');
    const myArray = text.split(" ");
    weekEndDays += (text.match(/sun/g) || []).length;
    weekEndDays += (text.match(/sat/g) || []).length;
    weekDays = myArray.length - 1 - weekEndDays;
    const hotels = [];
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
        hotels.push(hotel1);
        hotels.push(hotel2);
        hotels.push(hotel3);
        indexes = minCost(hotels);
     

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
        hotels.push(hotel1);
        hotels.push(hotel2);
        hotels.push(hotel3);
        indexes = minCost(hotels);
    }
    if(indexes.length === 1){ //No multiple occurence of lowest cost
        return hotels[indexes[0]].name;
    } else {
        let best =indexes[0]; 
        let value=arr[indexes[best]].rate;
        for (let index = 1; index < indexes.length; index++) {
            if (arr[indexes[index]].rate > value ) {
              value = arr[indexes[index]].rate;
              best = indexes[index];
            }
          }
          return hotels[best].name;
    }
    return null;
}

console.log(getCheapestHotel('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)'));
console.log('------------------------------------------------------------');
console.log(getCheapestHotel('Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)'));
console.log('------------------------------------------------------------');
console.log(getCheapestHotel('Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)'));

exports.getCheapestHotel = getCheapestHotel
