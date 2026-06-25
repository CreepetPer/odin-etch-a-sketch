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
        square.classList.add("hovered-square");
        }
    }
}

const btn = document.querySelector("button");
btn.onclick = (e) => {
    let promptSize = prompt("Grid size? (eg. 16 for 16x16)", "16");
    if (promptSize > 100) {
        alert("That's too large... (limit = 100)");
        } else {
        let promptArea = promptSize ** 2;
        container.innerHTML = ""
        createGrid(promptArea);
    }
}

createGrid(256);