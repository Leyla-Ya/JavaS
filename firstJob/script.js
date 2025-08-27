// 1. Напиши программу, которая использует цикл for, чтобы вывести числа от 1 до 10;

console.log('Вывод чисел от 1 до 10: ');

for (let i = 1; i <= 10; i++) {
    console.log(i);
} 

// 2. Напиши программу, которая использует цикл while, чтобы посчитать сумму чисел от 1 до 100;

let sum = 0;
let i = 1;

while (i <= 100) {
  sum += i;
  i++;
}

console.log('Сумма чисел: ' + sum);

// 3. Выведи в консоль все простые числа от 0 до 100.

console.log('Простые числа: ');

for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        console.log(num);
    }
}
