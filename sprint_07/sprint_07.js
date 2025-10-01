// iTGid.info - курс JS24/2


// Task 01
// Создайте объект obj_01 через const, в котором есть свойства a равное 10, свойство b равное 20, свойство p равное 60. Выведите его в консоль.
const obj_01 = {
    a: 10,
    b: 20,
    p: 60
};
console.log(obj_01);



// Task 02
// Создайте объект obj_02, который описывает форму для регистрации. Объект содержит свойства username - не пустая строка, свойство password - не пустая строка и свойство password_copy. Значения свойство password и password_copy должны совпадать. Выведите в консоль созданный объект.
const obj_02 = {
    username: "user123",
    password: "qwerty",
    password_copy: "qwerty"
};
console.log(obj_02);



// Task 03
// Добавьте в объект obj_02 свойство remember_me со значением true. Выведите в консоль obj_02.
obj_02.remember_me = true;
console.log(obj_02);




// Task 04
// Напишите функцию, которая выводит в .out-4 значение свойства из объекта obj_02. Ключ свойства лежит в переменной k4.

let k4 = 'username';

const t04 = () => {
    document.querySelector('.out-4').textContent = obj_02[k4];
}

document.querySelector('.b-4').addEventListener('click', t04);


// Task 05
// Напишите функцию, которая выводит в .out-51 значение из obj_05 с ключом let, выводит в .out-52 значение с ключом for. 


const obj_05 = {
    for: 1,
    let: 2,
    return: 3
};

const t05 = () => {
    document.querySelector('.out-51').textContent = obj_05['let'];
    document.querySelector('.out-52').textContent = obj_05['for'];
}

document.querySelector('.b-5').addEventListener('click', t05);



// Task 06
// Напишите функцию, которая получает объект как аргумент и выводит в .out-6 числовые значения из объекта obj_06. Разделитель элементов знак подчеркивания.

let obj_06 = {
    "49": "Германия",
    "50": 0,
    "41": "Швейцария",
    "43": 100,
    "44": "Великобритания",
    "1": "США"
};

const t06 = (obj) => {
    let res = [];
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            res.push(obj[key]);
        }
    } 
    document.querySelector('.out-6').textContent = res.join('_');
}

document.querySelector('.b-6').addEventListener('click', () => t06(obj_06));


// Task 07
//  Напишите функцию, которая получает объект как аргумент и выводит в .out-7 количество свойств в объекте.

const t07 = (obj) => {
    const count = Object.keys(obj).length;
    document.querySelector('.out-7').textContent = count;
}

document.querySelector('.b-7').addEventListener('click', () => t07(obj_06));


// Task 08
// Напишите функцию, которая получаем объект в качестве аргумента и возвращает true если в объекте есть хоть одно значение числового типа и false в обратном случае. 

const obj_08 = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const t08 = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            return true;
        }
    }
    return false;
}

document.querySelector('.b-8').addEventListener('click', () => document.querySelector('.out-8').textContent = t08(obj_08));


// Task 09
// Создайте объект obj_09 с ключом true равным true и false равным false. Выведите значение под ключом false в .out-9.
const obj_09 = {
    true: true,
    false: false
};
document.querySelector('.out-9').textContent = obj_09['false'];


// Task 10
// Допишите значения в obj_10 так, чтобы запуск функции t10 давал true.

const obj_10 = {
    x: 5,
    y: 6
};

const t10 = () => {
    document.querySelector('.out-10').textContent = (obj_10.x + obj_10.y === 11 && obj_10.y > 5);
}

document.querySelector('.b-10').addEventListener('click', t10);


// Task 11
// Напишите функцию, которая принимает объект как аргумент и  возвращает сумму значений в нем. В объекте будут только числовые значения.

const obj_11 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
}

const t11 = (obj) => {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    } 
    return sum;
}

document.querySelector('.b-11').addEventListener('click', () => document.querySelector('.out-11').textContent = t11(obj_11));

// Task 12
// Напишите функцию, которая принимает объект и ключ. Возвращает true если ключ есть в объекте и false в противном случае.

const obj_12 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
}

const t12 = (obj, key) => {
    return key in obj;
}

document.querySelector('.b-12').addEventListener('click', () => document.querySelector('.out-12').textContent = t12(obj_12, 'test'));


// Task 13
// Напишите функцию, которая принимает объект и значение. Возвращает true если значение есть в объекте и false в противном случае.

const obj_13 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
}

const t13 = (obj, val) => {
    for (let key in obj) {
        if (obj[key] === val) {
            return true;
        }   
    }
    return false;   
}

document.querySelector('.b-13').addEventListener('click', () => document.querySelector('.out-13').textContent = t13(obj_13, 17));

// Task 14
// Напишите функцию, которая принимает два объекта. Функция должна проверить что все пары ключ - значение из первого объекта есть во втором. Возвращает true если есть и false если нет.

const obj_141 = {
    "b": 171,
    "e": 221,
}

const obj_142 = {
    "b": 17,
    "e": 22,
    "j": 17,
}

const t14 = (obj1, obj2) => {
    for (let key in obj1) {
        if (!(key in obj2) || obj2[key] !== obj1[key]) {
            return false;
        }           
    }   
    return true;    
}

document.querySelector('.b-14').addEventListener('click', () => {
    document.querySelector('.out-14').textContent = t14(obj_141, obj_142);
});

// Task 15
// Напишите функцию, которая удаляет в объекте obj_15 запись с ключом из переменной k15. Функция выводит в консоль объект obj_15.

const obj_15 = {
    "b": 17,
    "e": 22,
}

let k15 = 'e';

const t15 = () => {
    delete obj_15[k15];
    console.log(obj_15);
}

document.querySelector('.b-15').addEventListener('click', t15);

// Task 16
// Напишите функцию, которая удаляет в объекте obj_16 записи со значением из переменной v16. Функция выводит в консоль объект obj_16.

const obj_16 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
}

let v16 = 22;

const t16 = () => {
    for (let key in obj_16) {
        if (obj_16[key] === v16) {
            delete obj_16[key];
        }              
    }  
    console.log(obj_16);                 
}

document.querySelector('.b-16').addEventListener('click', t16);


// Task 17
// Напишите функцию, которая находит сумму нулевых элементов значений объекта. Результат выводится в .out-17.

const obj_17 = {
    a: [100, 200],
    b: [300, 400],
    c: [500, 600]
}; // ожидаю 900


const t17 = () => {
    let sum = 0;                            
    for (let key in obj_17) {
        sum += obj_17[key][0];
    }
    document.querySelector('.out-17').textContent = sum;
}

document.querySelector('.b-17').addEventListener('click', t17);


// Task 18
// Напишите функцию, которая выводит в .out-18 значение под ключом 'color' из массива .arr-18. Разделитель пробел.

let arr_18 = [
    { type: "Fiat", model: "500", color: "white" },
    { type: "Ford", model: "f-150", color: "black" },
    { type: "Mazda", model: "6", color: "blue" },
];


const t18 = () => {
    let res = arr_18.map(item => item.color).join(' ');
    document.querySelector('.out-18').textContent = res;
}

document.querySelector('.b-18').addEventListener('click', t18);


// Task 19
// Напишите функцию, которая приводит строковые значения объекта obj_19 к нижнему регистру и чистит от пробелов по краям. Выводит объект в консоль.

let obj_19 = { firstName: "John ", lastName: " Doe", age: 50, eyeColor: " blUe " };


const t19 = () => {
    for (let key in obj_19) {
        if (typeof obj_19[key] === 'string') {
            obj_19[key] = obj_19[key].trim().toLowerCase();
        }
    }
    console.log(obj_19);    
}

document.querySelector('.b-19').addEventListener('click', t19);


// Task 20
// Cоздайте через let объект obj_20 с ключом One и значением 1 и ключом one со значением 2. Выведите в консоль.
let obj_20 = {
    One: 1,
    one: 2
};
console.log(obj_20);
