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


/*  falsy values
    undefined
    null
    0
    ' '
    NaN 
    any variable refering to falsy value will be false*/

var user = null;

if (user) {
    console.log("Hi there " + user)
}


// Basics of functions
function sayHello(name) {
    console.log(`Hello there, ${name}. How are you.`);
}

sayHello("Adarsha")

// returning 

function age() {
    return "My age is 23.";
}

/*two ways of printing return value in the function 
1. By assigning variable 
2. By directly console the function*/

var myAge = age // Functional programming
console.log(myAge)

console.log(age);


// functions in variable

function getUserRole(name, role){
    switch(role){
        case "admin":
            return `${name} is admin with full access`;
            break;  // While using the return, break is not necessary.
        case "subadmin":
            return `${name} is sub-admin with access to create and delete course`;
            break;
        case "testprep":
            return `${name} is testprep with access to create and delete tests`;
            break;
            case "user":
                return `${name} is a user to comsume content`;
                break;
        
            default:
                return `${name} is a trail user`;
                break;

    }
    
}

console.log(getUserRole("Adarsha S", "admin"))

// we can also make a variable as a function just by defining the var to function.
var getUserRole = function (name, role){
    switch(role){
        case "admin":
            return `${name} is admin with full access`;
            break;
        case "subadmin":
            return `${name} is sub-admin with access to create and delete course`;
            break;
        case "testprep":
            return `${name} is testprep with access to create and delete tests`;
            break;
            case "user":
                return `${name} is a user to comsume content`;
                break;
        
            default:
                return `${name} is a trail user`;
                break;

    }
    
}
var getrole = getUserRole("Suhas", "subadmin");
console.log(getrole);


/* context
Execution Context handles the entire transformation and execution of the code.
There are two types of execution contexts: global and function. 
0The global execution context is created when a JavaScript script first starts to run, 
and it represents the global scope in JavaScript.
A function execution context is created whenever a function is called, 
representing the function's local scope. */


hello(); // The function hello() is executated even outside the function as Js will consider
                // the function as golbal function 
function hello(){
    console.log("hey");
}
hello();

// The two rule for Execution context
// 1. function declarations are scanned and made available. 
// 2. variable declarations are aslo scanned and made undefined.


tipper(20)
function tipper(a) {
    var bill = parseInt(a); // parseInt takes number in string and converts into number for operation. 
    console.log(bill + 5);
}

// bigTipper(200)  this will render an error as bigTipper is defined as variable and 
// variables are are aslo scanned and made undefined.
var bigTipper = function (a) {
    var bill = parseInt(a); 
    console.log(bill + 5);
}
bigTipper(200);
// .
// .
// .
// .
console.log(name)
var name = "Adarsha";
// the value of the name will be stored undefined, not as error
// but if the variable name is not defined then the result will be error 
function sayName(){
    var name = "Mr.Adi";
    console.log(name);

}
sayName(); // prints the name as "Mr.Adi". As it is defined in function execution context.

console.log(name); // prints the the name as "Adarsha". As is it is defined in global execution context. 


