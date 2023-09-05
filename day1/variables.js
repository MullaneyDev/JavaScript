console.log ("All Around the World".charAt(7).toUpperCase());
//displays character 7 (u) in upper case
//javascript always starts from 0

let myName = "Matt";
//assigns the name "Matt"(string) to the variable "myName"

let myAge = 33;
//assigns the value of 33(number) to the variable "myAge"

const bornIn = "Chester";
//assigns the value "Chester" to the variable "bornIn" - this is a fixed variable and cannot by changed

console.log (myName);
//displays the variable "myName" in the terminal - Matt

myName = "Matthew";
//resets the variable of "myName"

console.log (myName);
//displays the new value of "myName" in the terminal - Matthew

console.log (2+5);
//shows the answer to 2+5 in the terminal - 7

console.log (3*7);
// shows the answer to 3x7 in the terminal - 27

console.log (7**3);
//shows the answer to 7 to the power of 3(cubed) in the terminal - 343

console.log (15/3);
//shows the answer to 15 divided by 3 in the terminal - 5

console.log (16%3);
//shows the remainder of 16 divided by 3 in the terminal -1

//Cash Machine

let balance = 100;
let withdrawalAmount = 30;

console.log ("Balance = £" + balance);       //using the + is called concatination
//shows the balance in the terminal (100)

balance = balance - withdrawalAmount;
// takes the withdrawal amount from the balance amount (100-30)

console.log ("Your new balance is £" + balance);
// shows the new balance in the terminal (70)



//Template Literals
//must use `(back ticks)

//Activity 1 - stretch
let firstName = "Matt";
let age = 33;
let favDrink = "Tea";
let favColour = "Green";

console.log(`My name is ${firstName}. I am ${age} and my favourite drink is ${favDrink}. My favourite colour is ${favColour}.`);
// puts the variables into a string and shows in the terminal

firstName = "Albie";
age = 2;
favDrink = "Milk";
favColour = "red";

console.log(`My name is ${firstName}. I am ${age} and my favourite drink is ${favDrink}. My favourite colour is ${favColour}.`);

//Activity 2 - stretch
let breakfast = "Choclate Weetabix";
let lunch = "Sausage roll";
let dinner = "Spaghetti Bolognase";

console.log (`This morning I had ${breakfast}. For my lunch I had ${lunch} and for my dinner I will be having ${dinner}.`);

breakfast = "Pain au chocolate"
lunch = "Ham sandwich"
dinner = "Cottage pie"

console.log (`Tomorrow I will be having ${breakfast} for breakfast. For my lunch I will be having ${lunch} and for my dinner I will be having ${dinner}.`);


//Activity 3
let DoB = new Date('2/10/1990 01:10:00');
let todaysDate = new Date();

let difference = todaysDate - DoB;
console.log (difference + " milliseconds since birth");

const minutes = (todaysDate, DoB) => {
  let difference = todaysDate - DoB;
  let totalMinutes = Math.ceil(difference / (1000 * 60 * 24));
  return totalMinutes;
};
console.log (minutes(todaysDate, DoB) + " seconds since birth")

const hours = (todaysDate, DoB) =>{
    let difference = todaysDate - DoB;
    let totalHours = Math.ceil(difference / (1000 * 60 * 60));
    return totalHours;
};
console.log (hours(todaysDate, DoB) + " hours since birth");

const days = (todaysDate, DoB) =>{
    let difference = todaysDate - DoB;
    let totalDays = Math.ceil(difference / ( 1000 * 60 * 60 * 24));
    return totalDays;
};
console.log (days(todaysDate, DoB) + " days since birth");

const weeks = (todaysDate, DoB) =>{
    let difference = todaysDate - DoB;
    let totalWeeks = Math.ceil(difference / ( 1000 * 60 * 60 * 24 * 7));
    return totalWeeks;
};
console.log (weeks(todaysDate, DoB) + " weeks since birth");

//Activity 4
let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";

console.log (`   |   |   `);
console.log (` ${space1} | ${space2} | ${space3} `);
console.log (`   |   |   `);
console.log (`-----------`);
console.log (`   |   |   `);
console.log (` ${space4} | ${space5} | ${space6} `);
console.log (`   |   |   `);
console.log (`-----------`);
console.log (`   |   |   `);
console.log (` ${space7} | ${space8} | ${space9} `);
console.log (`   |   |   `);