// Code Along Norms: 
// 1. Only be on Repl.it/classroom resources
// 2. Actively follow along and engage
// 3. Ask questions and flag if you get stuck
// 4. Take notes as needed!
let name = prompt("What's your name?")

//CONCATTENATION
//With a + sign, need to add a space
console.log("Welcome to my game, " + name)
// With a , sign spaces added automatically
console.log("Welcome to my game," , name)
//STRING INTERPOLATION
//With backticks, you can input variables directly
console.log(`Welcome to my game, ${name}`)

let role = prompt("What role do you want? (magician, fighter, peasant)")
console.log(`Okay, ${name}, your role is now ${role}.`)

// Prompt assumes that the imput is a string
let powerLevel = prompt("What is your power level?")
// To change it to a number, use parseInt/parseFloat
powerLevel = parseInt(powerLevel)
// let powerLevelNum = parseInt(powerLevel)\
//console.log(typeof powerLevel)
