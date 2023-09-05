let weather = "sunny"

if (weather == "sunny") {
    console.log ("Well, I better wear some suncream!")
} else if (weather == "rainy") {
    console.log ("Better take an umbrella")
} else {
    console.log ("Hmmm, it could go either way!")
}




// == Equal (different data types, same value)
//=== Strict Equal (same data types, same value)
//!= Not Equal (different data types, different value)
//!== Strictly Not Equal (same data types, different value)

if (1 == "1") {
    console.log (true);
}
else {
    console.log (false);
}
//returns true = data types are not the same but value is the same

if (1 === "1") {
  console.log(true);
} else {
  console.log(false);
}
//returns false = value is the same but the data type is different

let place = "Manchester";
let weather2 = "Cloudy";

if (place == "Manchester" && weather2 == "Sunny") {
    console.log ("Check again");
}
else if (place == "Manchester" && weather2 == "Rain") {
    console.log ("Obviously...");
}
else {
    console.log ("What it isn't raining?");
};
//returns "What it isn't raining?" as the weather2 variable is neither Sunny or Rainy

// && and - both conditions must be true in order for the code to run
//  true and true = true
//  true and false = false
//  alse and false = false

// || or - either condition can be met in order for the code to run
//  true or true = true
//  true or false = true
//  false or false = false


let age = 16;

if (age < 18) {
    console.log ("Too young");
}
else {
    console.log ("Old enough");
};

//returns "Too young"


// Conditional operators
let age2 = 33;

(age < 18) ? console.log ("Too young") : console.log ("Old enough");
//(condition) ? if true : if false
// ? = short hand for if/else statement


let age3 = 33;

let canDrink = (age3 < 18) ? "Too young" : "Old enough";
// allows the variable to be changed due to an if/else statement
// makes the variable canDrink = Too young or Old enough depending on if the condition is met (age3 < 18)
console.log (canDrink);
// returns the variable canDrink to the console - Old enough


//Switch
//does the same as an if/else with some pros and cons
//increases readability - runs mroe efficiently
//good if comparing variables against lots of things

//Example of a switch
// switch (expresion){
//     case x :
//         //code here
//         break;
//     case y :
//         //code here
//         break;
//     default :
//         //code here
// }

//example using if/else
let car = "Peugeot";

if (car == "Ford" || car == "GM") {
  console.log("You've got an American car!");
} else if (car == "Peugeot" || car == "Citreon") {
  console.log("You've got a French boy!");
} else if (car == "Honda" || car == "Toyota" || car == "Suzuki") {
  console.log("Japanese cars are dead quiet!");
} else if (car == "Mercedes") {
  console.log("You are a proper posh German!");
} else if (car == "Volkswagon") {
  console.log("German aren't that bad at all!");
} else if (car == "Hyundai" || car == "Kia") {
  console.log("South Korean cars are getting popular!");
} else {
  console.log("Your car is not in the top ten companies in the world!");
}

//example using switch
let car2 = "Peugeot";

switch (car2){
    case "Ford":
    case "GM":
        console.log("You've got an American car!");
        break;
    case "Peugeot":
    case "Citreon":
        console.log("Youve got a French boy!");
        break;
    case "Honda":
    case "Toyota":
    case "Suzuki":
        console.log("Japanese cars are dead quiet!");
        break;
    case "Mercedes":
        console.log ("You are a proper posh German!");
        break;
    case "Volkswagon":
        console.log ("German aren't that bad at all!");
        break;
    case "Hyundai":
    case "Kia":
        console.log ("South Korean cars are getting popular!");
        break;
    default:
        console.log ("Your car is not in the top ten companies in the world!!");

}

//Example using test scores

const grade = 87;

switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}
