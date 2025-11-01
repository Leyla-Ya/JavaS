const paragraph = document.getElementById('text');
console.log(paragraph.textContent);

const paragraphChange = document.querySelector('p');
paragraphChange.textContent = '1. Найди элемент на странице по его ID и измени его текстовое содержимое на что-то новое;';
console.log(paragraphChange.textContent);

const change = document.getElementsByClassName('changes');
for (let changes of change) {

  changes.style.color = 'yellow';
  changes.style.background = 'grey';

}

const container = document.getElementById('container');
container.innerHTML = '<p>3. Напиши код, который создает новый параграф с текстом и добавляет его в конец документа;</p>';

const elementToRemove = document.getElementById('text');
elementToRemove.parentNode.removeChild(elementToRemove);

const link = document.querySelector('a');
link.setAttribute('href', 'https://technium.ru/');
console.log(link.getAttribute('href'));

const newElement = document.createElement('div');
newElement.textContent = '6. Создай новый элемент, добавь к нему класс и добавь его в DOM;';
document.body.appendChild(newElement);

newElement.classList.add('created');

newElement.classList.toggle('element');
console.log(newElement);