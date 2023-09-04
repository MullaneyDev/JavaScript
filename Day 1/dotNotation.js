console.log ("Hello world");
// first line of code. displays Hello world in the terminal

// cmd + / will comment out code and not run

console.log ("This is a string!");
//strings are used to show chracters - they are surrounded by speech marks

console.log ("1234");
// This is still a string as it is in speech marks

console.log (1234);
//This data type is number

console.log (12.34);
//This data type is still a number

console.log (true);
console.log (false);
//These are booleans - true or false, nothing inbetween

console.log ("This is a string".length);
//Gives the length of the string in characters - displayed in the terminal
//Doesn't work for other data types (e.g numbers - doesn't have a length, it has a value. boolean - is either true or false)

console.log ("hello".toUpperCase());
//changes the string "hello" to uppercase letters

console.log ("HELLO".toLowerCase());
//changes the string "HELLO" to lowercase letters

console.log (Math.random());
//gives a randomly generated number between 0 and 1

console.log (Math.random()*10);
//gives a randomly generated number between 0 and 1 then multiplies it by 10

console.log (Math.round(Math.random()*10));
//gives a randomly generated number between 0 and 1, multiplies it by 10 and then rounds it to a whole number

console.log (Math.floor(Math.random()*10));
//gives a randomly generated number between 0 and 1, multiplies it by 10 and will always round down regardless of its value

console.log (Math.ceil(Math.random()*10));
//gives a randomly generated number between 0 and 1, multiplies it by 10 and will always round up regardless of its value

console.log ("   |   |   ");
console.log ("-----------");
console.log ("   |   |   ");
console.log ("-----------");
console.log ("   |   |   ");
//prints grid to console



const grid = ["   |   |   ","-----------","   |   |   ","-----------","   |   |   "];

for (let i = 0; i < grid.length; i++) {
    console.log (grid[i]);
}
//prints grid to console using for loop.

const column = "   |   |   ";
const row = "-----------";
const limit = 1

for (let grid2 = 0; grid2 <= limit; grid2++) {
    console.log (column);
    console.log (row);
if (grid2 == limit)
    {console.log (column)}
}

