const colors = [
    "rgb(242, 143, 130)",
    "rgb(80, 153, 142)",
    "rgb(227, 199, 175)",
    "rgb(139, 100, 133)",
    "rgb(145, 170, 200)",
    "rgb(108, 122, 98)"
];

const colorBox = document.getElementById("colorBox");
const btnCard = document.getElementById('btnCard');
const scoreTrack = document.getElementById('scoreTrack');
const reset = document.getElementById('reset');
let score = 0;
let randColor;

const colorChange = () => {
    randColor = Math.floor(Math.random() * 6);
    colorBox.style.backgroundColor = colors[randColor];
    colorBox.classList.remove("correct");
};

const updateUI = () => {
    colorChange();
    scoreTrack.innerText = `Correct! Score: ${score}`;
};

reset.onclick = () => {
    const userConfirmed = confirm("Are you sure you want to restart?");
    if (userConfirmed) {
        colorChange();
        score = 0;
        scoreTrack.innerText = `Score: ${score}`;
    }
};

const choice = (index) => {
    if (index === randColor) {
        score++;
        updateUI();
        colorBox.classList.add("correct");
    } else {
        scoreTrack.innerText = 'Try Again!!';
    }
};

colors.forEach((_, index) => {
    const button = document.createElement('button');
    button.className = 'selectors';
    button.style.backgroundColor = colors[index];
    button.setAttribute('data-testid', 'colorOption');
    button.onclick = () => { choice(index) };
    btnCard.appendChild(button);
});

scoreTrack.innerText = `Score: ${score}`;
colorChange();
