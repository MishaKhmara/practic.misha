// // function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
// //   let message;
// //   // Пиши код ниже этой строки
// // let totalPrice = pricePerDroid*orderedQuantity;
// //   if(totalPrice > customerCredits){
// //   message = 'Недостаточно средств на счету!'
// //   }else { message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits-totalPrice} кредитов`}
// //   // Пиши код выше этой строки
 
// //   return message;
// // }
// // console.log(makeTransaction(3000, 5, 23000))
// // makeTransaction(3000, 5, 23000)
// function getSubscriptionPrice(type) {
//   let price;
  
//   // Пиши код ниже этой строки

//  switch (type) { // Дополни эту строку
//     case  'starter': 
//     price = 0 // Дополни эту строку
//       break;

//     case  'professional' :
//       price = 20; // Дополни эту строку
//       break;

//     case  'organization': // Дополни эту строку
//       price = 50; // Дополни эту строку
//       break;
//   }

//   // Пиши код выше этой строки
//   return price;
// }




// getSubscriptionPrice('starter')
// function formatMessage(message, maxLength) {
//   let result;

// // Пиши код ниже этой строки
// if (message.length <= maxLength){
//   result = message
  
// return result

  
// }else {result = message.slice(0,maxLength) + '...'
// }

// console.log(result)
// // Пиши код выше этой строки
//   return result;
// }

// formatMessage('Curabitur ligula sapien', 16)
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)
function checkForSpam(message) {
  let result;
 
 message.toLowerCase();
  if (message.includes('sale')){
      result = true;
   } else if (message.includes('spam')){
    result = true;
    
  }else{result = false}
  // Пиши код выше этой строки
  return result;
}
  // Пиши код выше этой строки
 
checkForSpam('Get rid of sPaM emails. Our book in on sale!')