const generateRandomColor = () => {
  let maxVal = 0xFFFFFF
  let randomNumber = Math.random() * maxVal
  randomNumber = Math.floor(randomNumber)
  randomNumber = randomNumber.toString(16)
  let randColor = randomNumber.padStart(6, 0)
  return `#${randColor.toUpperCase()}`
}

const generateRectangles = () => {
  for (let i = 1; i <= 25; i++) {
    const div = document.createElement("div")
    div.classList.add('test')
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.background = generateRandomColor()

    document.getElementById('main').appendChild(div)
  }
}

const generateBlocksInterval = () => {
  const div = document.getElementsByClassName('test')

  setInterval(() => {
    [...div].map((item) => {
      item.style.background = generateRandomColor()
    })
  }, 1000)
}