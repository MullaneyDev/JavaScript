//Activity 1
console.log ("Activity 1")

let favouriteFilms = ["Back to the Future","Star Wars : Episopde 4","Lord of the Rings : Fellowship of the Ring","Lord of the Rings : The Two Towers","Kingdom of Heaven - Directors cut"];

favouriteFilms.push("Avengers Assemble");
favouriteFilms.push("Avengers : Infinity war");

for (let i = 0; i < favouriteFilms.length; i++){
    console.log(favouriteFilms[i]);
}
console.log()


//Activity 2
console.log("Activity 2")

let ranNum = (Math.floor(Math.random()*50))

for (i = 0; i < 6; i++){
    console.log (ranNum);
    ranNum = (Math.floor(Math.random()*50));
}
console.log()


//Activity 3
console.log("Activity 3")

for(let i = 10; i == 0, i--;){
    console.log(i)
}
console.log()


//Activity 4
console.log ("Activity 4")

let filmList = [
  "Back to the Future",
  "Star Wars : Episopde 4",
  "Lord of the Rings : Fellowship of the Ring", //Comment in or out to test if statement
  "Ghostbusters",
  "Lord of the Rings : The Two Towers",
  "Kingdom of Heaven - Directors cut",
];

for (i = 0 ; i < filmList.length ; i++){
    console.log(filmList[i]);
}
if (filmList[2] == "Ghostbusters"){
    console.log("Yay its Ghostbusters");
} else {
    console.log("Boo! We want Ghostbusters");
};
console.log()


//Activity 5
console.log("Activity 5")

let ranNum1 = Math.floor(Math.random() * 30);

for (i = 0; i < 6; i++) {
  ranNum1 = Math.floor(Math.random() * 30);
  if (ranNum1 % 7 == 0){
    console.log (`${ranNum1} is divisible by 7`);
  } else{
    console.log (`${ranNum1} is not divisible by 7`) ;
  }
};
console.log()



//Activity 6
console.log("Activity 6")

let bobsFollowers = ["Harry", "John", "Paul", "George", "Ringo", "Albie"];
let hannahsFollowers = ["Albie", "Angus", "Malcolm", "Larry", "Colin", "Harry"]
let mutualFollowers = []


for ( let b = 0; b < bobsFollowers.length; b++){
    for ( let h = 0; h < hannahsFollowers.length; h++){
        if (bobsFollowers[b]=== hannahsFollowers[h]){
            mutualFollowers.push(hannahsFollowers[h])
        }
    }
}

console.log(mutualFollowers)
console.log()



//Activity 7
console.log("Activity 7")

let number = "";
let k = 0;

do {
    k = k + 1;
    number = number + k; // number += k
} while (k < 20);

console.log(number); // displays the numbers a continous string in the terminal
console.log()

let number2 = 0;

while (number2 <= 20){
    console.log (number2);
    number2++;
}
console.log() // displays the numbers in a list on the terminal

let output = "";
let number3 = 0;

while (number3 <= 20){
    output += number3;
    // console.log (output); // Creates a nice waterfall effect of incrementing number
    number3++;
};
console.log(output); // displays the numbers as a continous string in the terminal