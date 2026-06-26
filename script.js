function getRandomInt(max) { // random integer generator
    return Math.floor(Math.random() * max)
}

const container = document.querySelector(".container")

function createGrid(size) {
    for (let i = 1; i <= size; i++) {
    const square = document.createElement("div");
    square.classList.add("square")
    let sizePerRow = size ** 0.5;
    let squareSize = 500 / sizePerRow;
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
    square.onmouseenter = (e) => {
    if (rainbowMode === true) {
        square.style.backgroundColor = `rgb(${getRandomInt(255)} ${getRandomInt(255)} ${getRandomInt(255)})`;
        square.style.opacity = 1;
    } else if (shadeMode === true) {
        let currentOpacity = parseFloat(square.style.opacity);
        
        if (isNaN(currentOpacity)) {
            currentOpacity = 1;
        }
        
        if (currentOpacity > 0) {
            square.style.opacity = (currentOpacity - 0.1).toFixed(1);
        }
    } else {
        square.style.backgroundColor = "red";
        square.style.opacity = 1;
    }
}
    }
}

let rainbowMode = false;
let shadeMode = false;

let btn1 = document.querySelector(".new-btn");
btn1.onclick = (e) => {
    let promptSize = prompt("Grid size? (eg. 16 for 16x16)", "16");
    if (promptSize > 100) {
        alert("That's too large... (limit = 100)");
        } else {
        let promptArea = promptSize ** 2;
        container.innerHTML = ""
        createGrid(promptArea);
    }
}

let btn2 = document.querySelector(".rgb-btn")
btn2.onclick = (e) => {
    rainbowMode = !rainbowMode;
    if (rainbowMode) shadeMode = false;
}

let btn3 = document.querySelector(".shade-btn")
btn3.onclick = (e) => {
    shadeMode = !shadeMode;
    if (shadeMode) rainbowMode = false;
}

createGrid(256);