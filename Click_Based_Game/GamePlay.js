alert("Starting Game...\nClick on Randomly appearing circles to earn points as follows\nRed = -2\nViolet = -1\nGreen = 3\nYellow = 2\nBlue = 1\nClick Ok to Continue...........");

const randomBox = document.getElementById('RandomBox');
const PlayArea = document.getElementById('PlayArea');

let difficulty;
let duration;
let shape;

const params = new URLSearchParams(window.location.search);
for (const param of params) {
    if (param[0] === "difficulty") {
        difficulty = param[1];
    }
    else if (param[0] === "duration") {
        duration = param[1];
    }
    else if (param[0] === "shape") {
        shape = param[1];
    }
};

if(difficulty === "easy") {
    PlayArea.style.width = "600px";
    PlayArea.style.height = "480px";
}
else if(difficulty === "medium") {
    PlayArea.style.width = "800px";
    PlayArea.style.height = "600px";
}
else if(difficulty === "hard") {
    PlayArea.style.width = "1024px";
    PlayArea.style.height = "768px";
}

if(shape === "circle") {
    randomBox.style.borderRadius = "50%";
}

var totalEarnedPoints = 0;
var points = 0;
document.getElementById("DisplayScore").innerText = totalEarnedPoints;

randomBox.addEventListener('click', () => {
    totalEarnedPoints += points;
});

const displayBox = (randomBox) => {
    const colors = ["red", "violet", "green", "yellow", "blue"];
    const selectedColor = colors[Math.floor(Math.random() * colors.length)];
    randomBox.style.background = `${selectedColor}`;

    if (selectedColor === "red") {
        points = -2;
        randomBox.style.width = "20px";
        randomBox.style.height = "20px";
    }
    else if (selectedColor === "violet") {
        points = -1;
        randomBox.style.width = "18px";
        randomBox.style.height = "18px";
    }
    else if (selectedColor === "green") {
        points = 3;
        randomBox.style.width = "14px";
        randomBox.style.height = "14px";
    }
    else if (selectedColor === "yellow") {
        points = 2;
        randomBox.style.width = "16px";
        randomBox.style.height = "16px";
    }
    else if (selectedColor === "blue") {
        points = 1;
        randomBox.style.width = "18px";
        randomBox.style.height = "18px";
    }
    randomBox.style.left = `${Math.floor(Math.random() * (96) + 1)}%`;
    randomBox.style.top = `${Math.floor(Math.random() * (96) + 1)}%`;
};

const gameOver = () => {
    document.getElementById("DisplayScore").innerText = totalEarnedPoints;
    alert(`Game Over!!! \nYour Score = ${totalEarnedPoints}\nClick Ok to restart the Game`);
    window.location.reload();
    location.href = "index.html";
};

setInterval(() => {
    document.getElementById("DisplayScore").innerText = totalEarnedPoints;
    displayBox(randomBox);
}, 1000);

setTimeout(gameOver, duration * 1000);