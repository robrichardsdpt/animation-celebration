const lighten = document.querySelector('.toggle')

let toggleLight = false

const handleClick = () => {
  console.log(toggleLight)
  toggleLight = !toggleLight
  if(toggleLight) {
    document.querySelector('.container').style.background = 'lightsteelblue'
    document.querySelector('#circle1').style.background = 'darkred'
    document.querySelector('#circle2').style.background = 'navy'
    document.querySelector('#circle3').style.background = 'black'
    lighten.innerHTML = 'Get Dark!'
  }  
  if(!toggleLight) {
    document.querySelector('.container').style.background = 'black'
    document.querySelector('#circle1').style.background = 'blanchedalmond'
    document.querySelector('#circle2').style.background = 'burlywood'
    document.querySelector('#circle3').style.background = 'darkgoldenrod'
    lighten.innerHTML = 'Lighten Up!'
  }
}




lighten.addEventListener("click", () => handleClick())

