
var playerName = document.getElementById("player-name"),
    btnQuestion =document.getElementById("btn-question"),
    currentQuestion = document.getElementById("current-question"),
    inputAnswer = document.getElementById("input-answer"),
    btnSubmit = document.getElementById("submit-answer"),
    score =document.getElementById("score"),
    select = document.getElementById("select"),
    selectOp = document.getElementById("select-op"),
    num1 = 0,
    num2 = 0;

    function creatQuestion(range){
        var question ="";

        if(range == 1) { 
        num1 = getRandomNumber(0, 10);
        num2 = getRandomNumber(0, 10);
        question += num1 + " " + selectOp.value + " " + num2 + " =";
       } else {
        num1 = getRandomNumber(0, 100);
        num2 = getRandomNumber(0, 100);
        question += num1 + " " + selectOp.value + " " + num2 + " =";
       }
       return question;
    }

btnQuestion.addEventListener("click", function(){
  curr.innerHTML = creatQuestion(select.value);
});

function getRandomNumber(min, max){
min = Math.ceil(min);
max = Math.floor(max);
var number = Math.random();
return Math.floor(number * (max - min + 1) + min);
};

console.log(select.value);