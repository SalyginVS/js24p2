// создаем строку
let s1 = 'Hello';
let s2 = new String('Jello');

console.log(s1);
console.log(s2);

// Строки в js не изменяемы
console.log(s1[1]);
s1[1] = 'P';
console.log(s1);

// Преобразование в массив
let arr = s1.split('');
console.log(arr);
// Массив в строку
let s3 = [2, 3, 5, 'hello'].join('');
console.log(s3);

// Длина строки
console.log(s3.length);

// Перебор строки
for (let i = 0; i < s3.length; i++) console.log(s3[i]);

// Получение подстроки
console.log('qwertyu'.substring(1,3));
console.log('qwertyu'.substring(4));
console.log('qwertyu'.substring(400));

// Поиск подстроки в строке
console.log('qwertyu'.indexOf('rt'));
console.log('qwertyu'.lastIndexOf('rt'));
console.log('qwertyu'.includes('rt'));

// Замена подстроки в строке
console.log('qwertyu'.replace('we', 'WE'));
console.log('qwertyu'.replace('we', 'EEEE'));
console.log('qweddrtyu asddfdg xcddnb'.replace('dd', 'EEEE'));
console.log('qweddrtyu asddfdg xcddnb'.replaceAll('dd', 'EEEE'));

// Преобразование в нижний регистр
console.log('aBcDeF'.toLowerCase());
console.log('aBcDeF'.toUpperCase());

// Отрезаем строку
console.log('qwertyui'.slice(3));
console.log('qwertyui'.slice(3,6));

// Создаем символ из кода UTF-16
console.log(String.fromCharCode(44,45,46,98));

// Получаем код символа 
console.log('b'.charCodeAt());
console.log('abc'.charCodeAt(2));

// Преобразуем в строку
console.log(String(5));
