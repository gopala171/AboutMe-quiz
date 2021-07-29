var readlineSync = require('readline-sync');

var userName = readlineSync.question("Hey there, May I have your name : ");
const chalk = require('chalk');
console.log(chalk.yellow("Hi , "+ userName));
console.log("");

console.log("Welcome to quiz on How well do you know me");
console.log(chalk.blue("--------------------"));

var scores = 0;

function questionAnswer(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("")
    console.log("You are right");
    scores++;
  } else {
    console.log("")
    console.log("Oops, you went wrong");
    scores--;
  } 
  console.log("Current score: "+scores);
  console.log(chalk.blue("--------------------"));
  console.log("")
}


var questionAnsArray = [
{question: "Where do I live : \n(a) chennai \n(b) mumbai \n(c) bangalore  :", answer:"a"}, 

{question:"What do color do I like : \n(a) blue \n(b) green \n(c) red :", answer:"c"},

{question: "What's my favorite food : \n(a) pizza  \n(b) parotta \n(c) burger :", 
answer: "b"}, 

{question: "Which phone do I use : \n(a) android \n(b) iphone :",
answer: "b"},

{question: "What's the name of the organization that I work: \n(a) Amazon \n(b) Microsoft \n(c) Google :",
answer:"a"} 
];


for (var i=0; i<questionAnsArray.length; i++) {
  questionAnswer(questionAnsArray[i].question,questionAnsArray[i].answer);
}

if (scores>3) {
  console.log(chalk.red.bgWhite.bold("Man! , you scored "+ scores + " you really know me don't ya"));
} else {
  console.log(chalk.red.bgWhite.bold("Your score is " + scores +" Cool dude, Try once more"));
}

var highScores = [
  {name:"John", score:4},
  {name:"Bruce", score:3}
];

console.log("");
console.log(chalk.red("Ping me with a screenshot to update yours. \nHere are the Highscores: "));

for(var i=0; i<highScores.length; i++) {
  console.log(highScores[i].name + ": "+highScores[i].score);
}
