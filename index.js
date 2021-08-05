var readlineSync = require('readline-sync');
const chalk = require('chalk');
// getting userName

var score = 0;
var userName = readlineSync.question(chalk.bgMagenta("May I know your Name? "));
console.log("Hi " + userName + " welcome to my Quiz ");

var highScores = [{
        name: "surya",
        score: 5
    },
    {
        name: "Amar",
        score: 4,
    }
];
//checking age

function checkQuestionAndAnswer(Question, answer) {
    var ans = readlineSync.question(chalk.bgYellow(Question));
    if (ans.toLowerCase() === answer) {
        score++;
        console.log(chalk.green("you are right\n" + `your score:${score}`));
    } else {
        console.log(chalk.red("you are wrong\n" + `your score:${score}`));
    }
};
checkQuestionAndAnswer("Am I older than 25? ", "no");
checkQuestionAndAnswer("where do I live? ", "vellore");
checkQuestionAndAnswer("Which is my favorite sport? ", "football");
checkQuestionAndAnswer("which is my favorite colour? ", "blue");
checkQuestionAndAnswer("which is my favorite food? ", "dosa");

//function for checking highScores
function checkForHighscore(score) {
    if (score >= highScores[0].score || score >= highScores[1].score) {
        console.log(chalk.bgYellowBright("Congratulations you have got a highscre please send me a screenshot so that i can update the highScores"));
    } else {
        console.log(chalk.bgBlueBright("Highscores: \n" + `1.Name:${highScores[0].name}` + '\n' + `score:${highScores[0].score}\n`));
        console.log(chalk.bgBlueBright(`2.Name:${highScores[1].name}` + '\n' + `score:${highScores[1].score}\n`));

    }

}
checkForHighscore(score);