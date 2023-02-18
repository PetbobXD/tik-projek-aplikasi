// clock
var hour = document.getElementById("clock-hour")
var minutes = document.getElementById("clock-minutes")
var seconds = document.getElementById("clock-seconds")

var clock = setInterval(
    function time() {
        var date_now = new Date();
        var hr = date_now.getHours();
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();

        if (hr < 10) {
            hr = "0" + hr;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (sec < 10) {
            min = "0" + sec;
        }

        hour.textContent = hr;
        minutes.textContent = min;
        seconds.textContent = sec;
    }, 1000
);

// nav

function onclickli1() {
    location.href = "index.html"
}
function onclickli2() {
    location.href = "calender.html"
}
function onclickli3() {
    location.href = "reminder.html"
}
function onclickli4() {
    location.href = "calculator.html"
}
function onclickli5() {
    location.href = "notepad.html"
}
function onclickhome() {
    location.href = "index.html"
}