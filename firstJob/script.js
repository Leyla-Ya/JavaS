// Задание 1:
 function palindrome(text) {
  return text === text.split('').reverse().join('');
 }

 console.log(palindrome('топот'));
 console.log(palindrome('питон'));
 console.log(palindrome('мадам'));

 // Задание 2:
 function findShortestWord(proposal) {
    let words = proposal.split(' ');
    let shortestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }
    return shortestWord;
 }

 console.log(findShortestWord('утром рано по грибы'));
 console.log(findShortestWord('Я изучаю программирование'));
 console.log(findShortestWord('много дел вечером'));

 // Задание 3:
function PhoneNumber(phoneString) {
    let str = phoneString.toString();
    
    let part1 = str.substring(0, 3);
    let part2 = str.substring(3, 6);
    let part3 = str.substring(6);
    
    let formattedNumber = `8 (${part1}) ${part2}-${part3}`;
    return formattedNumber;
}

console.log(PhoneNumber("1234567890"));
console.log(PhoneNumber(1234567890));
console.log(PhoneNumber("9876543210"));

// Задание 4:
function findMinMax(numbers) {
 
    let min = numbers[0];
    let max = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }

        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return { 
        minimum: min, 
        maximum: max 
    };
}

console.log(findMinMax([5]));
console.log(findMinMax([4, 7, 2, 9, 8]));

// Задание 5:

// Простой вариант:
function sorting(values) {
    return values.sort();
}
let sortingWords = ['ход', 'кино', 'алгоритм', 'луна', 'перемена']
console.log(sorting(sortingWords));

let sortingNum = [3, 7, 5, 1, 0]
console.log(sorting(sortingNum)); // этот способ не правильно сортирует двузначные числа.

// универсальный метод сортировки:
function bubbleSort(array) {  

    for (let i = 0; i < array.length; i++) {  
        for (let j = 0; j < array.length - i - 1; j++) {  
            if (array[j] > array[j + 1]) {  
                let temp = array[j];  
                array[j] = array[j + 1];  
                array[j + 1] = temp;  
            }  
        }  
    }  
     return array;  
}  
const num = [23, 9, 1, 7, 3, 10]
const arr = ['восход', 'кино', 'асфальт', 'луноход']

console.log(bubbleSort(arr));
console.log(bubbleSort(num));