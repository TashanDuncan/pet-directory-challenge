/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/
const pets = [
{ name:'Liam',
  type:'dog',
  breed:'aussie',
  age:'28',
  photo: 'img/aussie.jpg'
},
{ name:'Mekhi',
  type:'dog',
  breed:'dachshund',
  age:'10',
  photo: 'img/dachshund.jpg'
},
{ name:'Will',
  type:'dog',
  breed:'golden',
  age:'28',
  photo: 'img/golden.jpg'
},
{ name:'Kamal',
  type:'cat',
  breed:'persian',
  age:'20',
  photo: 'img/persian.jpg'
},
{ name:'Tashan',
  type:'dog',
  breed:'pug',
  age:'26',
  photo: 'img/pug.jpg'
},
{ name:'Angela',
  type:'cat',
  breed:'tabby',
  age:'54',
  photo: 'img/tabby.jpg'
}
]

for (let i = 0; i < pets.length; i++){
  document.querySelector('main').innerHTML += `
  <h2>${pets[i].name}</h2>
  <h3>${pets[i].type} | ${pets[i].breed}</h3>
  <p>Age: ${pets[i].age}</p>
  <img src="${pets[i].photo}" alt="${pets[i].breed}">
  ` 
}