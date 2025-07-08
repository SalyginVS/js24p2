let a = true;
// a = false;
// a = a + 5;
console.log(a);
console.log(typeof a);

document.querySelector('.out-1').textContent = a;

let username = 'hello@email.ua';
let password = '12345';

// массив

let arr = [];
let arr_02 = [22,33,'jelly']; // индекс, ключ, номер
arr_02[1] = 'Yellow';
console.log(arr);
console.log(arr_02);
console.log(arr_02.length);

// добавить значения
arr[0] = 50;
arr[1] = 60;
console.log(arr);
console.log(arr.length);

// добавить в конец массива
arr[arr.length] = 77;
arr[arr.length] = 88;
console.log(arr);
console.log(arr.length);

// методы для работы с массивами
let result = arr.push(99,111,222,333);
console.log(arr);
console.log(result);

arr.pop();
result = arr.pop();
console.log(arr);
console.log(result);

arr.unshift(888);
result = arr.unshift(999);
console.log(arr);
console.log(result);

result = arr.shift();
console.log(arr);
console.log(result);

// вывод массивов на страницу
let arr_03 = []; // a[]
const arr_04 = arr_03;

arr_03.push(55);
arr_03[1] = 66;
arr_03.push(77);

arr_03.push(88);

console.log(arr_03);
console.log(arr_04);
document.querySelector('.out-1').textContent = arr_03;
document.querySelector('.out-2').textContent = '55,66,77,88';

// + +*/% && ||

const user = ['Pupkin', '7sdf78s7', 23];
console.log(user);
document.querySelector('.out-2').textContent = user.join('_');

let out = '';
for (let i = 0; i < user.length; i++) {
    out += '<p>'+i+' : ' + user[i] + '</p>';
}
document.querySelector('.out-1').innerHTML = out;
