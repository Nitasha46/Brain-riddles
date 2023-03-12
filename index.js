// Neogcamp mark-one exercise : Brain-riddles quiz

var readlineSync = require('readline-sync');
var score = 0;

// array of high score objects
var highScores = [{
  name: "Nitasha",
  score: 4
},{
  name: "Anju",
  score: 3
}]

// array of all questions objects
var questions = [{
  question: "1.You go at red, but stop at green. What am I? ",
  answer: "Watermelon",
  array: ["Dress", "Watermelon", "Guava", "Signal"]
},{
  question: "2.I’m tall when I’m young, and I’m short when I’m old. What am I? ",
  answer: "Candle",
  array: ["Ego", "Shadow", "Candle", "Happiness"]
},{
  question: "3.I have a head and a tail that will never meet. Having too many of me is always a treat. What am I? ",
  answer: "Coin",
  array: ["Monkey", "Cow", "Bird", "Coin"]
},{
  question: "4.I help you from your head to your toe. The more I work, the smaller I grow. What am I? ",
  answer: "Soap",
  array: ["Dress", "Skin", "Age", "Soap"]
},{
  question: "5.I can fly but have no wings. I can cry but I have no eyes. Wherever I go, darkness follows me. What am I? ",
  answer: "Clouds",
  array: ["Bird", "Plane", "Clouds", "Rain"]
}]

// welcome message
console.log("--------- BRAIN RIDDLES ---------");
console.log("\n");
var userName = readlineSync.question("What's your name? \n");
console.log("Welcome to Brain Riddles " + userName + "!");
console.log("\n");
console.log("--------- GUIDELINES FOR QUIZ ---------");
console.log("\n");
console.log("There are 5 riddles in this quiz. Each riddle has 4 options.");
console.log("Enter 1,2,3 or 4 as right answer and then press Enter.");
console.log("Type your answer and then press Enter key.");
console.log("\n");
console.log("--------- Let's start! ---------");
console.log("\n");

// defining function play
function play(question, list, answer) {
  console.log(question);
  var userAnswer = readlineSync.keyInSelect(list, 'Your Answer - ');
  console.log("\n");
  if (list[userAnswer] === answer) {
    console.log("Right!");
    score = score + 1;
  } else {
    console.log("Wrong!");
  }
  console.log("Your Score:" + score);
}

// calling function play
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.array, currentQuestion.answer);
  console.log("\n");
  console.log("Right answer:" + questions[i].answer);
  console.log("---------");
  console.log("\n");
}

// total score
console.log("Yay! Your total score is " + score);
console.log("Send me the screenshot of your scores.")
console.log("---------");

// high score
if (score>=highScores[0].score) {
  console.log("Congratulations! You made a new high score");
} else {
  console.log("Check who has got high scores.")
}

console.log("---------");
console.log("High scores:");

for (var i=0; i<highScores.length; i++) {
  console.log(highScores[i].name + ":" + highScores[i].score);
}
