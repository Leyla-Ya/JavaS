// 1:

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(5, 9, 3, 11, 23));


// 2:

const { name, age, country, ...rest } = { 
  name: 'Leyla', 
  surname: 'Yakubova', 
  age: 32, 
  country: 'Russia',
  job: 'unemployed', 
  hobby: 'sew'
  };

console.log(name, age, country); 
console.log(rest);


// 3:

const person = {
  nameUser: 'Ivan',
  year: 2002,
  address: {
    city: 'Moscow',
    street: 'University'
  },
  work: {
    firstJob: 'manager',
    secondJob: 'barista'
  }
};
const { nameUser, year, address: { city, street }, 
  work: { firstJob, secondJob} } = person;

console.log(nameUser, city, secondJob);


// 4:

const fruits = ['apple', 'oring', 'banana'];
const copiedFruits = [...fruits];

copiedFruits.unshift('watermelon');
copiedFruits.push('cherry');

console.log(copiedFruits);


// 5:

function removeProperty(obj, propertyToRemove) {
  const { [propertyToRemove]: removedProperty, ...rest } = obj;
  return rest;
}

const user = {
  name: "Алекс",
  age: 20,
  city: "Москва",
  email: "alex@example.com"
};

const userAge = removeProperty(user, 'age');
console.log(userAge);

