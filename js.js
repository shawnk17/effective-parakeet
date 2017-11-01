
var playerName = document.getElementById("player-name"),
    btnQuestion =document.getElementById("btn-question"),
    currentQuestion = document.getElementById("current-question"),
    inputAnswer = document.getElementById("input-answer"),
    btnSubmit = document.getElementById("submit-answer"),
    score =document.getElementById("score"),
    select = document.getElementById("select"),
    selectOp = document.getElementById("select-op"),
    checkAnswer=document.getElementById("check-answer"),
    num1 = 0,
    num2 = 0,
    oper = "",
    answer = 0,
    scoreTotal = 0;

    function creatQuestion(range){
        var question ="";

        if(range == 1) { 
        num1 = parseInt(getRandomNumber(1, 10));
        num2 = parseInt(getRandomNumber(1, 10));
        oper = selectOp.value;
        question += num1 + " " + oper + " " + num2;
       } else {
        num1 = parseInt(getRandomNumber(1, 100));
        num2 = parseInt(getRandomNumber(1, 100));
        oper = selectOp.value;
        question += num1 + " " + oper + " " + num2;
       }
       return question;
    }

btnQuestion.addEventListener("click", function(){
    var question = creatQuestion(select.value);
    currentQuestion.innerHTML = question + " =";
});

btnSubmit.addEventListener("click", function(){
    getAnswer(num1, num2, oper);
    if (answer == inputAnswer.value){
    checkAnswer.innerHTML = "<strong>Correct, " + playerName.value + "!</strong>";
    scoreTotal++;
    score.innerHTML = playerName.value + "'s Total Score: " + scoreTotal;

    } else
    {
        checkAnswer.innerHTML = "<strong>Oops!  That is incorrect, " + playerName.value + ".  The correct answer is: " + answer + "</strong>"
        scoreTotal--;
        score.innerHTML = playerName.value + "'s Total Score: " + scoreTotal;
    }
});

function getAnswer(num1, num2, oper){
    switch (oper) {
        case "+": answer = num1 + num2;
            break;
        case "-": answer = num1 - num2;
            break;
        case "*": answer = num1 * num2;
            break;
        case "/": answer = num1 / num2;
    }

}

function getRandomNumber(min, max){
min = Math.ceil(min);
max = Math.floor(max);
var number = Math.random();
return Math.floor(number * (max - min + 1) + min);
};

console.log(select.value);