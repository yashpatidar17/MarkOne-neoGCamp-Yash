var readlineSync = require('readline-sync')
var userName = readlineSync.question("What is your name? ")

var highScore = 6;
console.log("Welcome " + userName + " Do you know yash? ")
var score=0

function playGame(question,answer){
    var userAnswer = readlineSync.question(question);

    if(userAnswer.toUpperCase() == answer.toUpperCase()){
        console.log("Right!")
        score++
        console.log("Your Score is: "+score)
        console.log("--------------------------------------------------------")
    }else{
        console.log("Wrong!")
        console.log("Your Score is: "+score)
        console.log("--------------------------------------------------------")
    }
}


var questions = [{
    question: "where do you live? ",
    answer: "khargone"
  },
  {
    question:"where do yash work?",
    answer:"Accenture"
    },
    {
    question:"Does yash go to gym ?",
    answer:"yes"
    },
    {
    question:"yash is a Marvel or DC Fan ?",
    answer:"Marvel"    
    },
    {
    question:"yash Fav super Hero ??",
    answer:"Ironman"    
    },
    {
    question:"yash fav subject ?",
    answer:"Maths"    
    } ]



for(var i=0;i<questions.length;i++){
    var currentQuestion = questions[i];
    playGame(currentQuestion.question,currentQuestion.answer)

}

function highScores(num){
    if(score==highScore){
        console.log("yeah, you know yash very well")
    }else if (score==(highScore-1)) {
        console.log("You need to ask that secret question from yash")
    } else {
        console.log("Ping yash and get to know more about him")
    }
}

highScores(score)