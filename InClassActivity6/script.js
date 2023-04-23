let clicks = 0;
let level = 1;
let timeout = 500;
let gameEnded = false;

function moveButton() {
    if (gameEnded) {
        return;
    }

const button = document.getElementById("button");
const x = Math.random() * (window.innerWidth - button.clientWidth);
const y = Math.random() * (window.innerHeight - button.clientHeight);
button.style.marginTop = y + "px";
button.style.marginLeft = x + "px";

setTimeout(moveButton, timeout);
}

function handleButtonClick() {
clicks++;
if (clicks >= 3) {
    level++;
    clicks = 0;
    timeout -= 100;
    if (level > 6) {
        gameEnded = true;
        alert("Congratulations, you have won the game.");
        return;
    }
          alert("Congratulations, you have reached level " + level);
}
}

document.getElementById("button").addEventListener("click", handleButtonClick);
setTimeout(moveButton, timeout);