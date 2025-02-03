const colors =     [
    "rgb(242, 143, 130)",
    "rgb(80, 153, 142)",
    "rgb(227, 199, 175)",
    "rgb(139, 100, 133)",
    "rgb(145, 170, 200)",
    "rgb(108, 122, 98)"
]
const colorBox = document.getElementById("colorBox")
const btnCard = document.getElementById('btnCard')
const scoreTrack = document.getElementById('scoreTrack')
const reset = document.getElementById('reset')
let score = 0
let randColor

const colorChange = () => {
    randColor = Math.floor(Math.random() * 6)
    colorBox.style.backgroundColor = colors[randColor]
}
const updateUI = () => {
    colorChange()
    scoreTrack.innerText = `Correct! Score: ${score}`
}
reset.onclick = () => {
    colorChange()
    score = 0
    scoreTrack.innerText = `Score: ${score}`
}
const choice = (inde) => {
    if (inde === randColor){
    score++
    updateUI()
} else {
    scoreTrack.innerText = 'Incorrect! Try Again!!'
}
}

colors.forEach((_, index) => {
    const cell = document.createElement('div');
    cell.className = 'cell';

    const button = document.createElement('button');
    button.className = 'selectors';
    button.innerText = '';
    button.style.backgroundColor = colors[index]
    button.onclick = () => { choice(index) }

    cell.appendChild(button);
    btnCard.appendChild(cell);
})
colorChange()