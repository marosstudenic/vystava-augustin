
// Set the date we're counting down to
// var countDownDate = new Date("Mar 10, 2021 12:00:00").getTime();
var countDownDate = new Date("Jan 22, 2021 12:54:00").getTime();
//Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = '<span class="numbers">' + days + '</span>' + "<span class='symbols'>d: </span>" 
  + '<br class="d-block d-sm-none">'+ '<span class="numbers">' + hours +'</span>' + "<span class='symbols'>h: </span>"
  + '<br class="d-block d-sm-none">' + '<span class="numbers">' +minutes +'</span>'+ "<span class='symbols'>m:</span>" 
  +'<br class="d-block d-sm-none">' + '<span class="numbers">' + seconds + '</span>'+ "<span class='symbols'>s</span> ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    window.location.replace("../../index.html");
  }
}, 1000);

