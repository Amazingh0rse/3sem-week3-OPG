/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//opg a
console.log("opg a")
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//opg b
console.log("opg b")
var all = boys.concat(girls)
console.log(all)

//opg c
console.log("opg c")
var commalist = all.join(',') 
var hyphenlist =all.join('-') 
console.log(commalist)
console.log(hyphenlist)

//opg d
console.log("opg d")
all.push("Lone","Gitte")

//opg e
console.log("opg e")
all.unshift("Hans","Kurt")
console.log(all)

//opg f
console.log("opg f")
all.shift("hans")
console.log(all)

//opg g
console.log("opg g")
all.pop("Gitte")
console.log(all)

//opg h
console.log("opg h")
all.splice(3,2)
console.log(all)

//opg i
console.log("opg i")
all.reverse()
console.log(all)

//opg j
console.log("opg j")
all.sort()
console.log(all)

//opg k
console.log("opg k")
all.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase())
});
console.log(all)
        
        
//array methods with callbacks

//opg l
console.log("opg l")
var newAll = all.map(function(num){
    return num.toString().toLocaleUpperCase()
});
console.log(newAll)


//opg m
console.log("opg l")
allny = all.filter(e => e.startsWith("L") || e.startsWith("l"));
console.log(allny)