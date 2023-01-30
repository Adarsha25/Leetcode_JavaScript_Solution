// Array
//defined by '[]' and values separated by ','
var states = ["karnataka", "Goa", "Tamil Nadu", "Kerela", "Andra"];
console.log(states[1]);  // prints the value in index 1 i.e Goa.
console.log(states.length);  // prints the length of the array, i.e 5.

states[1] = "Maharastra" // replaces the vale in index 1 to the given values.

var user = ["Adarsha", "adinie001@gmail.com", 34, 60000508, true];
user.pop(); // removes the last value of the array.
user.shift(); // removes the first value of the array.
user.unshift("software developer"); // adds the value to the front of the array.
console.log(user.indexOf("goa"));  // returns the index of the value for the given value is not present then returns -1.
console.log(Array.from("Kerela")); // turns every letter in the given value as a separate string.
// .
// .
// .
// .
// .
// .
//arrow function in array
//basic code
function isEven(element){
    if (element % 2 === 0){
        return true;
    }
    return false;
}
console.log(isEven(3));

// arrow function
// not necessary to define word function with arrows
var sEven = (element)=> {
    return element % 2 === 0;
}
console.log(sEven(3))

 var result = [2, 4, 6, 8].every(isEven); // returns true as every value is even.
 console.log(result);
var result1 = [2, 4, 3, 8].every(isEven); // returns false as every value is not even.
console.log(result1); 





