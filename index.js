var readlineSync = require('readline-sync');

var score = 0;

//taking input from user
function input(){
  var userName = readlineSync.question("What is your name? ");
  console.log("Welcome " + userName + " to the Game - Have you seen F.R.I.E.N.D.S ???");
}


//array of questions and answers
var questions = [
  {
    question: "Q.1) Were Ross and Rachel on a break ? ",
    answer: "Yes"
  },
  {
    question: "Q.2) Joey and Phoebe found Tag’s sweater in Rachel’s apartment, assuming he’s her baby’s father. What color is the sweater? ",
    answer: "Red"
  },
  {
    question: "Q.3) Are Monica and Ross siblings? ",
    answer: "Yes"
  },
  {
    question: "Q.4) Monica and Chandler adopted Erica's kid(s). How many kid(s) did she have? ",
    answer: "Twins"
  },
  {
    question: "Q.5) Was Chandler a Software Engineer? ",
    answer: "Yes"
  }

];

//function game 
function game(){
  for (var i = 0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

//function to operate based on inputs
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("You are right! ")
    score++;
  }else {
    console.log("OOPS!! You are wrong! ");
    // score--;
  }
  console.log("Your current score : ", score);
  console.log("------------------------")

}

//storing high scores
var highScores = [
  {
    name: 'Manish',
    score: 4
  },
  {
    name: 'Neha',
    score: 4 
  }
]

function show(){
  console.log("YAY! Your score is : ", score)
  console.log("Check out the scores! ");
  console.log("High score is: " + highScores[1].name + " " + highScores[1].score)
  console.log("If you scored more than " + highScores[1].name + " ping me. I will update the list.")
}

input();
game();
show();