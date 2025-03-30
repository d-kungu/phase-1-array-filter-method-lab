// Code your solution here
drivers = [
    { 
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];
function findMatching(drivers, name ){
        return drivers.filter(driver=> driver.toLowerCase() === name.toLowerCase())
}
 
function fuzzyMatch(drivers, name){
    return drivers.filter(driver=> driver.toLowerCase().startsWith(name.toLowerCase()))
}

function matchName(drivers, place){
    return  drivers.filter(driver=> driver.name === place);
}
