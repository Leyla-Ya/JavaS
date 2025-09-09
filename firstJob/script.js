// Задание 1:

const someNumbers = [3, 4, 6, 11];
const square = someNumbers.map(item => item * item);

console.log(square);


// Задание 2:

const array = [1, 2, 2, 3, 4, 5, 5, 5, 6];
const newArray = array.filter((item, index) => array.indexOf(item) === index);

console.log(newArray); // [1, 2, 3, 4, 5, 6]


// Задание 3:

const numbers = [2, 8, 5];
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); 


// Задание 4:

function reverseArray(arr) {
    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

const fruitsArray = ['Груша', 'Банан', 'Арбуз', 'Слива', 'Ананас'];
console.log(fruitsArray);

const reversed = reverseArray(fruitsArray);
console.log(reversed); 


// Задание 5:

let variableLet = 'Гарри Поттер.';
const variableConst = 'Властелин колец.';

variableLet = 'Harry Potter.'; // let - переменная, которую можно менять.
variableConst; // variableConst = ''  - при присваивании нового значения выдает ошибку.
// const - постоянное значение (константа), поэтому перезапись значения недопустима.

console.log(variableLet);
console.log(variableConst); 


let booksName = ['Гарри Поттер', 'Властелин колец', 'Сумерки'];
const filmsName = ['Чужой', 'Обитель зла', 'Джон Уик'];

let booksNew = booksName.splice(2,2, 'Парфюмер', 'Мешок с костями');

console.log(booksName);

let booksNew1 = booksName.forEach((bookName, index) => {
    console.log(`${bookName}: ${index}`)
})

const filmsNew = filmsName.push('Мгла');

console.log(filmsName);
console.log(filmsNew);

const filmsNew1 = filmsName.map(filmName => `${filmName} - ${'Просмотрено'}`);

console.log(filmsNew1);

const films = filmsName.slice(2);

console.log(filmsName);
console.log(films);
// Здесь же const не "ломается", потому что мы не меняем значение,
// а лишь дополняем. так как массив ссылочный тип данных, мы обращаемся к ссылке, 
// где хранятся данные массива и добавляем туда нужные нам данные не перезаписывая 
// массив по новому.