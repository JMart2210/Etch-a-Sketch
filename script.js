const board = document.querySelector('.board');
const input = document.querySelector('.size');

input.addEventListener('change', () => {
    const userInput = input.value;
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

//checks if 
function mouseMove(e) {
    if (e.buttons == 1) darkenSquare(e);
}
//sets background to black
function darkenSquare(e){
    e.target.setAttribute('style', 'background: black;'); 
}