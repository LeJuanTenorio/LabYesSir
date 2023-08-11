const megaMente = require("birthday-calculator");
const sortAlphabetic = require('sort-alphabetic');

const yes = new Date("1500,2,5");
const yesSir = megaMente.getDayWhenBorn(yes);

const yes1 = new Date("1500,5,6");
const yesSir1 = megaMente.getDayWhenBorn(yes1);

const alphabeticalOrder = [yesSir,yesSir1];

console.log(sortAlphabetic(alphabeticalOrder));

