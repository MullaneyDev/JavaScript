// Activity 1 - Stretch
console.log("Activity 1")

let age = 19;
let country = "UK";

if (age > 17 && country == "UK") {
    console.log ("Yes I can serve you");
} else {
    console.log ("You aren't old enough");
}

(age > 17 && country == "UK") ? console.log ("Yes I can serve you") : console.log ("You aren't old enough");
//Ternery operation
console.log()



//Activity 2
console.log("Activitiy 2")

let pizzaTopping = "Pineapple"

switch (pizzaTopping){
    case "Pepperoni":
    case "Chicken":
    case "Ham":
    case "Meatballs":
        console.log (`${pizzaTopping} is an important ingredient for a good pizza`);
        break;
    case "Pineapple":
    case "Sweetcorn":
        console.log (`${pizzaTopping} doesn't belong on pizza you heathen!`);
        break;
    case "Nduja":
    case "Jalepeno":
        console.log (`It is important to have ${pizzaTopping} for a little bit of spice!`);
        break;
    default:
        console.log ("Plain pizza is boring...Choose a topping!");
};
console.log()



//Activity 3 - Stretch
console.log("Activity 3")

let password = "pefgd";

if (password.length < 8){
    console.log ("Your password is too short. Please enter a password of more than 8 characters")
} else {
    console.log (`Your new password is ${password}`)
}

let num = 26

if (num % 3 == 0 || num % 5 == 0) {
    console.log (`${num} is divisible by 3 or 5`);
} else {
    console.log (`${num} is not divisible by either 3 or 5`)
};
console.log()



//Activity 4
console.log("Activity 4")

let num2 = 30

//if (num2 % 15){       - alternate starting if statement
if (num2 % 3 == 0 && num2 % 5 ==0){
    console.log ("Fizz Buzz");
} else if (num2 % 3 == 0){
    console.log ("Fizz");
} else if (num2 % 5 == 0){
    console.log ("Buzz");
};
console.log()



//Activity 5
console.log("Activity 5")

let num3 = 1001;
let num3Reverse = numberReverse(num3);

function numberReverse(num3){
    return (
            num3
                .toString()
                .split("")
                .reverse()
                .join("")
        ) 
};

if (num3Reverse == num3) {
    console.log(`${num3} is a palindrome`);
} else {
    console.log(`${num3} is not a palindrome`);
};
console.log()



//Activity 6
console.log("Activity 6")

let time = 11
let placeOfWork = "Chester"
let townOfHome = "Liverpool"

if (time > 24) {
  console.log("Please use a 24 hour clock");
} else if (time <= 7 || time >= 18) {
  console.log(`I am at home in ${townOfHome}.`);
} else if ((time < 9 && time > 7) || (time >= 17 && time < 18)) {
  console.log(`I am commuting between ${placeOfWork} and ${townOfHome}`);
} else if (time >= 12 && time < 13) {
  console.log("I am eating lunch");
} else {
  console.log(`I am at work in ${placeOfWork}`);
};
console.log()



//Activity 7
console.log("Activity 7")

const string = "wepriuhfnaspsuodfhpqujbnwepfuiohasuofhpuqwrh";
const vowels = ["a","e","i","o","u","A","E","I","O","U"];
let vowelIndex = []

for (let stringCharIndex = 0; stringCharIndex < string.length; stringCharIndex++){
    for (let vowelCharIndex = 0; vowelCharIndex < vowels.length; vowelCharIndex++){
        if (string[stringCharIndex] === vowels[vowelCharIndex]){
            vowelIndex.push(stringCharIndex);
        }
    }
}
console.log (Math.max(...vowelIndex)); 
console.log()


console.log("Activity 7.2");
// Better verison because it has to check half the values of the first by putting the string into lowercase

const string2 = "wepriuhfnaspsuodfhpqujbnwepfuiohasuofhpuqwrh";
const vowels2 = ["a", "e", "i", "o", "u"];
let vowelIndex2 = [];
let string2Lower = string2.toLowerCase()

for (
  let stringCharIndex2 = 0;
  stringCharIndex2 < string2.length;
  stringCharIndex2++
) {
  for (
    let vowelCharIndex2 = 0;
    vowelCharIndex2 < vowels.length;
    vowelCharIndex2++
  ) {
    if (string2Lower[stringCharIndex2] === vowels2[vowelCharIndex2]) {
      vowelIndex2.push(stringCharIndex2);
    }
  }
}
let lastIndex2 = vowelIndex2.pop();
console.log(lastIndex2);
console.log();



//Activity 8
console.log("Activity 8")

let word = "Dsfas";
let string1 = lowercase(word);

function lowercase(word){
    return (word.toLowerCase())
};
//function to allow the use of capital letters

if (string1.charAt(0) === string1.charAt(string1.length-1)){
    console.log (`${word} starts and ends with the same letter`);
} else {
    console.log (`${word} does not start and end with the same letter`);
};
console.log()


//Activity 9
console.log("Activity 9")

let num4 = 3;
let num5 = 6;
let num6 = (num4 * num5)

if (num6 % 2 == 0){
    console.log (`${num4} x ${num5} = ${num6} and this is even`)
} else {
    console.log(`${num4} x ${num5} = ${num6} and this is odd`);
}

(num4 * num5) % 2 == 0
  ? console.log(`${num4} x ${num5} = ${num6} and this is even`)
  : console.log(`${num4} x ${num5} = ${num6} and this is odd`);
//Ternary operation