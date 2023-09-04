//Activity 1 - stretch
console.log("Activity 1")
let firstName = "Matt";
let age = 33;
let favDrink = "Tea";
let favColour = "Green";

console.log(
  `My name is ${firstName}. I am ${age} and my favourite drink is ${favDrink}. My favourite colour is ${favColour}.`
);
// puts the variables into a string and shows in the terminal

firstName = "Albie";
age = 2;
favDrink = "Milk";
favColour = "red";

console.log(
  `My name is ${firstName}. I am ${age} and my favourite drink is ${favDrink}. My favourite colour is ${favColour}.`
);
console.log(" ")

//Activity 2 - stretch
console.log("Activity 2");
let breakfast = "Choclate Weetabix";
let lunch = "Sausage roll";
let dinner = "Spaghetti Bolognase";

console.log(
  `This morning I had ${breakfast}. For my lunch I had ${lunch} and for my dinner I will be having ${dinner}.`
);

breakfast = "Pain au chocolate";
lunch = "Ham sandwich";
dinner = "Cottage pie";

console.log(
  `Tomorrow I will be having ${breakfast} for breakfast. For my lunch I will be having ${lunch} and for my dinner I will be having ${dinner}.`
);
console.log(" ")

//Activity 3
console.log("Activity 3");
let DoB = new Date("2/10/1990 01:10:00");
let todaysDate = new Date();

let difference = todaysDate - DoB;
console.log(difference + " milliseconds since birth");

const minutes = (todaysDate, DoB) => {
  let difference = todaysDate - DoB;
  let totalMinutes = Math.ceil(difference / (1000 * 60 * 24));
  return totalMinutes;
};
console.log(minutes(todaysDate, DoB) + " seconds since birth");

const hours = (todaysDate, DoB) => {
  let difference = todaysDate - DoB;
  let totalHours = Math.ceil(difference / (1000 * 60 * 60));
  return totalHours;
};
console.log(hours(todaysDate, DoB) + " hours since birth");

const days = (todaysDate, DoB) => {
  let difference = todaysDate - DoB;
  let totalDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
  return totalDays;
};
console.log(days(todaysDate, DoB) + " days since birth");

const weeks = (todaysDate, DoB) => {
  let difference = todaysDate - DoB;
  let totalWeeks = Math.ceil(difference / (1000 * 60 * 60 * 24 * 7));
  return totalWeeks;
};
console.log(weeks(todaysDate, DoB) + " weeks since birth");
console.log (" ")

//Activity 4
console.log("Activity 4");
let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";

console.log(`   |   |   `);
console.log(` ${space1} | ${space2} | ${space3} `);
console.log(`   |   |   `);
console.log(`-----------`);
console.log(`   |   |   `);
console.log(` ${space4} | ${space5} | ${space6} `);
console.log(`   |   |   `);
console.log(`-----------`);
console.log(`   |   |   `);
console.log(` ${space7} | ${space8} | ${space9} `);
console.log(`   |   |   `);