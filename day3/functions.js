//Morning Recap Activity
let age = 47

if (age < 18){
    console.log ("Your ticket will be £8");
} else if (age >= 18 && age < 60){
    console.log ("Your ticket price will be £10.95");
} else{
    console.log ("Your ticket will be £7.50")
}


//Functions

const pressGrindBeans = () => {   //Arrow syntax
    console.log ("Grinding for 20 seconds");
}
pressGrindBeans()


function favColour(){   //function syntax
    return console.log ("My favourite colour is Green")
}
favColour()


const cashWithdrawal = (amount, accNum) => { //These variables are only accesible within the function
    console.log(`Withdrawing ${amount} from account ${accNum}`);
}

cashWithdrawal(300, 50449921); // gives the variables to the function
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50449921);


const favColor = (color) => {
    console.log(`My favourite colour is ${color}`);
}

favColor("Green");
favColor("Blue");

const addUp = (num1,num2) => {
    return num1 + num2 // will only ever return one value
};

addUp(7,3); // adds it but doesnt show it in terminal
console.log (addUp(2,5)); //shows in terminal


const multiplyByNineFiths = (celsius) => {
    return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
    return multiplyByNineFiths(celsius) + 32;
};

console.log("The temperature is " + getFahrenheit(15) + "°F");


// Declaration
function square(number) {
    return number * number;
};

square(5)

// Expression - this function doesnt have a name - it's anonymous!
const square2 = function(number) {
    return number * number;
};

square2(5)

