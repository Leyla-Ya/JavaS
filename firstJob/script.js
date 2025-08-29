// Задание 1:

const str = "JavaScript is fun!";

console.log(str.includes("fun"));


// Задание 5:

const result = 1 + '1';

console.log(result); // 11 - JavaScript автоматически преобразует типы данных 
// (там, где это получается). 
// В нашем случае число преобразовано в строку, 
// так как один из операндов - строка и использовали оператор "+". 


// Задание 4:

console.log(null == undefined); // Как я поняла это: при не строгом сравнении
// сравниваются только значения, т.е null - пустое значение, так и undefined - "пустота",
// поэтому они считаются равными друг другу и вывод true.
console.log(null === undefined); // При строгом же сравнении сравнивается больше данных, 
// начиная от определения типа: тип null - это Null (Object), тип undefined - это Undefined.
// Типы разные - false.


// Задание 3:

const firstName = "John";
const lastName = "Doe";
const occupation = "software developer";
const message = `Hello, my name is ${firstName} ${lastName}. I am a ${occupation}.`;

console.log(message);

// Задание 2:

let name = null;

if (name === null) {
    console.log("Пользователь не найден.");
} else {
    console.log("Добавьте больше данных.")
} // Не знаю, правильно ли я поняла задачу, но тут вроде как переменная имеет
// одно из false значений, и условие написала так, что сразу выполнится.