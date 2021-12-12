let form = document.querySelector('form');
let ul = document.querySelector('ul');

// let cardsData = JSON.parse(localStorage.getItem('cards'));
let cardsData = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let title = event.target.elements.title.value;
  let category = event.target.elements.category.value;
  cardsData.push({ title, category });
  // localStorage.setItem('cards', JSON.stringify(cardsData));
  createUI(cardsData, ul);
});

function handleEdit(event, info, id) {
  let elm = event.target;
  let input = document.createElement('input');
  
  input.value = info;
  input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
      let updatedValue = e.target.value;
      cardsData[id].category = updatedValue;
      createUI();
    }
  });

  let parent = event.target.parentElement;
  parent.replaceChild(input, elm);
}

function createUI(data = cardsData, root = ul) {
  root.innerHTML = '';
  let fragment = new DocumentFragment();
  data.forEach((cardInfo, index) => {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let p = document.createElement('p');

    span.addEventListener('dblclick', (event) => handleEdit(event, cardInfo.category, index));

    li.classList.add('notice-card');
    span.innerText = cardInfo.category;
    p.innerText = cardInfo.title;
    li.append(span, p);
    fragment.appendChild(li);
  });
  root.append(fragment); 
}

createUI(cardsData, ul);