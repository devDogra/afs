const board = document.querySelector("#board"); 
const clickedSqs = []


function createBoard(n) {
    board.style.display = "grid";
    board.style.gridTemplateColumns = `repeat(${n}, 1fr)`
    board.style.gridTemplateRows = `repeat(${n}, 1fr)`
    
    for (let i = 0; i < n*n; i++) {
        const div = document.createElement("div"); 
        div.classList.add("square"); 
        div.setAttribute("data-idx", i)
        board.appendChild(div); 

        clickedSqs.push(false); 
    }
}

// 1. listen for clicks anywhere on the document
// 2. check if a square was clicked
// 3. fill square with O or X

let flag = true;
board.onclick = function(e) {
    // Check if a square was clicked
    const clicked = e.target; 
    if (!clicked.matches(".square")) return; 

    const idx = clicked.getAttribute("data-idx"); 
    if (clickedSqs[idx]) return; 

    clickedSqs[idx] = true; 
    clicked.innerText = flag ? "X" : "O"; 
    flag = !flag; 
}

createBoard(3);