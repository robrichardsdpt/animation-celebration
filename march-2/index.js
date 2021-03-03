const lighten = document.querySelector('.toggle')

let toggleLight = false

const handleClick = () => {
  console.log(toggleLight)
  toggleLight = !toggleLight
  if(toggleLight) {
    document.querySelector('.container').style.background = 'lightsteelblue'
    lighten.innerHTML = 'Get Dark!'
  }  
  if(!toggleLight) {
    document.querySelector('.container').style.background = 'black'
    lighten.innerHTML = 'Lighten Up!'
  }
}




lighten.addEventListener("click", () => handleClick())

