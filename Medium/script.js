let userInput = prompt("ENTER TEXT HERE");

if (userInput === userInput.toUpperCase()) {
  console.log("You are shouting.");
} else if (userInput === userInput.toLowerCase()) {
  console.log("You are whispering.");
} else {
  console.log("You are talking normally.");
}

//