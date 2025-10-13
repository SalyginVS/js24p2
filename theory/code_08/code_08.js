// Set 
const s  = new Set();
console.log(s);

s.add(5);
s.add(55);
s.add('5');
s.add(5);
s.add(55);
s.add('5');

console.log(s);
console.log(s.size);

// проверить есть ли элемент внутри set

console.log( s.has(5) );
console.log( s.has('5') );
console.log( s.has('55') );

const arr = new Set([1,2,3,1,2,3,1,23,45]);
console.log(arr);

// сет - > массив
const arrFromSet = [...s];
console.log(arrFromSet);

// строка 
const s1 = new Set('habba habba');
console.log(s1);

// удалить элемент
s1.delete('h');
console.log(s1);

// очистка set
s1.clear();
s1.add(9);
console.log(s1);

// Перебрать set
console.clear();
s.add([1]); // [1] !== [1]
s.add([1]);
console.log(s);
// for (let item of s) console.log(item);
// s.forEach(item => console.log(item));


// console.log(s.values());
// console.log(s.keys());

// Операции с set

console.clear();
const st_01 = new Set([11, 22, 33, 44, 55]);
const st_02 = new Set([44, 55, 66, 77, 88]);
console.log(st_01, st_02);

// union
const st_03 = st_01.union(st_02);
// console.log(st_03);

// difference
const st_04 = st_01.difference(st_02);
// console.log(st_04);

// intersection
const st_05 = st_01.intersection(st_02);
// console.log(st_05);

//symmetricDifference
const st_06 = st_01.symmetricDifference(st_02);
// console.log(st_06);

// логические операции
console.log(st_02.isSubsetOf(st_03));
console.log(st_03.isSupersetOf(st_02));