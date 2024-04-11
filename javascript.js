const GRIDSIZE = 960;

const grid = document.querySelector(".grid");
grid.addEventListener("mouseover", (event) => {
    const target = event.target;
    target.style.opacity = 0.2;
})

const button = document.querySelector("button");
button.addEventListener("click", () => {
    const squaresPerSide = prompt("Input # of squares per side (max 100)");
    emptyGrid(document.querySelectorAll(".gridRow"));
    drawSquares(squaresPerSide);
})

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