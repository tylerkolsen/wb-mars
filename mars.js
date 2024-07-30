// Alert portion for starting the game
alert("Starting your Mars Adventure!");
alert("Booting up...");
alert("All systems go!");
alert("Let's start!");

// First use of prompt, and template string addition
const username = prompt("Hi there. What's your name?");
alert(`Hi ${username} --- Welcome to The Mars Adventure Game.`)
alert("Yesterday, you received a call from your good friend at NASA")
alert("They need someone to go to Mars this weekend, and YOU'VE been chosen!!")

// Conditional statement for excitement
const excited = prompt("Are you excited? Type Y or N")
if (excited === "Y") {
    alert("I knew you'd say that. It's so cool that you're going to Mars!")
} else if (excited === "N") {
    alert("Well, it's too late to back out now.")
}