const ourCohort = [
    "Erica Rojo",
    "Natalie Barba",
    "Joe Orekhov",
    "Tina Guliuzza",
    "Gabriel Rodriguez",
    "Shawna Akiona",
    "Charles Oneymem",
    "Melissa Funk",
    "Gabriel Miranda",
]

const coursePhases = [
    {phaseNumber: 1, name: "Vanilla JavaScript", language: "JavaScript", framework: "None"},
    {phaseNumber: 2, name: "JS, React, & Redux", language: "JavaScript", framework: "React"},
    {phaseNumber: 3, name: "Vanilla Ruby", language: "Ruby", framework: "None"},
    {phaseNumber: 4, name: "Rails as an API", language: "Ruby", framework: "Rails"},
    {phaseNumber: 5, name: "Capstone Project", language: "Ruby & JavaScript", framework: "Rails & React"}
]

// Write your functions here!

const firstStudent = () => ourCohort[0];

const sortCohortDesc = () => ourCohort.sort().reverse();

const shortNames = () => ourCohort.filter(name => name.length < 15);

const cohortSize = () => ourCohort.length;

const locateStudent = name => ourCohort.find(element => element === name);

const phaseNames = () => coursePhases.map(phase => phase.name);

const cohortPhases = () => coursePhases.filter(phase => phase.language === "JavaScript");

// function allTheGabes() {
//     return ourCohort.filter(name => name.slice(0, "Gabriel".length) === "Gabriel");
// }

const allTheGabes = () => ourCohort.filter(name => name.slice(0, "Gabriel".length) === "Gabriel");

const studentAndPhase = () => ourCohort.map(name => `${name} is currently in Phase 1!`);

const sortPhasesByName = () => coursePhases.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    } else {
        return 1;
    }
  });

// You don't have to change anything below this line
// These console logs are for you to check your work in the browser console.

console.log(sortCohortDesc())
console.log(shortNames())
console.log(cohortSize())
console.log(locateStudent("Joe Orekhov"))
console.log(phaseNames())
console.log(cohortPhases())
console.log(allTheGabes())
console.log(studentAndPhase())
console.log(sortPhasesByName())
