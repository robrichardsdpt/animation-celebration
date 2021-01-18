document.querySelector("#cube").addEventListener('click',function ()
{
 if (document.querySelector("#cube").style.animation.includes("pause")) {
  (document.querySelector("#cube").style.animation = "cubeRotation 2s linear infinite")
 } else {
  (document.querySelector("#cube").style.animation = "pause")
 }
}  )


document.querySelector(".image").addEventListener('click',function ()
{
  (document.querySelector(".image").style.animation = "desaturate 4s linear forwards")
}  )


function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var oneMinute = 60 * 1,
      display = document.querySelector('#time');
  startTimer(oneMinute, display);
};