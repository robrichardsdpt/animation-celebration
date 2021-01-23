document.body.onload = function() {
  let i = 1
  const timer = setInterval(function () {
    const newDiv = document.createElement("div")
    newDiv.classList.add("ball")
    newDiv.style.top = `${i*125}px`
    const currentDiv = document.querySelector(".ball")
    i++
    document.body.insertBefore(newDiv, currentDiv)
  }, 2000)
  setTimeout(function( ) { clearInterval( timer ); }, 10000)
}