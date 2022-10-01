let items = ['Big Mac', 'Big Tasty', 'Batata', 'Refrigerante', 'Suco'];
let price = [20, 30, 20, 5, 4];

let mcItems = {
  'Big Mac': 20,
  'Big Tasty': 30,
  'Batata': 20,
  'Refrigerante': 5,
  'Suco': 4,
}

let person = {
  firstName: 'Flavia',
  lastName: 'Pereira',
  favoriteMovies: ['Harry Potter', 'O senhor dos anéis'],
}

// console.log(person);
// console.log(person.firstName); //dot notation
// console.log(person.favoriteMovies[1]); //brackets notation

person.firstName = 'Gilmar';
person.city = 'Curitiba';
person['lastName'] = 'Silva';
person.users = ['user1', 'user2', 'user3'];
person.address = {
  street: 'Rua Dalvo Trombeta',
  number: 123,
  other: 'Fundos'
}

// console.log(person.address.street);

// console.log(typeof(person));
// console.log(typeof(price));

delete person.city;

// console.log(person);

for(let key in person){
  console.log(key + ' : ' + person[key]);
}