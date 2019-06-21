const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// FOR LOOP
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

/*
======================
FOREACH
======================
*/

// companies.forEach(function(company) {
//   console.log(company.name);
// });

// companies.forEach(company => console.log(company.name));

/*
======================
FILTER
======================
*/

// FILTER AGES OVER 21
// const overTwentyOne = ages.filter(function(age) {
//   if (age >= 21) {
//     return true;
//   }
// });

const overTwentyOne = ages.filter(age => age >= 21);

// FILTER RETAIL COMPANIES
const isRetail = companies.filter(company => company.category === "Retail");

// FILTER ALL COMPANIES FROM THE 80'S
const eightiesCompanies = companies.filter(
  company => company.start > 1970 && company.start < 1990
);

// FILTER ALL COMPANIES THAT LASTED MORE THAN 20 YEARS
// const overTwenty = companies.filter(function(company) {
//   if (company.end - company.start >= 20) {
//     return true;
//   }
// });

const overTwenty = companies.filter(
  company => company.end - company.start >= 20
);

/*
======================
MAP
======================
*/

// CREATE ARRAY OF COMPANY NAMES
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

const companyNames = companies.map(company => company.name);

// CREATE TEST MAP ARRAY
const testMap = companies.map(
  company => `${company.name} [${company.start} - ${company.end}]`
);

// CREATE AN ARRAY WITH THE SQUARE ROOT OF EACH NUMBER
const ageSquare = ages.map(age => Math.sqrt(age));

// CREATE A NEW ARRAY WITH THE SQUARE ROOF OF EACH NUMBER
// AND THEN CREATE A NEW ARRAY WITH THE NEW NUMBER TIMES TWO
const timesTwo = ages.map(age => Math.sqrt(age)).map(age => age * 2);

/*
======================
SORT
======================
*/

// SORT COMPANIES BY START YEAR
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// SORT AGES
const sortAges = ages.sort((a, b) => (a > b ? 1 : -1));

/*
======================
REDUCE
======================
*/

// ADD ALL AGES TOGETHER
// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);

// TOTAL YEARS FOR ALL COMPANIES
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

/*
======================
COMBINE METHODS
======================
*/

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(combined);
