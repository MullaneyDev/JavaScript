//Activity 1
console.log("Activity 1")

const factorial = (n) => {
    if ((n===0) || (n===1)){
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));
console.log()



//Activity 2
console.log("Activity 2")

let orderCount = 0;

const takeOrder = (sauce,topping) =>{
    console.log (`Pizza with ${sauce} sauce and ${topping}`);
    orderCount++;
}

takeOrder("BBQ", "Chicken"); //gives the order in the terminal
console.log("The order number is " + orderCount); // returns order count of 1
takeOrder("Tomato", "Pepperoni"); // gives the order in the terminal
console.log("The order number is " + orderCount); //returns order count of 2
console.log()



//Activity 3
console.log("Activity 3")

let balance = 350
let newBalance = ""

const cashMachine = (pin, amount) => {
    if (pin != 1234) {
        console.log("Incorrect pin, please enter correct pin");
    } else if (amount === 0){
        console.log("Please enter a withdrawal amount");
    } else if (amount > balance) {
        console.log("Insufficient funds. Please enter a lower withdrawal amount");
    } else {
        newBalance = balance - amount;
        console.log(`Your new balance is ${newBalance}`);
    };
};

cashMachine(1234, 240); // Takes the amount from the balance
cashMachine(1234, 400); // returns insuffienct funds message
cashMachine(1234, 0);   // returns enter withdrawal amount message
cashMachine(2312, 200); // returns incorrect pin message
