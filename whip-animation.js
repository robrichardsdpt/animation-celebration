let dragItem = document.querySelector(".ball")
let container = document.querySelector(".ball-container")

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
  if((yPos >=1300 && yPos <= 1560) && (xPos >= 0 && xPos <= 510)) {
   el.style.background = 'yellow'
   el.style.color = 'black'
   el.style.border = 'black 2px solid'
   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0) scale(.85)"
   let i = 1
   const timer = setInterval(function () {
     document.getElementById(`ball-${i}`).classList.add("animate-me")
     i++
   }, 2000)
   setTimeout(function( ) { clearInterval( timer ) }, 8000)
   } else {
    el.style.background='gray'
  }
}
