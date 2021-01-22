
var countDownDate = new Date("Mar 10, 2021 12:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
if (distance >0){
    window.location.replace("http://127.0.0.1:5500/src/countdown.html");
}

