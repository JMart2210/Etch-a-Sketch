const board = document.querySelector('.board');

const input = document.querySelector('.size');

input.addEventListener('change', () => {
    const userInput = input.value;
    while (board.firstChild) board.removeChild(board.firstChild); //removes all the squares from the grid
    createGrid(userInput);
})

function createGrid(userInput) {
for (let rows = 0; rows < userInput; rows++) 
{
    const row = document.createElement('div');
    board.append(row);

    for (let column = 0; column < userInput; column++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);        
    }
}
}