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
        } else {
                square.classList.add("hovered-square");
            }
        }
    }
}

let rainbowMode = false;

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
}

let btn3 = document.querySelector(".shade-btn")
btn3.onclick = (e) => {
    
}

createGrid(256);