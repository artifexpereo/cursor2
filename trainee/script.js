const renderTimer = () => {
    const dateNow = new Date();
    document.body.innerHTML = 
     `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`
}
renderTimer()

const intervalId = setInterval(() => {
    renderTimer()
}, 1000)