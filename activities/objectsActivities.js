//Activity 1
console.log("Activity 1");

const person = {
  name: "Matt",
  age: 33,
  homeLocation: "Prenton",
  sayHi() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.sayHi();
console.log();

//Activity 2
console.log("Activity 2");

const pet = {
  name: "Pippin",
  typeOfPet: "Labrador",
  age: 4,
  colour: "Chocolate",
  eat() {
    console.log(`${this.name} is eating`);
  },
  drink() {
    console.log(`${this.name} is drinking`);
  },
};

pet.eat();
pet.drink();
console.log();

//Activity 3
console.log("Activity 3");

const coffeeShop = {
  branch: "Oxton",
  drinks: {
    "Americano": 2.5,
    "Cappucino": 3,
    "Latte": 3,
    "Flat White": 2.75,
    "Mocha": 3.25,
  },
  foods: {
    "Toast with jam": 1.5,
    "Croissant": 2,
    "Pancakes with syrup": 3.5,
  },
  drinksOrdered(drinks) {
    let totald = 0;
    drinks.forEach((drink) => {
      let price = this.drinks[drink];
      totald += price;
    });
    return `Your order is ${drinks} and your total cost is £${totald}`;
  },
  foodOrdered(foods) {
    let totalf = 0;
    foods.forEach((food) => {
      let price = this.foods[food];
      totalf += price;
    });
    return `Your order is ${foods} and your total cost is £${totalf}`;
  },
};

console.log(coffeeShop.drinksOrdered(["Latte", "Mocha"]));
console.log(coffeeShop.foodOrdered(["Toast with jam", "Pancakes with syrup"]));
console.log()


//Activity 3.2 - being able to order from anything - created one large menu with each item being an object containing a price and a list display
console.log("Activity 3.2");

const coffeeShop2 = {
  receiptHead:
    "***************************\n*                         *\n*         Receipt         *\n*                         *\n***************************\n",
  branch: "Oxton",
  menu: {
    Americano: {
      price: 2.5,
      listDisplay: "Americano             £2.50\n",
    },
    Cappucino: {
      price: 3,
      listDisplay: "Cappucino             £3.00\n",
    },
    Latte: {
      price: 3,
      listDisplay: "Latte                 £3.00\n",
    },
    "Flat white": {
      price: 2.75,
      listDisplay: "Flat white            £2.75\n",
    },
    Mocha: {
      price: 3.25,
      listDisplay: "Mocha                 £3.25\n",
    },
    "Toast with jam": {
      price: 1.5,
      listDisplay: "Toast with jam        £1.50\n",
    },
    Croissant: {
      price: 2,
      listDisplay: "Croissant             £2.00\n",
    },
    "Pancakes with syrup": {
      price: 3.5,
      listDisplay: "Pancakes with syrup   £3.50\n",
    },
  },

  order(order) {
    let total = 0;
    let orderString = "";
    order.forEach((order) => {
      let price = this.menu[order].price;
      total += price;
      orderString += this.menu[order].listDisplay;
    });
    return `${this.receiptHead}\nWelcome to CostBucks ${
      this.branch
    }.\n\nYour order is :\n${orderString}\nTotal cost =         £${total.toFixed(2)}\n\n   Please visit us again!`;
  },
};

console.log(coffeeShop2.order(["Americano", "Cappucino", "Latte", "Flat white", "Mocha", "Toast with jam", "Croissant", "Pancakes with syrup"]));
