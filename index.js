var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bgBlue.bold('\n Welcome to marvel quiz \n\n'))

var userName = readlineSync.question("Enter your good name? \n\n")

var score = 0;

let hightScore = [
  {
    name: "Pritam Kumar",
    hisScore : 15
  }
]

let marvelQuiz = [{
   qun: chalk.bgBlue.bold(' 1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? '),
   a: 'a. 2005',
   b: 'b. 2008',
   c: 'c. 2010',
   d: 'd. 2012',
   rightAns: 'b' 
},{
  qun: chalk.bgBlue.bold(' 2. What is the name of Thor’s hammer? '),
   a: 'a. Vanir',
   b: 'b. Mjolnir',
   c: 'c. Aesir',
   d: 'd. Norn',
   rightAns: 'b' 
},{
  qun: chalk.bgBlue.bold(' 3. In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film? '),
   a: 'a. That he wants to study The Hulk',
   b: 'b. That he knows about S.H.I.E.L.D.',
   c: 'c. That they are putting a team together',
   d: 'd. That Thaddeus owes him money',
   rightAns: 'c' 
},{
  qun: chalk.bgBlue.bold(' 4. What is Captain America’s shield made of? '),
   a: 'a. Adamantium',
   b: 'b. Vibranium',
   c: 'c. Promethium',
   d: 'd. Carbonadium',
   rightAns: 'b'
},{
  qun: chalk.bgBlue.bold(' 5. The Flerkens are a race of extremely dangerous aliens that resembles what?'),
   a: 'a. cats',
   b: 'b. Ducks',
   c: 'c. Reptiles',
   d: 'd. Raccoons',
   rightAns: 'a'
}];



function auth(){
  var askPlay = readlineSync.keyInYN("Would you like to play our Marvel quiz?\n")

  var yesNo = askPlay;

  if(yesNo == true){
    console.log(`That's Great MR.${userName}\n`)
    console.log(chalk.bgBlue('RULES FOR THE GAME\n'))
    console.log('a. All question are compulsory to attend')
    console.log('b. Total number of question is 5')
    console.log('c. Each right answer will give you 3 point and worng answer take 2 point from it.\n')
    console.log(chalk.bgBlue('Good Luck!!\n'))
  }else{
    console.log(`\nThank you!! MR.${userName}\n`)
  }

}

auth();

function askquestion(){

  for(i=0; i<marvelQuiz.length; i++){
    var currentQ = marvelQuiz[i]
    var myQues = currentQ.qun;
    var optionA = currentQ.a;
    var optionB = currentQ.b;
    var optionC = currentQ.c;
    var optionD = currentQ.d;
    var rightAnswers = currentQ.rightAns

    // show question and answer to user 

     console.log(`${myQues} \n`)
    console.log(optionA)
    console.log(optionB)
    console.log(optionC)
    console.log(optionD)

    var yourAnswer = readlineSync.question(chalk.red.bold(`\n what is your answer for this question MR.${userName} \n`));

    if(yourAnswer.toLowerCase() === currentQ.rightAns){
      score = score + 3;
      console.log(chalk.green(`\nWOW! You are right. \n your score is ${score}\n`))
    }else{
      score = score - 2;
      console.log(chalk.red(`\nOhh! you are worng \n your score is ${score}\n`));    }
  }

  scoreTable(score)
  
}

askquestion();

function scoreTable(s){
  if(s === hightScore[0].hisScore){
    console.log(`\nCongratulations! MR.${userName}. your score is ${s}\n Now! you are the top player of the MARVEL QUIZ\n`)
  }else{
    console.log(`\nBetter Luck Next Time! Have a great day! ${userName}\n your Score is ${s}`)
  }
  
}