const GRIDSIZE = 960;

const grid = document.querySelector(".grid");
grid.addEventListener("mouseover", (event) => {
    const target = event.target;
    target.style.backgroundColor = getRandomColor();
    target.style.opacity = +target.style.opacity + 0.1;
})

const button = document.querySelector("button");
button.addEventListener("click", () => {
    getUserSelection(prompt("Input # of squares per side (max 100)"));
})

function getUserSelection(userSelection) {
    if (userSelection <= 100) {
        emptyGrid(document.querySelectorAll(".gridRow"));
        drawSquares(userSelection);
    } else {
        getUserSelection(prompt("Invalid selection. Please enter # of squares per side (max 100)"));
    }
}

function getRandomColor() {
    let hexcode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
        randomColor += hexcode[Math.floor(Math.random() * hexcode.length)];
    }
    return randomColor;
}

function emptyGrid (gridRows) {
    for (let i = 0; i < gridRows.length; i++){
        grid.removeChild(gridRows[i]);
    } 
}

function drawSquares (squaresPerSide) {
    for (let i = 1; i <= squaresPerSide; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
    
        for (let i = 1; i <= squaresPerSide; i++) {
            const square = document.createElement("div");
            const squareSize = (GRIDSIZE / squaresPerSide) + "px";
    
            square.classList.add("square");
            square.style.cssText = `width: ${squareSize}; height: ${squareSize};`;
            gridRow.appendChild(square);
        }
    
        grid.appendChild(gridRow);
    }   
}

drawSquares(16);