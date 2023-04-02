function Question (questionText, questionNo){

  this.questionText = questionText;
  this.questionNo = questionNo; 
}

const q1 = new Question("JavaScript supports", 1);
const q2 = new Question("Which language is used for styling web pages?", 2);
const q3 = new Question("Which is not a JavaScript Framework?", 3);
const q4 = new Question("Which is used for Connect To Database?", 4);
const q5 = new Question("JavaScript is a", 5);

function Answer(answerText){

  this.answerText = answerText
}

function QuestionAnswerPair (questionObj, multipleOptionsObj, correctAnswerObj) {

  this.questionObj = questionObj;
  this.multipleOptionsObj = multipleOptionsObj;
  this.correctAnswerObj = correctAnswerObj;

}

const aFunctions = new Answer("Functions");
const aHTML = new Answer("HTML"); 
const aCSS = new Answer("CSS");

const qaPair1 = new QuestionAnswerPair(
  q1, [
    aFunctions, new Answer("XHTML"),
    aCSS, aHTML
  ], 
  aFunctions
);

const aJQuery = new Answer("JQuery")
const qaPair2 = new QuestionAnswerPair(
  q2, [
    aHTML, aJQuery,
    aCSS, new Answer("XML")
  ], 
  aCSS
);

const aPythonScript = new Answer("Python Script");
const qaPair3 = new QuestionAnswerPair(
  q3, [
    aPythonScript, aJQuery,
    new Answer("Django"), new Answer("Node JS")
  ], 
  aPythonScript
);

const aPHP = new Answer("PHP");
const aAll = new Answer("All");
const qaPair4 = new QuestionAnswerPair(
  q4, [
    aPHP, aHTML,
    new Answer("JS"), aAll
  ], 
  aPHP
);

const aProgrammingLanguage = new Answer("Programming Language");
const qaPair5 = new QuestionAnswerPair(
  q5, [
    new Answer("Language"), aProgrammingLanguage,
    new Answer("Development"), aAll
  ], 
  aProgrammingLanguage
);


function QuestionProgressBar (questionNo, totalNoOfQuestions){

  this.questionNo = questionNo;
  this.totalNoOfQuestions = totalNoOfQuestions;

  this.getProgressText = function(){

    const progressText = `Question ${questionNo} of ${totalNoOfQuestions}`;
    return progressText;
  }
}

function Result(score, markPercentage){

  this.score = score;
  this.markPercentage = markPercentage;

  this.getContent = function(){

    const content = `Your score : ${score}. Mark percentage is ${markPercentage} %`;
    return content;
  }
}


function QuizApplication (qaPairArray) {

  this.qaPairArray = qaPairArray;
  this.score = 0;

  this.start = function(){

  }

  this.getScore = function(){
    return this.score;
  }

  this.incrementScore() = function(){
    this.score ++; 
  }

  this.getMarkPercentage = function(){

    // ( 2 / 5 ) * 100

    const percentage = (this.getScore() / this.qaPairArray.length ) * 100;
    return percentage;
  }

}

const quizApp = new QuizApplication(
  [qaPair1, qaPair2, qaPair3, qaPair4, qaPair5]
);
quizApp.start();
