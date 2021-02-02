let form = document.getElementById('user-input')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  let numberInput = form['number-input'].value
  console.log(numberInput)
  const colorArray = []
  for(let i = 0; i <= 5; i++) {
    colorArray.push(Math.floor(Math.random() * numberInput))
  }
  const color = colorArray.join('')
  console.log(color)
  let i = numberInput * 2000
  let j = 1
  document.body.style.background = `#${color}`
  const timer = setInterval(function () {
    const newDiv = document.createElement("div")
    newDiv.classList.add("ball")
    newDiv.id = `ball${j}`
    newDiv.style.top = `${j*175}px`
    newDiv.style.left = `${j*175}px`
    newDiv.style.zIndex = `${j}`
    const currentDiv = document.querySelector(`#ball${j-1}`)
    j++
    document.body.insertBefore(newDiv, currentDiv)
    const k = Math.floor(Math.random() * j)
    newDiv.style.animation = `ballmovement 3s linear alternate 10 forwards`
  }, 2000)
  setTimeout(function( ) { clearInterval( timer ) }, i)
})