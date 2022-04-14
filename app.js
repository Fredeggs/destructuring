const teaOrder = {
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 3,
    brewTemp: 180
};

const {price, quantity, ...others} = teaOrder; // price = teaOrder.price // quantity = teaOrder.quantity
const {origin} = teaOrder; // origin = teaOrder.origin
const {country} = teaOrder // undefined

// *****************************
// DEFAULTS WITH DESTRUCTURING
// *****************************

const {brewTemp: temp = 175} = teaOrder; // will still return 180, but will be renamed to a varibale temp. (brewTemp will cease to exist)

const {teaName: tea} = teaOrder; // will replace the variable name teaName with tea

function checkout(tea){
    const {quantity, price} = tea;
    return quantity * price;
}

checkout(teaOrder);

const order1 = {
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    brewTemp: 180
};

function checkout1(tea){
    const {quantity, price} = tea;
    return quantity * price;
}
checkout1(order1)

// *****************************
// DESTRUCTURING WITH ARRAYS
// *****************************

const students = [
    {name: 'Drake', gpa: 4.6},
    {name: 'Henrietta', gpa: 4.4},
    {name: 'Tung', gpa: 4.0},
    {name: 'Harry', gpa: 3.8},
    {name: 'Ant', gpa: 3.2}
];

const [first, ...losers] = students;

// *****************************
// FUNCTION DESTRUCTURING
// *****************************

const order2 = {
    variety: 'green',
    teaName: 'silver needle',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 4
};

function getTotal({quantity: qty = 1, price}){
    return qty * price;
};

const longJumpResults = ['Jimmy', 'Bimbo', 'Slug'];
const swimMeetResults = ['Tammy', 'Abraham', 'Gertrude'];

function awardMedals ([gold, silver, bronze]){
    return {
        gold,
        silver,
        bronze
    };
};