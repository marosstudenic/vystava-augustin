var countDownDate = new Date("Mar 10, 2021 12:01:00").getTime();
// var countDownDate = new Date("Jan 22, 2021 12:54:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
if (distance > 0) {
  window.location.replace("../../countdown.html");
}
