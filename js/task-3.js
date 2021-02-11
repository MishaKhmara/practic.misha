//---------------------task-1


// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };
//   user.mood = 'happy'
//   user.hobby = 'skydiving'
//   user.premium = false
//  const keys = Object.keys(user)
//  for(const key of keys){
//     console.log(`${key}: ${user[key]}`)
//  }

//------------------task-2
// const countProps = function(obj) {
//     const keys = Object.keys(obj)

//     return keys.length
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(countProps({})); // 0
  
//   console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
//   console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

//----------------------------- task-3

// const findBestEmployee = function(employees) {
//     const values = Object.values(employees);
//     const max = Math.max(...values);
//     const indexMax = values.indexOf(max);
//     const keyEmployee = Object.keys(employees);
  
//     return keyEmployee[indexMax];
    
       
    
    
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     }),
//   ); // lorence
  
//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     }),
//   ); // mango
  
//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     }),
//   ); // lux
 

//-------------------------------task-4----------------//

// const countTotalSalary = function(employees) {
//     const values = Object.values(employees)
    
//     let total = 0;
//     for(const value of values){
      
//         total += value;
       
//     }
   
//     return total
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(countTotalSalary({})); // 0
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80,
//     }),
//   ); // 330
  
//   console.log(
//     countTotalSalary({
//       kiwi: 200,
//       lux: 50,
//       chelsy: 150,
//     }),
//   ); // 400

//---------------------task-5-----------------//
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];
  
//   const getAllPropValues = function(arr, prop) {
    
//       const propValues = [];
//       for(const product of products){
//           if(prop in product){
//             propValues.push(product[prop])
//           }
         
//           }
      
//       return propValues
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
  
//   console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
//   console.log(getAllPropValues(products, 'category')); // []



//-----------------------task-6-----------
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];
  
//   const calculateTotalPrice = function(allProdcuts, productName) {
//     let totalPrice = 0;
  
   
//    for(const product of products){
//     if(productName === product.name){
//         totalPrice = product.price * product.quantity
//     }
   
       
    
//    }
//    return totalPrice 
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(calculateTotalPrice(products, 'Радар')); // 5200
  
//   console.log(calculateTotalPrice(products, 'Дроид')); // 2800
//---------------------task-7-------------//
