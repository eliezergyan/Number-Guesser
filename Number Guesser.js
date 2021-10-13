let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  let guess = Math.floor(Math.random() * 10)
  return guess;
}

let getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
}

const compareGuesses = (userGuess, computerGuess, secretTargetNumber) => {
  if (userGuess >= 0 && userGuess <= 9){
    const user = getAbsoluteDistance(userGuess, secretTargetNumber);
  } else {
    alert('The number is out of range');
  }
  const computer = getAbsoluteDistance(computerGuess, secretTargetNumber);
   if (user <= computer){
     return true;
   } else if (computer < user){
     return false;
   } 
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1; 
  } else if (winner === 'computer'){
    computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}

updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore);