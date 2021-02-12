document.body.onload = function() {
  let i = 0
  const timer = setInterval(function () {
    const newDiv = document.createElement("div")
    newDiv.classList.add("square1")
    newDiv.classList.add("square1")
    newDiv.id = `square${i}`
    let leftMath = (225 * i) - 225
    newDiv.style.left = `${leftMath}px`
    newDiv.style.top = '0px'
    newDiv.style.zIndex = `${i+2}`
    const currentDiv = document.querySelector(".container-for-animation")
    i++
    document.body.insertBefore(newDiv, currentDiv)
  }, 2000)
  setTimeout(function( ) { clearInterval( timer ) }, 10000)
  setTimeout(function() { changeClassToSink() }, 10000)
}

const changeClassToSink = () => {
  let i = 0
  const timer = setInterval(function () {
    const changeDivClass = document.getElementById(`square${i}`)
    changeDivClass.classList.remove("square1")
    changeDivClass.classList.add("square2")
    i++
  }, 2000)
  setTimeout(function( ) { clearInterval( timer ) }, 10000)
  setTimeout(function() { changeClassToGrayscale() }, 2000)
}

const changeClassToGrayscale = () => {
  const changeDivClass = document.querySelector(`img`)
  changeDivClass.classList.add("image")
}