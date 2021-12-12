let draggables = document.querySelectorAll('.draggable');
let listItems = document.querySelectorAll('.list-item');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
   draggable.classList.add('dragging');
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  })
})

listItems.forEach(item => {
  item.addEventListener('dragover', e => {
    e.preventDefault();
    let draggable = document.querySelector('.dragging');
    item.appendChild(draggable);
  })
})