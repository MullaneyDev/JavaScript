// Objects
//using curly brackets determins it as an object not a variable or array
//seperate key by a colon : then its value
//key:value
//seperate keys and values seperatd by a comma
//key:value, key:value
//no limit to the amount of data stored in an object
// Good way to store data that has different types - string, number, 

const person = {
    name : "Matt",
    age : 33,
    homeLocation : "Prenton",
    sayHi() {
        console.log (`Hello, my name is ${this.name}`); // to access data in a function from the object - use this.
    }
};

//to access data in an object use  -  object.property

person.name; // calls the data in the object person in the property name

//dotNotation
console.log (person.name); // logs it to the terminal 

//bracketNotation
console.log (person["name"]);// still does the same thing - is more dynamic than the previous way
//allows for variables

let objectKey = "name";

console.log (person[objectKey]);

//Objects are mutable - can change them once they have been made

person.favColour = "Green"; // if key doesnt exist - it will create it

console.log (person); // shows all the data in the object person in the terminal

person.sayHi() //runs the function sayHi from the object person