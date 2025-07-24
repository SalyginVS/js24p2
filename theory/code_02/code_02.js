let arr = [66, 77];
// arr.push(5);
console.log(Array.isArray([4, 'a']));
if (Array.isArray(arr)) {
    arr.push(55);
    console.log(arr);
}

// по индексу
console.log(arr[2]);
console.log(arr.at(-1));

// есть ли значение в массиве?

const arr_01 = [22, 33, 44, 55];
console.log(arr_01);

console.log(arr_01.includes(44));
console.log(arr_01.indexOf(555)); // -1

// split 

const s = 'abba hello';
const arr_03 = s.split(' ');
console.log(arr_03);

// map
console.clear();
const arr_04 = [33, 44, 55];
console.log(arr_04);

const arr_05 = arr_04.map(function (item, index) {
    console.log(index, index)
    return item * 2;
});

function ex(item) {
    return item * 10;
}

console.log(arr_05);

const user = ['Alex ', ' Li', '  25  ', '6667', ' alex_Li@mail.ua'];

const moderUser = user.map(item => item.toLowerCase().trim());

// function normalize(item) {
//     return item.toLowerCase().trim();
// }

console.log(user);
console.log(moderUser);

console.clear();

const arr_06 = [100, 200, 300];
const arr_07 = arr_06.filter(f);

function f(item, index) {
    // console.log(index);
    return item * 2;
}

console.log(arr_06);
console.log(arr_07);