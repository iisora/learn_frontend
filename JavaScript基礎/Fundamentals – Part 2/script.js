'use strict';

// 33.Functions

// function logger() {
//     console.log('My name is Jonas');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');


// Function Declarations vs Expressions
/*

// Function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    // const age = 2037 - birthYear;
    // return age;
    return 2037-birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1,age2);

// Arrow Function
const calcAge3 = birthYear => 2037-birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/


// Functions Calling Others Functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`
    return juice;
}
console.log(fruitProcessor(2,3));
*/

// Reviewing Functions
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 -age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${birthYear} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return 7777;
    }

    return retirement;
    // return `${firstName} retires in ${birthYear} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));
*/

// Coding Challenge #1
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3,4,5));

// Test
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`); 
    } else if (avgKoalas >= 2* avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins.....');
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

// Introduction to Array
/*
const friend1 = 'Michel';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michel', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schemdtmann', 2037-1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];


const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]),
calcAge(years[years.length-1])];

console.log(ages);
*/

// Basic Array Operations (Methods)
/*
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay'); // add last element
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends); // add first element

// Remove elements
// friends.pop(friends); // Last
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

//where this element?
console.log(friends.indexOf('Steven')); 
console.log(friends.indexOf('Bob')); // not exist = -1

friends.push(23); // number
console.log(friends.includes('Steven')); 
console.log(friends.includes('Bob')); // not exist = false
console.log(friends.includes('23')); // string 

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Allow Function
// const calcTip = bill => bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
*/

// Introduction to Objects
/*
const JonasArray = [
    'Jonas',
    'Schmedtman',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const Jonas = {
    // property
    firstName: 'Jonas', 
    lastName: 'Schmedtman',
    age: 2037- 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
*/


// Dot vs. Braket Notation
/*
const Jonas = {
    firstName: 'Jonas',
    lastName: 'Schmetman',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven']
};
console.log(Jonas);

console.log(Jonas.lastName); // Dot 
console.log(Jonas['lastName']); // Braket notation

const nameKey = 'Name';
console.log(Jonas['first' + nameKey]);
console.log(Jonas['last' + nameKey]);

// console.log(Jonas.'last' + nameKey);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (Jonas[interestedIn]) {
    console.log(Jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

Jonas.location = 'Portugal';
Jonas['twitter'] = '@dawdawdwadwadwadaw';
console.log(Jonas);

// Challenge
// "jonas has 3 friends, and his best friend is called Michael"
console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends, and his best friend is called ${Jonas.friends[0]}`);

// Dot -> Member Access , Braket -> Computed Member Access
*/


// Object Methods
/*
const  jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: false,

    // function value
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }    

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
};

// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));

// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas['calcAge'](jonas.birthYear));

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver.license."
console.log(jonas.getSummary());
*/

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2; // height * height
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2; // height * height
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's BMI (23.9)!"

if(mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}
*/

// Iteration: The for Loop
/*
// console.log('Lifting weights repetition 1 🏋️‍♀️');

// for loop keeps runnning while condition is TRUE
for(let rep = 1; rep <= 30; rep++) { // no need last ';'
    // console.log('Lifting weights repetition ' + rep + ' 🏋️‍♀️');
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/

// Looping Arrays, Breaking and Continuing
/*
const JonasArray = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

// console.log(JonasArray[0])
// console.log(JonasArray[1])
// ...
// console.log(JonasArray[4])
// console.log(JonasArray[5])
// JonasArray[6] does NOT exist 

for (let i = 0; i < JonasArray.length; i++) {
    console.log(JonasArray[i], typeof JonasArray[i]);

    // Filling types  array
    // types[i] = typeof JonasArray[i];
    types.push(typeof JonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
}
console.log(ages);

// continue and break
console.log('--- ONLY STRING ---');
for (let i = 0; i < JonasArray.length; i++) {
    if(typeof JonasArray[i] !== 'string') continue;

    console.log(JonasArray[i], typeof JonasArray[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < JonasArray.length; i++) {
    if(typeof JonasArray[i] === 'number') break;

    console.log(JonasArray[i], typeof JonasArray[i]);
}
*/

// Looping Backwards and Loops in Loops
/*
const jonas_info = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// 0, 1, ..., 4
// 4, 3, ..., 0

// Looping Backwards
console.log(`jonas_info.length : ${jonas_info.length}`);
for(let i = jonas_info.length - 1; i >= 0; i--) {
    console.log(i, jonas_info[i]);
}

// Loops in Loops
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`--------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep <= 10; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//     } 
// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`FOR: Lifting weight repetition ${rep} 🏋️‍♀️`);
// } 

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep ++
}


// return integer part
let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(Math.random());
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
*/

// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips  = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    console.log(`arr.length: ${arr.length}`);
    for(let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    // console.log(sum);
    return sum / arr.length
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(tips));
console.log(calcAverage(totals));



















