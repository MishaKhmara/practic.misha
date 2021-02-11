//---------------------------Таск 1-----------------------//
// const name = 'Генератор защитного поля';
// let price = 1000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`)
// price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`)


//---------------------------Таск 2-----------------------//
// const total = 100;
// const ordered = 50;
// if (total < ordered){
//   console.log("На складе недостаточно твоаров!")
// }else{console.log("Заказ оформлен, с вами свяжется менеджер")}


//---------------------------Таск 3-----------------------//
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message = prompt('Введите пароль');

// if( message === null){
//   alert('Отменено пользователем!')
// }else if(message === ADMIN_PASSWORD){
//   alert('Добро пожаловать!');
// }else {alert('Доступ запрещен, неверный пароль!');}

//---------------------------Таск 4-----------------------//
// Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const lastElementIndex = fruits.length-1;
// const lastElement =fruits[lastElementIndex]

// console.log(lastElementIndex)

// console.log(lastElement)
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,-1);
// const lastThreeEls = fruits.slice(0,-3);

// console.log(lastThreeEls)

// const arr = [
//   'Andrey Shelukhin ',
//   'Dmytro Bazhenov',
//   'Vova Chelidze',
//   'Dmitry Grinchenko',
//   'Stanislav Karasyk',
//   'Maxim Kazachuk',
//   'Ivan Khailo',
//   'Misha Khmara',
//   'Vitaliy Kornienko',
//   'Bogdan Lytvyn',
//   'Dmytro Orgish',
//   'Liudmila Popescu',
//   'Pavel Sakun',
//   'Evgeny Serebrennikov',
//   'Roman Skliarenko',
//   'Kateryna Tashkin',
//   'Maria Trofimova',
//   'Maksym Tuhanov',
//   'Daria Viter',
//   'Mykhailo Yefymovych',
//   'Tetiana Ziatikova',
// ];
// const arr2 = [1, 2, 3, 5, 8];
// const groupList = document.querySelector('.group-list');

// const createList = (ul, arr) => {
//   arr.forEach(element => {
//     let elem = document.createElement('li');
//     ul.append(elem);
//     elem.textContent = element;
//   });
// };
// createList(groupList, arr);

// function calculateTotal(number) {
//   // Пиши код ниже этой строки
// let total ;
// for (let i = 0; i < number.length; i+=1){
// total = number[i];
//   console.log(total)
//   return total
// }
//   // Пиши код выше этой строки
// }
// calculateTotal(3)
// calculateTotal(7)
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const arr = [];
// for (let i=0; i > numbers; i+=1){
//   if( numbers > value){
//   arr.push(numbers)
//   console.log(arr)
//     return arr
//   }
// }


//   // Пиши код выше этой строки
// }

// 
// const book = {
//   title: 'Последнее королевство',
//   author: 'Бернард Корнуэлл',
//   genres: ['историческая проза', 'приключения'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
//  const keys = Object.keys(object)
//   for (const key of keys) {
   
//       propCount += 1;
//     }
//     return propCount;
//   }

 
  // Пиши код выше этой строки

  // function countTotalSalary(salaries) {
  //   let totalSalary = 0;
  //   // Пиши код ниже этой строки
  // let keys = Object.values(salaries)
  // for( const key of keys){
  // totalSalary += key
 
  // }
  
  //   // Пиши код выше этой строки
  //   return totalSalary;
  // }
  // countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
  // const products = [
  //   { name: 'Радар', price: 1300, quantity: 4 },
  //   { name: 'Сканер', price: 2700, quantity: 3 },
  //   { name: 'Дроид', price: 400, quantity: 7 },
  //   { name: 'Захват', price: 1200, quantity: 9 },
  // ];
 
  // function getProductPrice(productName) {
  //   // Пиши код ниже этой строки
  //   for (const product of products){
  //    console.log(product)
  //    if(product.name === productName){
  //     console.log(product.price)
  //     return product.price
  //    }

  //   }
  //   return null
  //   }
    
    
  //   // Пиши код выше этой строки
  
  
  // getProductPrice('Радар')
  // getProductPrice('Двигатель')

  // const products = [
  //   { name: 'Радар', price: 1300, quantity: 4 },
  //   { name: 'Сканер', price: 2700, quantity: 3 },
  //   { name: 'Дроид', price: 400, quantity: 7 },
  //   { name: 'Захват', price: 1200, quantity: 9 },
  // ];
  // function calculateTotalPrice(productName) {
  //   // Пиши код ниже этой строки
  //   //  const totalPrice = 0;
  //   for (const product of products){
  //     if(product.name === productName){
  //       return product.price*product.quantity
  //     }
  //     // totalPrice = product.price*product.quantity;


  //   }
  
  // return 0
  //   // Пиши код выше этой строки
  // }
  // calculateTotalPrice('Радар')  
  // function getAllPropValues(propName) {
  //   // Пиши код ниже этой строки
  //   let prop = [];
    
  //   for (const product of products){
  //     if (product[propName]){
  //       prop.push(product[propName])
  //       console.log(prop)
  //     }
     
     
     
  //   }
  //   console.log(prop)
  //   return prop
  // }
  // getAllPropValues('name')
  // const forecast = {
  //   today: {
  //     low: 28,
  //     high: 32,
  //     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  //   },
  //   tomorrow: {
  //     low: 27,
  //     high: 31,
  //   },
  // };
  // // Пиши код ниже этой строки
  // const {today:{low:lowToday,high:highToday,icon:todayIcon},
  // tomorrow:{lowTomorrow:low,highTomorrow:high,tomorrowIcon='https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}}=forecast
  // console.log(forecast)
  
  // const forecast = {
  //   today: {
  //     low: 28,
  //     high: 32,
  //     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  //   },
  //   tomorrow: {
  //     low: 27,
  //     high: 31,
  //   },
  // };
  // // Пиши код ниже этой строки
  // const {
  //   today: {low:lowToday,high:highToday,icon:todayIcon},
  //   tomorrow:{low:lowTomorrow,high:highTomorrow,icon:tomorrowIcon='https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
  // }=forecast
  // const highToday = forecast.today.high;
  // const lowToday = forecast.today.low;
  // const todayIcon = forecast.today.icon;
  
  // const highTomorrow = forecast.tomorrow.high;
  // const lowTomorrow = forecast.tomorrow.low;
  // const tomorrowIcon = forecast.tomorrow.icon;
  // function makeTask(data) {
  //   const completed = false;
  //   const category = 'Общее';
  //   const priority = 'Обычный';
  //   // Пиши код ниже этой строки
  //   const nwoTask = {completed,category,priority,...data}
  // console.log(nwoTask)
  //   // Пиши код выше этой строки
  // }
  // makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' })
  // function add(...args) {
  //    let total = 0;
  //    for (const arg of args) {
  //     total += arg;
  //   }
  //   console.log(total)
  //   return args
  //   // Пиши код выше этой строки
  // }
  // add(15, 27)  
//   function addOverNum(firstNumber,...args) {
//     let total = 0;
  
//     for (const arg of args) {
//       if(arg > firstNumber){
//         total += arg;
//       }
     
      
//     }
//     console.log(total)
//     return total;
//     // Пиши код выше этой строки
//   }
// //  addOverNum(20, 74, 11, 62, 46, 12, 36)
//   addOverNum(10, 12, 4, 11, 48, 10, 8)

// function findMatches(array,...args) {
//   const matches = []; // Не изменяй эту строку
//     for (const arg of args){
//       for (const arr of array){
       
//       if(arg === arr){
//         matches.push(arr)
        
        
//       }
//       }
     
//     }
//   // Пиши код выше этой строки
//   console.log(matches)
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) 
// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   // Пиши код выше этой строки
// };
// const bookShelf = {
//   books: ['Последнее королевство'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook('Мгла');
// bookShelf.addBook('Страж снов');
// console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Мгла', 'Страж снов']
// bookShelf.removeBook('Мгла');
// console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Страж снов']
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
// 	const bookIndex = this.books.indexOf(oldName) 
//    this.books.splice(bookIndex,1,newName);
//    console.log(this.books)
// 	return this.books
//     // Пиши код выше этой строки
//   },
// };
// bookShelf.updateBook('Мгла', 'Хроники подземелий')
//   const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   removePotion(potionName) {
//     const bookIndex = this.potions.indexOf(potionName) 
//      this.potions.splice(bookIndex,1)
//      console.log(this.potions)
//     // Пиши код ниже этой строки
//     // 🔥 Оставляем три пустые строки для студента
//     // Пиши код выше этой строки
//   },
// };

// atTheOldToad.removePotion('Дыхание дракона')
// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
    
//   ],
  
 
  


//   removePotion(potionName) {
//     let values = Object.values(this.potions)
//      for( const value of values){
//       this.potions.splice(potionName, 1)
//       console.log([this.potions])
//       return this.potions
//      }
//    },
 
// }; 


// atTheOldToad.removePotion('Зелье скорости')
// console.log(atTheOldToad.potions)





// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     const keys = Object.keys(this.potions)
//     for(const key of keys){
//       const potionIndex = this.potions.indexOf(potionName);
//       console.log(potionIndex)
//       if (potionIndex === 1) {
//           return `Зелья ${potionName} нет в инвентаре!`;
//         }
      
      
//       this.potions.splice(potionName, 1);
//       // return `${key}: ${this.potions[key]}`
//  }
   
   
//     // 
  
    
   
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Зелья ${oldName} нет в инвентаре!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Пиши код выше этой строки
// };



// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion === potionName) {
//         console.log(`Зелье ${potionName} уже есть в инвентаре!`);
//       }
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         this.potions.splice(this.potions.indexOf(potion), 1);
//         return;
//       }
//     }
//     console.log(`Зелья ${potionName} нет в инвентаре!`);
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return;
//       }
//     }

//     console.log(`Зелья ${oldName} нет в инвентаре!`);
//   },
//   // Пиши код выше этой строки
// };
// atTheOldToad.removePotion('Зелье скорости')
// atTheOldToad.removePotion('Зелье скорости')
// atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф')
// atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости')
// console.log(atTheOldToad.potions)



// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр',function eatPizza(pizzaName){
// console.log(`Едим пиццу ${pizzaName}`);});


// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, makePizza, onOrderError) {
//     for( const pizzas of this.pizzas)
//    if(pizzaName === pizzas){
//     return makePizza(pizzaName) 
   
//    }
   
//    return onOrderError(`В ассортименте нет пиццы с названием ${pizzaName}.`)
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));
// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage;
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage;
// const burgerShackMessage = burgerShackComposer('Поли');


// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']




// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
//   Car.prototype.getPrice = function(){
//   return this.price;
//   }
//   Car.prototype.changePrice = function(newPrice){
//    this.price = newPrice; 
// }




// function Storage (items){
//   this.items = items;

// }
// Storage.prototype.getItems = function () {
// return this.items
// }
// Storage.prototype.addItem = function(newItem){
//    this.items.push(newItem)
// }
// Storage.prototype.removeItem = function(item){
//   item = this.items.indexOf(item)
 
//     this.items.splice(item ,1)
// }

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]




// function StringBuilder (baseValue){
//   this.baseValue = baseValue;
//   }
//   StringBuilder.prototype.getValue = function(){
//   return this.baseValue
//   }
//   StringBuilder.prototype.padEnd = function(str){
//     this.baseValue.push(str);
//   }
//   StringBuilder.prototype.padStart = function(str){
//     this.baseValue.splice(0,0,str)
//   }
//   StringBuilder.prototype.padBoth = function(str){
//    this.baseValue.push(str);
   
//   }
//   // Пиши код выше этой строки
//   const builder = new StringBuilder('.');
//   console.log(builder.getValue()); // '.'
//   builder.padStart('^');
//   console.log(builder.getValue()); // '^.'
//   builder.padEnd('^');
//   console.log(builder.getValue()); // '^.^'
//   builder.padBoth('=');
//   console.log(builder.getValue()); // '=^.^='


  // function StringBuilder (baseValue){
  //   this.baseValue = baseValue;
  //   }
  //   StringBuilder.prototype.getValue = function(){
  //   return this.baseValue
  //   }
  //  StringBuilder.prototype.padStart = function(str){
    
  //   }
  //   StringBuilder.prototype.padEnd = function(str){
  //     this.baseValue.push(str)
  //   }
   
  //   StringBuilder.prototype.padBoth = function(str){
     
  //   }
  // // Пиши код выше этой строки
  // const builder = new StringBuilder('.');
  // console.log(builder.getValue()); // '.'
  // builder.padStart('^');
  // console.log(builder.getValue()); // '^.'
  // builder.padEnd('^');
  // console.log(builder.getValue()); // '^.^'
  // builder.padBoth('=');
  // console.log(builder.getValue()); // '=^.^='
  // class User {
  //   email;
  
  //   constructor(email) {
  //     this.email = email;
  //   }
  
  //   get email() {
  //     return this.email;
  //   }
  
  //   set email(newEmail) {
  //     this.email = newEmail;
  //   }
  // }
  // // Пиши код ниже этой строки
  // class Admin extends User {
  // static AccessLevel = {
  //   BASIC: 'basic',
  //    SUPERUSER: 'superuser'

  // }
  // };


//   const changeEven = (numbers, value) => {
//     // Пиши код ниже этой строки
//     const newNumbers = [];
//    numbers.forEach(element =>{
//     if (element % 2 === 0){
        
//         newNumbers.push(element = element + value)
//     }else {newNumbers.push(element)}
//     })
//     return newNumbers
//     // Пиши код выше этой строки
//   }
  

//  console.log(changeEven([1, 2, 3, 4, 5], 10)) 
//  console.log(changeEven([2, 8, 3, 7, 4, 6], 10))



// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, player)=>{ 
  
//   return player.playtime/player.gamesPlayed + total
  
// },0);
// console.log(totalAveragePlaytimePerGame)




// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books.filter((book)=>book.rating >= MIN_BOOK_RATING)
// .map((book)=> book.author).sort((a,b)=> a.localeCompare(b))
// console.log(names)
// const users =[
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]
// const getTotalBalanceByGender = (users, gender) => {
//   const totalBalanceByGender = users.filter((user)=> user.gender === gender).flatMap((user)=>user.balance).reduce((previousValue, number) => {
//     return previousValue + number;
//   }, 0);
//  return totalBalanceByGender
// };


// console.log(getTotalBalanceByGender(users,'female'))