// Alert portion for starting the game
alert("Starting your Mars Adventure!");
alert("Booting up...");
alert("All systems go!");
alert("Let's start!");

// First use of prompt, and template string addition
let username = prompt("Hi there. What's your name?");
username = username.trim();
alert(`Hi ${username} --- Welcome to The Mars Adventure Game.`)
alert("Yesterday, you received a call from your good friend at NASA")
alert("They need someone to go to Mars this weekend, and YOU'VE been chosen!!")

// Conditional statement for excitement
let excited = prompt("Are you excited? Type Y or N")

//// (Before the startsWith() function)
// excited = excited.toUpperCase(); 
// if (excited === "Y") {
//     alert("I knew you'd say that. It's so cool that you're going to Mars!")
// } else if (excited === "N") {
//     alert("Well, it's too late to back out now.")
// }
excited = excited.toUpperCase().trim(); 

if (excited.startsWith("Y")) {
    alert("I knew you'd say that. It's so cool that you're going to Mars!")
} else if (excited.startsWith("N")) {
    alert("Well, it's too late to back out now.")
}

// Data Conversion portion
alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt("How many suitcases do you plan to bring?");
numSuitcases = numSuitcases.trim()
numSuitcases = Number(numSuitcases);
if (numSuitcases > 2) {
    alert("That's way too many. You'll have to pack more lightly.")
} else {
    alert("Perfect. You'll certainly fit in the spaceship!")
}

// Companion Animal Portion
alert("You're allowed to bring one companion animal with you.")
let companionType = prompt("What kind of companion animal would you like to bring?")
let companionName = prompt("What is your companion's name?")
companionName = companionName.trim()
let firstLetterName = companionName[0]
firstLetterName = firstLetterName.toUpperCase()
let otherLettersName = companionName.slice(1)
otherLettersName = otherLettersName.toLowerCase()
companionName = firstLetterName + otherLettersName

companionType = companionType.trim()
let firstLetterType = companionType[0]
firstLetterType = firstLetterType.toUpperCase()
let otherLettersType = companionType.slice(1)
otherLettersType = otherLettersType.toLowerCase()
companionType = firstLetterType + otherLettersType

alert(`Cool, so you're bringing ${companionName} the ${companionType}`)

alert(`You always need a backup. Just in case ${companionName} can't make it, you should have a second choice!
`)
let compTypeTwo = prompt("What kind of companion animal would you like for your second choice?")
let compNameTwo = prompt("What is their name?")
compNameTwo = compNameTwo.trim()
let firstLetterNameTwo = compNameTwo[0]
firstLetterNameTwo = firstLetterNameTwo.toUpperCase()
let otherLettersNameTwo = compNameTwo.slice(1)
otherLettersNameTwo = otherLettersNameTwo.toLowerCase()
compNameTwo = firstLetterNameTwo + otherLettersNameTwo

compTypeTwo = compTypeTwo.trim()
let firstLetterTypeTwo = compTypeTwo[0]
firstLetterTypeTwo = firstLetterTypeTwo.toUpperCase()
let otherLettersTypeTwo = compTypeTwo.slice(1)
otherLettersTypeTwo = otherLettersTypeTwo.toLowerCase()
compTypeTwo = firstLetterTypeTwo + otherLettersTypeTwo

alert(`You've elected to have ${compNameTwo} the ${compTypeTwo} as your second choice`)

// // Companion Animal capitalization portion (DON'T INCLUDE)
// let companionName = "Remmy"
// let firstLetter = companionName[0]
// firstLetter = firstLetter.toUpperCase()

// let otherLetters = companionName.slice(1)
// otherLetters = otherLetters.toLowerCase()

// companionName = firstLetter + otherLetters
// console.log(companionName)

// Spaceship Decor
alert("NASA has an interior design team offering to outfit your space ship.")
let decorChoice = prompt(`You have a couple of options for the interior decor of your ship. Your options are:
A   Sleek, modern minimalism
B   Retro/vintage space age
C   Victorian-era steampunk
D   Gothic/Baroque 
E   Non-euclidean nightmare
Type in A, B, C, D or E
`);
decorChoice = decorChoice.toUpperCase().trim();
let decor;
if (decorChoice === "A") {
    decor = "modern minimalist"
} else if (decorChoice === "B") {
    decor = "Retro/vintage space age"
} else if (decorChoice === "C") {
    decor = "Victorian steampunk"
} else if (decorChoice === "D") {
    decor = "Imposing Gothic/Baroque"
} else if (decorChoice === "E") {
    decor = "Reality-warping"
}

// Planet choice
let planet = prompt("Which planet would you like to explore?")
planet = planet.trim()
let firstLetterPlanet = planet[0]
firstLetterPlanet = firstLetterPlanet.toUpperCase()
let otherLettersPlanet = planet.slice(1)
otherLettersPlanet = otherLettersPlanet.toLowerCase()
planet = firstLetterPlanet + otherLettersPlanet

if (planet === "Saturn") {
    alert("Sorry, the spaceship for Saturn left last week. You'll need to go to Mars")
} else if (planet === "Venus") {
    alert("It's not worth the trip, trust me. Mars is better this time of year")
} else {
    alert("Don't worry about it. Mars is far more interesting, trust me!")
}

// Bringing it all together
alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship. ${compNameTwo} the ${compTypeTwo} watches from afar with a tear in their eye`)

// Lift Off while loop
const symbol = "."
let timer = 5;
let biggerCount = 1;
while (timer > 0) {
    alert(`${timer}${symbol.repeat(biggerCount)}`);
    biggerCount += 2
    timer --
}
alert("*** LIFTOFF ***");
