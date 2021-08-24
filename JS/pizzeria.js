function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var Pizza = {};
    Pizza.crustType = crustType;
    Pizza.sauceType = sauceType;
    Pizza.cheeses = cheeses;
    Pizza.toppings = toppings;
    return Pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("hand tossed", "alfredo", ["mozzarella", "white cheddar"], ["pepporni", "sausage"]);
console.log(p3);

var p4 = pizzaOven("mod", "marinara", ["mozzarella"], ["olives", "garlic", "pesto", "pepperoni", "spicy sausage"]);
console.log(p4);

var crustTypes = ["hand tossed", "mod", "deep dish", "salad"]
var sauceTypes = ["traditional", "marinara", "alfredo"]
var cheeseTypes = ["mozzarella", "feta", "cheddar", "white cheddar"]
var toppingTypes = ["olives", "garlic", "pesto", "pepporoni", "spicy sausage", "sausage", "spinach", "onions"]

function randomPizza(crustType, sauceType, cheeses, toppings) {
    var Pizza = {};
    var cheeseAmt = randomRoll(cheeses);
    var toppingAmt = randomRoll(toppings);
    Pizza.cheeses = [];
    Pizza.toppings = [];
    Pizza.crustType = crustType[randomRoll(crustType)];
    Pizza.sauceType = sauceType[randomRoll(sauceType)];
    for (let index = 0; index < cheeseAmt + 1; index++) {
        Pizza.cheeses.push(cheeses[randomRoll(cheeses)]);
    }
    for (let x = 0; x < toppingAmt + 1; x++) {
        Pizza.toppings.push(toppings[randomRoll(toppings)]);
    }
    console.log(Pizza.toppings);
    console.log(Pizza.cheeses);

    Pizza.toppings = checkDuplicate(Pizza.toppings);
    Pizza.cheeses = checkDuplicate(Pizza.cheeses);
    return Pizza;
}

// i = 0, 1, 2, 3, 4
//map = onions/, spicy sausage, onions/, spicy sausage/, sausage, onions
// x = 0, 1, 2, 3, 4
//arr = onions, spicy sausage, onions, spicy sausage, sausage, onions
//map.dup [false,false,true,false,false,true,false,false,false,true\,false,false,true\,false,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,true,false,true,false,false,false]

function checkDuplicate(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i);
    }
    return map;
}

function randomRoll(arr) {
    var roll = Math.floor(Math.random() * arr.length);
    return roll;
}

var pRandom = randomPizza(crustTypes, sauceTypes, cheeseTypes, toppingTypes);
console.log(pRandom);

