const grid = document.querySelector(".grid");
grid.addEventListener("mouseover", (event) => {
    event.target;
})

function drawSquares (width, height) {
    for (let i = 1; i <= height; i++) {
        
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
    
        for (let i = 1; i <= width; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            gridRow.appendChild(square);
        }
    
        grid.appendChild(gridRow);
    }   
}

drawSquares(16, 16);