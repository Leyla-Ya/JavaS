const aboutMe = {
  name: 'Лейла',
  age: 33,
  hobby: ['Велопрогулки', 'Художественные книги', 'Прокрастинация']
}

console.log(aboutMe.name, aboutMe.age);
console.log(aboutMe['hobby']);

aboutMe.address = 'Махачкала, ул. 26';
console.log(aboutMe['address']);

aboutMe['hobby'] = ['Прогулки', 'Художественные книги', 'Финансы'];
console.log(aboutMe.hobby);

delete aboutMe.age;
console.log(aboutMe['age']);
console.log(aboutMe.age);

console.log(aboutMe.name, aboutMe.address);
console.log(aboutMe['hobby']);
