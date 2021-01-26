document.body.onload = function() {
  let i = 1
  const timer = setInterval(function () {
    const newDiv = document.createElement("div")
    newDiv.classList.add("ball")
    newDiv.id = `${i}`
    newDiv.style.top = `${i*175}px`
    newDiv.style.left = `${i*175}px`
    newDiv.style.zIndex = `${i}`
    const currentDiv = document.querySelector(".ball")
    i++
    document.body.insertBefore(newDiv, currentDiv)
  }, 2000)
  setTimeout(function( ) { clearInterval( timer ) }, 10000)
  setTimeout(function() { changeClass() }, 10000)
}

const changeClass = () => {
  let i = 0
  const timer = setInterval(function () {
    const changeDivClass = document.getElementById(`${i}`)
    changeDivClass.classList.remove("ball")
    changeDivClass.classList.add("ball2")
    i++
  }, 2000)
  setTimeout(function( ) { clearInterval( timer ) }, 12000)
  setTimeout(function() { changeClassTo3() }, 12000)
}

const changeClassTo3 = () => {
  let i = 0
  const timer = setInterval(function () {
    const changeDivClass = document.getElementById(`${i}`)
    changeDivClass.classList.remove("ball2")
    changeDivClass.classList.add("ball3")
    i++
  }, 2000)
  setTimeout(function( ) { clearInterval( timer ) }, 12000)
  setTimeout(function() { changeClassTo1() }, 12000)
}

const changeClassTo1 = () => {
  let i = 0
  const timer = setInterval(function () {
    const changeDivClass = document.getElementById(`${i}`)
    changeDivClass.classList.remove("ball3")
    changeDivClass.classList.add("ball")
    i++
  }, 2000)
  setTimeout(function( ) { clearInterval( timer ) }, 12000)
}

