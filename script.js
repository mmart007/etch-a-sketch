const container = document.querySelector('#container');
let gridSize = Number(prompt('Enter a grid size between 1 and 100'));

while (Number(gridSize) < 1 || Number(gridSize) > 100 || !Number.isInteger(gridSize)) {
    gridSize = Number(prompt('Please try again with an integer between 1 and 100'));
} 


sizeElementsEvenly();
window.addEventListener('resize', () => sizeElementsEvenly());

function sizeElementsEvenly() {
 container.replaceChildren();
 let dim = 100/gridSize;

for (let i = 1; i <= gridSize**2; i++){
    const grid = document.createElement('div');
    grid.style.width = `${dim}vw`;
    grid.style.height =`${dim}vh`;
    grid.className = 'squares'
    container.appendChild(grid);
}
const squaresArr = document.querySelectorAll('.squares');
console.log(squaresArr.length);

squaresArr.forEach((square) => {
  square.addEventListener('mouseenter', (event) => {
    event.currentTarget.style.backgroundColor = 
    `rgb(${Math.floor(Math.random()*257)}, 
    ${Math.floor(Math.random()*257)},
    ${Math.floor(Math.random()*257)})`;
  });
  square.addEventListener('mouseleave', (event) => {
    event.currentTarget.style.backgroundColor='white';
  });
});
}


