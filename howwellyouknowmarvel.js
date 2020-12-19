var readlineSync = require('readline-sync');
console.log("This is a quiz for how well you know Marvel");

var userName = readlineSync.question('May I have your name?');
console.log("Welcome "+userName)

num = 0;
score = 0;

function quiz(question, answer){
  var answerGiven = readlineSync.question(question)
  if (answerGiven.toLowerCase() == answer.toLowerCase()){
  console.log("Right")
  score = score + 1
  return score
  }else{
  console.log("Wrong")
  score = score - 1

  return score
  }
}

questionOne = {
  question: "How Many Comics Has Marvel Released As Of 2009?",
  answer: "32000"
}

questionTwo = {
question: "2. Which Characters Rights Sold To Avoid Bankruptcy?",
answer: "Fantastic Four"
}

questionThree = {
question: "Which Hero Made The First Appearance In The Comics?",
answer: "Human Torch"
}

questionFour = {
question: "4. What Was Marvel’s Very First Major Title",
answer: "The Fantastic Four"
}

HighScore1 = {
name: "Reddy",
score: "4"
}

HighScore2 = {
name: "Ranga Reddy",
score: "3"
}

var questionsList = [questionOne.question, questionTwo.question, questionThree.question, questionFour.question];

var answersList = [questionOne.answer, questionTwo.answer, questionThree.answer, questionFour.answer];

for (i=0;i<questionsList.length;i++){
  quiz(questionsList[num],answersList[num])
  num=num+1;
}

console.log(score)
console.log("Previous high scores are for:"+HighScore1.name+" score of "+HighScore1.score+" and "+HighScore2.name+" score of "+HighScore2.score)
console.log('Please send me a screenshot if you have beaten or are equal to the high score, I will update the counter')