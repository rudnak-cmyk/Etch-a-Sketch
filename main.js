const DEFAULT_SIZE = 16;
const Body = document.querySelector('body');
let field;

let size = DEFAULT_SIZE;

let isMouseDown = false;

function handleCellClick() {
  if (!isMouseDown) {
    this.classList.add('clickedItem');
  }
}

function handleMouseDown() {
  isMouseDown = true;
}

function handleMouseUp() {
  isMouseDown = false;
}

function generateField(size){
    if (field)
        Body.removeChild(field);

    field = document.createElement('div');
    field.id = 'field';
    field.style.gridTemplateColumns = `repeat(${size}, 2em)`
    field.style.gridTemplateRows = `repeat(${size}, 2em)`
    field.style.width = `calc(${size}*2em)`;
    field.style.height = `calc(${size}*2em)`;

    field.addEventListener('mousedown', handleMouseDown);
    field.addEventListener('mouseup', handleMouseUp);

    for (let i = 0; i < size * size; ++i) {
    const fieldItem = document.createElement('div');
    fieldItem.classList = 'fieldItem';
    fieldItem.addEventListener('click', handleCellClick);
    fieldItem.addEventListener('mouseover', function(e) {
      if (isMouseDown) {
        e.target.classList.add('clickedItem');
      }
    });
    field.appendChild(fieldItem);
  }
    Body.appendChild(field);
}

const sizeButton = document.querySelector('#buttons #selectSize');

sizeButton.addEventListener('click', function(){
    let newSize;
    do {
        newSize = prompt("Enter new size for the drawing field: ");
        newSize = parseInt(newSize);
    } while (isNaN(newSize) || newSize <= 0 || newSize > 100);

    size = newSize;
    generateField(size);
});



generateField(size);