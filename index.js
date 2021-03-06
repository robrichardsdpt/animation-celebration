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
      display = document.querySelector('#time')
  startTimer(oneMinute, display)
}

let dragItem = document.querySelector("#image-div-movable")
let container = document.querySelector("#image-div")

let active = false;
let currentX = 0, currentY = 0, initialX = 0, initialY = 0, xOffset = 0, yOffset = 0

container.addEventListener("touchstart", dragStart, false)
container.addEventListener("touchend", dragEnd, false)
container.addEventListener("touchmove", drag, false)

container.addEventListener("mousedown", dragStart, false)
container.addEventListener("mouseup", dragEnd, false)
container.addEventListener("mousemove", drag, false)

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset
    initialY = e.touches[0].clientY - yOffset
  } else {
    initialX = e.clientX - xOffset
    initialY = e.clientY - yOffset
  }

  if (e.target === dragItem) {
    active = true
  }
}

function dragEnd(e) {
  initialX = currentX
  initialY = currentY
  active = false
}

function drag(e) {
  if (active) {
    e.preventDefault()
  
    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX
      currentY = e.touches[0].clientY - initialY
    } else {
      currentX = e.clientX - initialX
      currentY = e.clientY - initialY
    }

    xOffset = currentX
    yOffset = currentY

    setTranslate(currentX, currentY, dragItem)
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

