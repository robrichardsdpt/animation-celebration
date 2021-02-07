let form = document.getElementById('user-input')

let count = 0

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const rbs = document.querySelectorAll('input[name="animation"]')
  let selectedValue
  for (const rb of rbs) {
      if (rb.checked) {
        selectedValue = rb.value;
        const newDiv = document.createElement("div")
        newDiv.classList.add("ball")
        newDiv.classList.add(`ball${count}`)
        newDiv.classList.add(`${selectedValue}`)
        const currentDiv = document.querySelector(`.ball${count-1}`)
        document.body.insertBefore(newDiv, currentDiv)
        count++
      }
  }
})