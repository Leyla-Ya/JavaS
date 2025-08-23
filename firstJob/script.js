// Задание 1
const number = Number(prompt('Введи число'));

if (number < 0) {
    console.log('Число является отрицательным!');
} else if (number > 0) {
    console.log('Число является положительным!');
} else {
    console.log('Число является нулем!');
} 


// Задание 2
let w = Number(prompt('Ведите свой вес, кг'));
let h = Number(prompt('Введите свой рост, м'));

const BMI = w / (h * h);
let category;

switch (true) {

   case (BMI <= 16):
     category = "Выраженный дефицит массы тела";
     break;

   case (BMI >= 16 && BMI <= 18.5):
     category = "Недостаточная масса тела";
     break;

   case (BMI >= 18.5 && BMI <= 24.99):
     category = "Норма";
     break;

   case (BMI >= 25 && BMI <= 30):
     category = "Избыточная масса тела";
     break;

   case (BMI >= 30 && BMI <= 35):
     category = "Ожирение первой степени";
     break;

   case (BMI >= 35 && BMI <= 40):
     category = "Ожирение второй степени";
     break;  

   case (BMI >= 40):
     category = "Ожирение третьей степени";
     break;
}

console.log(category);


// Задание 3
const month = Number(prompt('Введи любое число от 1 до 12'));
let monthName;

switch (true) {

  case (month === 1):
    monthName = 'Январь';
    break;

  case (month === 2):
    monthName = 'Февраль';
    break;
    
  case (month === 3):
    monthName = 'Март';
    break;

  case (month === 4):
    monthName = 'Апрель';
    break;

  case (month === 5):
    monthName = 'Май';
    break;
    
  case (month === 6):
    monthName = 'Июнь';
    break;

  case (month === 7):
    monthName = 'Июль';
    break;

  case (month === 8):
    monthName = 'Август';
    break;

  case (month === 9):
    monthName = 'Сентябрь';
    break;

  case (month === 10):
    monthName = 'Октябрь';
    break;

  case (month === 11):
    monthName = 'Ноябрь';
    break;

  case (month === 12):
    monthName = 'Декабрь';
    break;
}

console.log(monthName);


// Задание 4
const mood = prompt("Опишите ваше настроение эмодзи (😊, 😢, 😡, 🎉, 😴):");

let description;
let advice;

switch (mood) {

    case "😊":
        description = "Отличное настроение!";
        advice = "Поделитесь хорошим настроением с другими!";
        break;
        
    case "😢":
        description = "Грустное настроение";
        advice = "Включите любимую музыку или позвоните другу";
        break;
        
    case "😡":
        description = "Злое настроение";
        advice = "Сделайте глубокий вдох и посчитайте до 10";
        break;
        
    case "🎉":
        description = "Праздничное настроение!";
        advice = "Танцуйте и celebrate!";
        break;
        
    case "😴":
        description = "Сонное настроение";
        advice = "Выпейте кофе или вздремните 20 минут";
        break;
        
    default:
        description = "Неизвестное настроение";
        advice = "Попробуйте использовать предложенные эмодзи";
}

alert(`
Ваше настроение: ${mood}
${description}
Совет: ${advice}
`);
