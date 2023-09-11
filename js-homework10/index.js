const playA = () => {
  const audio = document.getElementById('audioA')
  audio.play()
}

const playB = () => {
  const audio = document.getElementById('audioB')
  audio.play()
}

const playC = () => {
  const audio = document.getElementById('audioC')
  audio.play()
}

const playD = () => {
  const audio = document.getElementById('audioD')
  audio.play()
}

const playE = () => {
  const audio = document.getElementById('audioE')
  audio.play()
}

document.addEventListener("keypress", function(event) {
  if (event.keyCode === 97) {
    const audio = document.getElementById('audioA')
    audio.play()
  }

  if (event.keyCode === 98) {
    const audio = document.getElementById('audioB')
    audio.play()
  }

  if (event.keyCode === 99) {
    const audio = document.getElementById('audioC')
    audio.play()
  }

  if (event.keyCode === 100) {
    const audio = document.getElementById('audioD')
    audio.play()
  }

  if (event.keyCode === 101) {
    const audio = document.getElementById('audioE')
    audio.play()
  }
  console.log(event.keyCode)
})
