//Arrays

//arrays are donated by square brackets and each item seperated by a comma [,,,]

let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];

console.log(coffeeOrder);
//gives the whole array

console.log(coffeeOrder[2]);
//gives the item in the 3rd (because 0 is the first item) position in the array

coffeeOrder[1] = "Ann - Vanilla latte";
//updates the array of coffeeOrder - changes Bens order to Anns

console.log (coffeeOrder.length);
//counts the amount of items in the array and displays in the terminal
//doesnt give character count - only item amount

coffeeOrder.push("Donna - Espresso");
//adds Donnas order to the end of the array

coffeeOrder.pop();
//removes the last object in the array

coffeeOrder.unshift("Archie - Tea");
//adds Archies order to the start of the array

coffeeOrder.shift();
//removes the first item of the array


//Loops

let favouriteDrinks = ["Coke", "Fanta", "Tonic"];

console.log(favouriteDrinks[0]); //shows 1st item in the array in the terminal
console.log(favouriteDrinks[1]); //shows 2nd item in the array in the terminal
console.log(favouriteDrinks[2]); //shows 3rd item in the array in the terminal
//takes longer to code

let favouriteDrinks2 = ["Coke", "Fanta", "Tonic", "RedBull"];

for(let i =0; i < favouriteDrinks2.length; i++){
    console.log(favouriteDrinks2[i]);
}
// runs it in a loop until condition is false

//for(initial condition; condition; increment/decrement of expression){code in here}


//for(forever) loop with an if statement

let multiplesTwo = []; //emply array - will be populated by the loop

for(let i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i); //pushes the value of i to the array
    }
}

console.log (`Numbers divisibile by 2 between 0 and 20 are : ${multiplesTwo}.`); // displays the array in the terminal



//While loops
//while loops while a condition is met (or not)

let age = 15

while (age < 18) {
    console.log("You're a child!"); // while age is below 18 will display you're an child in the terminal
    age++;  // adds 1 to age
}

console.log("You're an adult!"); // when age hits 18 displays you're an adult in the terminal


let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while (currentCard != "Spade") { //while card is not a spade it will continue to run
    console.log (currentCard); // displays the current card in the terminal
    currentCard = cards[Math.floor(Math.random()*4)]; // changes the current card to a new one from the position in the array. worked out by giving a random number between 0 and 1, multiplying by 4 (because of the 4 positions) then rounds it down to give an integer
}

console.log(currentCard); //when it finishes the loop (currentCard = Spade) displays the current card in the terminal (will always be spade as that is when the while loop ends)