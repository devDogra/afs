const socket = io(); 

const board = document.getElementById("board"); 
const isClicked = Array(9).fill(false); 

socket.on("serverRecievedMove", data => {
    const { move, sqIdx } = data; 
    // const square = board.querySelector(`[data-idx=${sqIdx}]`)
    const squares = Array.from(document.querySelectorAll(".square"))
    // console.log(data, square); 
    squares[parseInt(sqIdx)].innerText = move;  
})

function createBoard() {
    for (let i = 0; i < 9; i++) {
        const sq = document.createElement("div"); 
        sq.classList.add("square"); 
        sq.setAttribute("data-idx", i)
        board.appendChild(sq);
    }
}
createBoard();

let flag = true; 

board.addEventListener("click", e => {
    const clicked = e.target; 
    if (!clicked.classList.contains("square")) return; 

    const sqIdx = clicked.getAttribute("data-idx")    
    if (isClicked[sqIdx]) return; 

    isClicked[sqIdx] = true; 
    clicked.innerText = flag ? "X" : "O"; 
    flag = !flag;

    // Event Emit
    socket.emit("playerMoved", { move: clicked.innerText, sqIdx})


})