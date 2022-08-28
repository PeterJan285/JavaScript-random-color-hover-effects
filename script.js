const container = document.getElementById('JS-container')
const colors = ['#c9b1bd', '#34f6f2', '#35A7FF', '#F6AE2D', '#F26419', '#721817', '#FA9F42', '#16F4D0', '#0B6E4F', '#99C24D',]
const SQUARES = 754

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = `#1d1d1d`
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}