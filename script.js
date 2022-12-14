const board = document.querySelector('.board');
const input = document.querySelector('.size');

createGrid(16);

input.addEventListener('click', () => {
    let userInput = 0; 
    // ensures userInput is between 1 and 100
    while (userInput < 1 || userInput > 100) userInput = prompt("Enter grid size (1-100)");
    //removes all the squares from the previous grid
    while (board.firstChild) board.removeChild(board.firstChild); 
    createGrid(userInput);
})

function createGrid(userInput) {
for (let rows = 0; rows < userInput; rows++) 
    {
    const row = document.createElement('div');
    board.append(row);

    for (let column = 0; column < userInput; column++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('square');
        row.appendChild(newDiv); 
        newDiv.addEventListener("mousedown", darkenSquare);    
        newDiv.addEventListener("mouseover", mouseMove);
        }     
    }
}

//If mouse button is held down while moving over grid, it darkens the square
function mouseMove(e) {
    if (e.buttons == 1) darkenSquare(e);
}
//sets background to black
function darkenSquare(e){
    e.target.setAttribute('style', 'background: black;'); 
}