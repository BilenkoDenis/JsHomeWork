class Hamburger {
    constructor(burger) {
        this.burger = burger;
    }
    getPrice() {
        return this.burger.price;
    }
    getCalories() {
        return this.burger.calories;
    }
    static TOPPING_MAYO = {
        price: 20,
        calories: 5,
    };
    static TOPPING_CHEESE = {
        price: 10,
        calories: 20,
    };
    static TOPPING_POTATO = {
        price: 15,
        calories: 10,
    };
    static TOPPING_SEASONING = {
        price: 15,
        calories: 0,
    };
    static TOPPING_SALAD = {
        price: 20,
        calories: 5,
    };
    static SIZE_SMALL = {
        price: 50,
        calories: 20,
    };
    static SIZE_MIDDLE = {
        price: 75,
        calories: 30,
    };
    static SIZE_BIG = {
        price: 100,
        calories: 40,
    };
    addTopping(sauce) {
        this.burger.price = this.burger.price + sauce.price;
        this.burger.calories = this.burger.calories + sauce.calories;
    }
}

const smallHamburger = new Hamburger(Hamburger.SIZE_SMALL);
const hamburger = new Hamburger(Hamburger.SIZE_MIDDLE);
const bigHamburger = new Hamburger(Hamburger.SIZE_BIG);

smallHamburger.addTopping(Hamburger.TOPPING_SEASONING);
smallHamburger.addTopping(Hamburger.TOPPING_SALAD);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

bigHamburger.addTopping(Hamburger.TOPPING_MAYO);
bigHamburger.addTopping(Hamburger.TOPPING_CHEESE);

console.log("Small hamburger price with seasoning + salad: " + smallHamburger.getPrice());
console.log("Small hamburger calories with seasoning + salad: " + smallHamburger.getCalories());

console.log("Hamburger price with mayo + potato: " + hamburger.getPrice());
console.log("Hamburger calories with mayo + potato: " + hamburger.getCalories());

console.log("Big hamburger price with mayo + cheese: " + bigHamburger.getPrice());
console.log("Big hamburger calories with mayo + cheese: " + bigHamburger.getCalories());