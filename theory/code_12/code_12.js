const d = new Date();
console.log(d);
console.dir(d);

// как вывести нужную дату
const d1 = new Date('2024-01-01');
console.log(d1);

// Что-то он может. Давайте попробуем создать объект
console.clear();

// const d2 = new Date(); // текущее время
// const d2 = new Date('2024-05-08 12:58:50');
// const d2 = new Date('2024/05/08 12:58:50');
// const d2 = new Date('2024/05/08 12:58:50');
// const d2 = new Date('May 9, 2024 15:05:05');
// const d2 = new Date(2024,0,9,13,40); // с нуля!!!
// const d2 = new Date(1711000000000); // с нуля!!!
// console.log(d2);

// Формат 6-4-3-2
// const d2 = new Date(24,4,4,4,3,2); // с нуля!!!
// const d2 = new Date(24,4,4,4,3); // с нуля!!!
// const d2 = new Date(24,4,4,4); // с нуля!!!
// const d2 = new Date(24,4,4); // с нуля!!!
const d2 = new Date(24,9,8,7,6,5); // с нуля!!!
// один параметр - будут миллисекунды
console.log(d2);

// если год указан 2 цифрами - то это будет 20 век

// Методы - база
console.log(d2.toString());
console.log(d2.toDateString());
console.log(d2.toUTCString());
// zulu time
console.log(d2.toISOString());

// Форматы...
// ISO -> 2015-03-25" (The International Standard)
// Short Date -> "04/09/2024"
// Long Date -> "May 09 2024" | "09 May 2025"

// Парсинг
let ms = Date.parse("Jan 30, 2024");
console.log(ms);
// const d3 = new Date(ms);
const d3 = new Date();
console.log(d3);

// Методы (статичны - локальны)
console.log(d3.getFullYear());
console.log(d3.getYear()); // deprecated

console.log(d3.getMonth()); // 0-11
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[d3.getMonth()]);

console.log(d3.getDate()); // 1-31
console.log(d3.getDay()); // 0-6
console.log(d3.getHours()); // 0-23
console.log(d3.getMinutes()); // 0-23
console.log(d3.getSeconds()); // 0-23
console.log(d3.getMilliseconds()); // 0-23
console.log(d3.getTime()); // 0-23 

// getUTCDate(), getUTCFullYear()////Coordinated Universal Time) UTC time is the same as GMT (Greenwich Mean Time).

console.log(Date.now());
let diff = d.getTimezoneOffset();// (разница в минутах)
console.log(diff);

// Создание дат
// setDate()
// setFullYear()
// setHours()
// setMilliseconds()
// setMonth()
// setSeconds()
// setTime()

const d4 = new Date();
d4.setFullYear(2023);
d4.setMonth(2);
d4.setDate(8);
d4.setHours(13);
d4.setMinutes(15);

console.log(d4);

// Сравнение строк
d5 = new Date();

console.log(d4 > d5);