// GlobalValue

var width = 480;
var height = 360;

var webcam;
var DC;

var myTimer;


// Functions

window.onload = function(){

  document.querySelector("#start").addEventListener("click", Start, false);
  document.querySelector("#stop").addEventListener("click", Stop, false);
  document.querySelector("#mirror").addEventListener("click", Mirror, false);

  navigator.getUserMedia = navigator.getUserMedia
                      || navigator.webkitGetUserMedia
                      || navigator.mozGetUserMedia;

  window.URL = window.URL || window.webkitURL;

  webcam = document.getElementById("webcam");
  DC = document.getElementById("cnvs").getContext('2d');

  navigator.getUserMedia( { video: true, audio: false },success, error );
  Start();
}

function success(stream) { // for success case
  webcam.srcObject = stream;
  console.log(stream);
}

function error(err) { // for error case
  console.log("getUserMedia error: ", err);
}


function Start(){
  myTimer = setInterval(Draw,1000/30);
}

function Stop(){
  clearInterval(myTimer);
}

function Mirror(){
  DC.translate(width,0);
  DC.scale(-1,1);
}

 
function Draw(){ // Drawing loop
  DC.drawImage(webcam, 0, 0, width, height);
}
