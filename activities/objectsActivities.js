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
  branch: "Oxton",
  menu: {
    "Americano": {
      price: 2.5,
      list_display: "Americano @ £2.50",
    },
    "Cappucino": {
        price: 3,
        list_display: "Cappucino @ £3.00",
    },
    "Latte": {
        price: 3,
        list_display: "Latte @ £3.00",
    },
    "Flat white": {
        price: 2.75,
        list_display: "Flat white @ £2.75",
    },
    "Mocha": {
        price: 3.25,
        list_display: "Mocha @ 3.25",
    },
    "Toast with jam": {
        price: 1.5,
        list_display: "Toast with jam @ £1.50",
    },
    "Croissant": {
        price: 2,
        list_display: "Croissant @ £2.00",
    },
    "Pancakes with syrup": {
        price: 3.5,
        list_display: "Pancakes with syrup @ £3.50"
    }
  },

  order(order) {
    let total = 0;
    let order_string = "";
    order.forEach((order) => {
      let price = this.menu[order].price;
      total += price;
      order_string += this.menu[order].list_display + ", ";
    });
    return `Welcome to our ${this.branch} branch. Your order is ${order_string}and your total cost is £${total}`;
  },
};

console.log(coffeeShop2.order(["Americano", "Americano", "Toast with jam", "Pancakes with syrup"]));
