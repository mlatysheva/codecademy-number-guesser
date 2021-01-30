let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
// console.log(generateTarget());
const compareGuesses = (user, computer, target) => { 
  if (user < 0 || user > 9) {
    alert ('Enter a number between 0 and 9')
  }
  difUser = getAbsoluteDistance(target,user);
  difComputer = getAbsoluteDistance(target,computer);
  if (difUser < difComputer || difUser == difComputer) {
    return true;
  } else return false;
}

const updateScore = winner => {
  if (winner == 'human') {
    humanScore++;
  } else if (winner == 'computer') {
    computerScore++;}
}

const advanceRound = () => {
  currentRoundNumber++;
}

const getAbsoluteDistance = (num1, num2) => {
  Math.abs(num1 - num2)}
