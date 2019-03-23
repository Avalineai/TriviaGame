var number = 60;

var intervalId;

var correct = 0;
var incorrect = 0;

var ansArr = ["fruit", "bruss" , "dragon", "purple", "square", "star", "asp"]

$("#triviaquiz").hide();
$("#endgame-score").hide();

$("button").on("click", function () {
    $("#triviaquiz").show();
    $("button").hide();
});

function run() {
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    number--;
    $("#time-rem").text("Time Remaining: " + number);
    if (number === 0) {
        stop();

        // alert("Time Up!");
    }
}
function stop() {
    clearInterval(intervalId);
    $("#triviaquiz").hide();
    $("#endgame-score").show();
}

run();

ansArr.forEach(function(inpName) {
$('input[name=' + inpName + ']').on('click', function () {
    var formans = $(this);
    if (formans.val() == 'ans') {
        correct++; //move this to a check answers function, and to a "done" button function.
        $("input[name=" + inpName + "]").attr('disabled', true);
        console.log("correct: "+ correct)
    } else {
        incorrect++;
        $("input[name=" + inpName + "]").attr('disabled', true);
        console.log("wrong: " + incorrect)
    }

$("#correct-ans").text("Correct: " + correct)
$("#incorrect-ans").text("Incorrect: " + incorrect)
})
})
