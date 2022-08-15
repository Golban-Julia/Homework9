"use strict";

// 1. Создайте объект Date для даты своего рождения(например 20 февраля 1995 года).
//  Используя методы даты(getMonth, getFullYear и тд) сформировать строку следующего вида - “20.02.1995”.

// const dateOfBirth = new Date(1995, 6, 8);

// if (dateOfBirth.getMonth() < 10 && dateOfBirth.getDate() < 10) {
//     console.log(`"0${dateOfBirth.getDate()}.0${dateOfBirth.getMonth()}.${dateOfBirth.getFullYear()}"`);

// } else if (dateOfBirth.getMonth() < 10 && dateOfBirth.getDate() >= 10) {
//     console.log(`"${dateOfBirth.getDate()}.0${dateOfBirth.getMonth()}.${dateOfBirth.getFullYear()}"`);

// } else if (dateOfBirth.getMonth() >= 10 && dateOfBirth.getDate() < 10) {
//     console.log(`"0${dateOfBirth.getDate()}.${dateOfBirth.getMonth()}.${dateOfBirth.getFullYear()}"`);

// }else { 
//     console.log(`"${dateOfBirth.getDate()}.${dateOfBirth.getMonth()}.${dateOfBirth.getFullYear()}"`);
// };



// 2. Напишите функции getDiffDays, которая будет принимать 2 даты(дата начала и дата окончания)
//  и возвращать кол - во дней которое прошло между этими датами.
// Если пользователь передал невалидную дату - вывести ошибку в консоль и остановить выполнение функции
// Если пользователь ввел дату начала, которая будет позже чем дата окончания - то вывести ошибку то дата позже чем дата окончания


// function getDiffDays(start, end) {
   
//     const dateFirst = new Date(start);
//     const dateSecond = new Date(end);

//     if (dateFirst.toString() === "Invalid Date" || dateSecond.toString() === "Invalid Date") {
//         console.error("Error: invalid date");
        
//     } else if (dateSecond.getTime() < dateFirst.getTime()){
//         console.error("Error: your start date is later than end");
//     }
//     else {
  
//     const oneDay = 1000 * 60 * 60 * 24;

//     const diffInTime = dateSecond.getTime() - dateFirst.getTime();

//     const diffInDays = Math.round(diffInTime / oneDay);
//         return diffInDays;
//     }
// }

// console.log(getDiffDays('2020-01-01', '2020-01-17'));
// console.log(getDiffDays('2020-01-01', '2020-03-15')); 
// console.log(getDiffDays('2021-01-02', '2020-03-15')); 
// сonsole.log(getDiffDays('2222222222', '2020-03-15'));


// 3. Создать функцию isWeekend которая будет проверять - выходной ли день(суббота или воскресенье)
//  в переданной дате и возвращать булевый результат.


// function isWeekend(date) {
//     const day = new Date(date);

//   return (day.getDay() === 0 || day.getDay() === 6);
// }

// console.log(isWeekend('2022-02-12')); // true
// console.log(isWeekend('2022-02-13')); // true
// console.log(isWeekend('2022-02-09')); // false


// 4. Используя методы для работы с форматом JSON необходимо сделать следующие действия с данным объектом:
// Преобразовать его к формату JSON строки
// Преобразовать обратно в формат JS объекта
// Используя “деструктуризацию” создать переменные с каждым свойством из данного объекта (fullName, street, city, house)

// const person = {
//    fullName: 'Sherlock Holmes',
//    address: {
//      street: "Baker Street",
// 	 city: "London",
//      house: "221b"
//    }
// }
// const json = JSON.stringify(person);
// console.log(json);
// const parsePerson = JSON.parse(json);
// console.log(parsePerson);

// const { fullName, address:{street, city, house}  } = person;
// console.log(city);
