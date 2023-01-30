/* Some of the Js engines are 
V8 
Spider Monkey 
JavaScriptCode
Chakra*/

console.log('hello');


/* ECMAscript
European Computer Manufacturers Association Script is a scripting language based on JavaScript*/

/* Varieties of storing variables in Js
use keywords "var" , "let" and "const".*/

// var
var fullName = "Adarsha S";    // Using Camel cases
var userId = 60000508;
var booleans = true; 
var age = 23;   //we can store string, boolean value and numbers.
console.log(fullName, booleans, age);

// const
const password = "1234";

// password = "1324" this will render error, as one cannot change the value of const once fixed

console.log("Full name is "+ fullName);

// using the `` backsticks can be used to represent multi-line strings and may use 
// interpolation to insert variable.
console.log(`
    Full name is: ${fullName}
    User Id is: ${userId}
    Password is: ${password}
`);

/* Operators 
    using +, -, *, /, <, >, % 
Calculating the discount. */
var sellingPrice = 199;
var listingPrice = 999;
var discountPercentage = ((listingPrice-sellingPrice)/ listingPrice)*100;
displayDiscount = Math.round(discountPercentage);  // using built-in function Math to round off the number
console.log("Discount percentage is : " + displayDiscount + "  %");


// Operators Precedence "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence"



/* Conditionals:
if else:
Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed */

var temperature;

temperature = 39;
if (temperature < 20){
    console.log("Its very cold outside");
}

if (temperature < 30){
    console.log("Its moderate outside");
}else {
    console.log("Its hot outside");
}

 

/* Allow user to access to website if they have
logged in from email,
logged in fron facebook,
logged in from google. */

var email = false;
var facebook = true;
var google = false;

if (email || facebook || google) {    // '||' called as 'or' operator in which nay one of the condition has to be true
    console.log("login Success") 
};



// Show user a signout button if he is authenticated,
// otherwise show option to login/ signup

var authenticate = false;
// Conditional (ternary) operator
// condition ? val1 : val2
// If condition is true, the operator has the value of val1. Otherwise it has the value of val2.
// You can use the conditional operator anywhere you would use a standard operator.
authenticate? console.log("SignOut button") : console.log("Login button");

// expressions and operators  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators


// Switch

var user = "admin";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("You can create or delete course");
        break;
    case "testprep":
        console.log("You can create or delete tests");
        break;
    case "user":
        console.log("You can consume content");
        break;
    default:
        console.log("Trail user");

        break;
}








