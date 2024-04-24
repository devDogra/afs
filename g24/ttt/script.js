const socket = io();

socket.on("serverRecdMove", data => {
    const { move, sqIdx } = data; 
    const squares = Array.from(document.querySelectorAll(".square"))
    squares[sqIdx].innerText = move; 
    
})

const board = document.querySelector("#board"); 
const isClicked = Array(9).fill(false); 

function createBoard() {
    for (let i = 0; i < 9; i++) {
        const sq = document.createElement("div"); 
        sq.classList.add("square"); 
        sq.setAttribute("data-idx", i)
        board.append(sq); 
    }
}

let flag = true; 

board.addEventListener("click", e => {
    const clickedEl = e.target; 
    if (!clickedEl.classList.contains("square")) return; 
    
    const sqIdx = clickedEl.getAttribute("data-idx"); 
    if (isClicked[sqIdx]) return; 

    clickedEl.innerText = flag ? "X" : "O"; 

    isClicked[sqIdx] = true; 
    flag = !flag;

    socket.emit("playerMoved", { move: clickedEl.innerText, sqIdx })
})

createBoard(); 