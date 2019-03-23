$(document).ready(function () {

var number = 90;

var intervalId;
var correct = 0;
var incorrect = 0;

var ansArr = ["fruit", "bruss", "dragon", "purple", "square", "star", "asp"]

$("#triviaquiz").hide();
$("#endgame-score").hide();

$("#startbutton").on("click", function () {
    $("form").css("display", "block");
    $("#time-rem").css("display", "block");
    $("#triviaquiz").show();
    $("#startbutton").hide();
});

function answerEval() {
    ansArr.forEach(function (inpName) {
        var formans = $("input[name=" + inpName + "]:checked").val()
        if (formans == 'ans') {
            correct++;
            console.log("correct: " + correct)
        } else {
            incorrect++;
            console.log("wrong: " + incorrect)
        }
        $("#donebutton").hide();
        stop();
        $("#correct-ans").text("Correct: " + correct)
        $("#incorrect-ans").text("Incorrect: " + incorrect)
    })
}
function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
    seconds = "0" + seconds;
    }
    if (minutes === 0) {
    minutes = "00";
    }
    else if (minutes < 10) {
    minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}

function run() {
    intervalId = setInterval(decrement, 1000);}
function decrement() {
    number--;
    $("#time-rem").html("Time Remaining: "+ timeConverter(number));
    if (number === 0) {
        answerEval();
        stop();
    }
}
function stop() {
    clearInterval(intervalId);
    $("#triviaquiz").hide();
    $("#endgame-score").show();
}
run();
$("#donebutton").on("click", function (event) {
    event.preventDefault();
    answerEval();
});
})