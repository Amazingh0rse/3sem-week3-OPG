/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Callbacks (With map, filter and forEach)
//Getting comfortable with filter, map and forEach:


//Opg 1
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

//callback 1
var namesLongerThanThree = names.filter(name => name.length <= 3);
function printElements(item, index) {
    console.log(index + ": " + item);
}

names.forEach(printElements);
console.log("\n");
namesLongerThanThree.forEach(printElements);
console.log("\n");

