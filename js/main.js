let green=document.querySelector(".green");
let red=document.querySelector(".red");
let yellow=document.querySelector(".yellow");


function startTrafficSignal () {
   green.style.opacity=1;
   setTimeout(function () {
       green.style.opacity=1;
       red.style.opacity=0.3;
       yellow.style.opacity=0.3;
   },5000);
   setTimeout(function () {
       green.style.opacity=0.3;
       red.style.opacity=0.3;
       yellow.style.opacity=1;
   },6000);

   setTimeout(function () {
       green.style.opacity=0.3;
       red.style.opacity=1;
       yellow.style.opacity=0.3;
   },10000);

   setTimeout(function () {
       green.style.opacity=0.3;
       red.style.opacity=0.3;
       yellow.style.opacity=1;
   },13000);
   setTimeout(function () {
      green.style.opacity=1;
      red.style.opacity=0.3;
      yellow.style.opacity=0.3;
  },15000);
}

let timer=setInterval(function () {
   startTrafficSignal();
},16000);

startTrafficSignal();