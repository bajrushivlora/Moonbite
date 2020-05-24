//something cool to use for the shop aspect 

// When the user scrolls down 50px from the top of the document, resize the header's font size
// var moonbiteText = document.querySelector(".header_middle");

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     moonbiteText.style.fontSize = "30px";
//   } else {
//     moonbiteText.style.fontSize = "60px";
//   }
// }

// ---------------------------------------------------------------------------------


//open modal upon page load

window.addEventListener("load", openComingSoon);

function openComingSoon() {
  document.querySelector(".shop").style.width = "100%";
}


//ease in the text 

setTimeout(function(){
  document.querySelector(".shop_top").style.opacity = '1'; 
  document.querySelector(".shop_toptext").style.opacity = '1'; 
  document.querySelector(".shop_bottom").style.opacity = '1'; 
  document.querySelector(".shop_exit").style.opacity = '1'; 
  document.getElementById("exitbtn").style.opacity = '1'; 

}, 1000);


// ---------------------------------------------------------------------------------


//countdown clock code 

// Set the date we're counting down to
var countDownDate = new Date("August 1, 2020 00:10:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".shop").innerHTML = "";
  }
}, 1000);



// ---------------------------------------------------------------------------------


//change background color every 2 seconds or smth 

var shopbkgd = document.querySelector(".shop");

// var colors = ['#acbd97', '#97bdb5', '#9b97bd', '#b697bd', '#bd97a3'];
var colors = ['#c2988f', '#c2bc8f', '#a0c28f', '#8fbac2', '#8f95c2', '#be8fc2', '#c28fa1'];
var colorsLength = colors.length;
var i = 0;

// function pickBackground() {
//   for (var i = 0; i < colors.length; i++) {
//     shopbkgd.style.backgroundColor = colors[i];
//     colors[i++ % colors.length]
//   }
// }

setInterval(function() {
      shopbkgd.style.backgroundColor = colors[i];
      colors[i++ % colors.length];
}, 1500);


// ---------------------------------------------------------------------------------


