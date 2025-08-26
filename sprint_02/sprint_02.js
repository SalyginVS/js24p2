// iTGid.info - курс JS24/2

// Task 01
// Создайте функцию t01, которая принимает аргумент и с помощью isArray проверяет массив это или нет. Функция должна возвращать true, false. Проверьте работу на примерах ниже:
// [4,5]
// 5
// ['hello']
// Array(10)

const t01 = arr => {
    return Array.isArray(arr);
};

document.querySelector('.b-1').addEventListener('click', () => {
    document.querySelector('.out-1').textContent = t01(4);
});


// Task 02
// Создан массив arr_02. Напишите функцию t02, которая получает значение из input.i-2, переводит в число и проверяет наличие такого значения в массиве arr_02. Если значение есть то массив выводится в .out-2, разделитель - пробел. Если значения нет - добавляется в массив, а массив выводится в .out-2. Разделитель значений - пробел. 

const arr_02 = [19, 17, 22, 47, 15];

const t02 = () => {
    let i2 = +document.querySelector('input.i-2').value;
    if (arr_02.includes(i2)) document.querySelector('.out-2').textContent = arr_02.join(" ");
    else {
        arr_02.push(i2);
        document.querySelector('.out-2').textContent = arr_02.join(" ");
    }
}

document.querySelector('.b-2').addEventListener('click', t02);

// Task 03
// Напишите функцию, которая эмулирует работу метода includes с помощью цикла. Функция принимает два аргумента: массив и значение. С помощью цикла перебирает массив и если находит совпадение, то возвращает true. Если не находит - false.

const t03 = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) return true;
    }
    return false;
}

document.querySelector('.b-3').addEventListener('click', () => {
    const n = +document.querySelector('.i-3').value;
    document.querySelector('.out-3').textContent = t03(arr_02, n);
});


// Task 04
// Создан массив arr_04. Напишите функцию t04, функция с помощью цикла выведите в .out-4 четные индексы из массива arr_04. Разделитель знак подчеркивания.

let arr_04 = ["joust", "river raid", "seaquest", "asteroids", "dig dug"];

const t04 = () => {
    let out = [];
    for (let i = 0; i < arr_04.length; i++) {
        if (i % 2 === 0) out.push(i);
    }
    document.querySelector('.out-4').textContent = out.join('_');
}

document.querySelector('.b-4').addEventListener('click', t04);


// Task 05
// Создан массив arr_05. Напишите функцию t05. Функция должна выводить на страницу самое маленькое число массива.

let arr_05 = [22, 12, -9, 99, -8, -12, 55, 23];

const t05 = () => {
    let a = arr_05[0];
    for (let i = 0; i < arr_05.length; i++) {
        if (arr_05[i] < a) a = arr_05[i];
    }
    document.querySelector('.out-5').textContent = a;
}

document.querySelector('.b-5').addEventListener('click', t05);


// Task 06
// Создан массив arr_06. Напишите функцию, которая выводит самую большую строку (по длине) из массива в .out-6.

const arr_06 = ["joust", "river raid", "seaquest", "asteroids", "dig dug"];

const t06 = () => {
    let a = arr_06[0].length;
    for (let i = 0; i < arr_06.length; i++) {
        if (arr_06[i].length > a) a = arr_06[i].length
    }
    for (let i = 0; i < arr_06.length; i++) {
        if (arr_06[i].length === a) {
            document.querySelector('.out-6').textContent = arr_06[i];
            return;
        }
    }
}

document.querySelector('.b-6').addEventListener('click', t06);


// Task 07
// Создан массив arr_07. Напишите функцию, которая получает из input.i-7 значение - число, и добавляет его в начало и в конец массива arr_7. Массив выводит в .out-7. Разделитель - подчеркивание.

const arr_07 = [55];

const t07 = () => {
    let i7 = +document.querySelector('input.i-7').value;
    arr_07.unshift(i7);
    arr_07.push(i7);
    document.querySelector('.out-7').textContent = arr_07.join('_');
}

document.querySelector('.b-7').addEventListener('click', t07);


// Task 08
// Создан массив arr_08. Напишите функцию, которая принимает аргумент - массив arr и создает его клон. Т.е. создает пустой массив, циклом перебирает цикл arr и по элементам копирует его в новый массив. Новый массив должен быть возвращен функцией.

const arr_08 = ["OS", "Windows"];

const t08 = (arr) => {
    res = [];
    for (let i = 0; i < arr.length; i++) {
        res[i] = arr[i];
    }
    return res;
}

document.querySelector('.b-8').addEventListener('click', () => {
    const result = t08(arr_08);
    // проверяем
    result.push(88);
    console.log(result);
    console.log(arr_08);
});


// Task 09
// Существует и более простой метод - оператор spread. Изучите результат работы кода.

const t09 = () => {
    const a = [11, 22, 33, 44, 55];
    const b = [...a];
    console.log(b);
}

document.querySelector('.b-9').addEventListener('click', t09);


// Task 10
// Оператор spread позволяет добавлять элемент в массив. Изучите пример:

const t10 = () => {
    const a = [11, 22, 33, 44, 55];
    const b = [...a, 66];
    console.log(b);
}

document.querySelector('.b-10').addEventListener('click', t10);


// Task 11
// Напишите функцию, которая с помощью оператора spread добавляет в начало массива arr_11 строку считанную из input.i-11 в. Функция должна выводить массив в строку .out-11. Разделитель - пробел.

let arr_11 = ["SUSE", "Unbreakable Linux", "Yellow Dog", "Slackware"];

const t11 = () => {
    let i11 = document.querySelector('input.i-11').value;
    arr_11 = [i11, ...arr_11];
    document.querySelector('.out-11').textContent = arr_11.join(' ');
}

document.querySelector('.b-11').addEventListener('click', t11);


// Task 12
// Изучите работу кода. Сделайте выводы, как можно быстро получить значения из массива. 

const arr_12 = ["Slackware", "Почему", "Патрик", "Бог"];

const t12 = () => {
    const [a, b] = arr_12;
    console.log(a);
    console.log(b);
}

document.querySelector('.b-12').addEventListener('click', t12);


// Task 13
// Создан массив arr_13. Напишите функцию t13. Функция выполняется по клику на кнопку. Функция должна с помощью метода at вывести значение под индексом 2 в .out-13.

const arr_13 = ["Slackware", "Slax", "Porteus", "Alpine Linux"];

const t13 = () => {
    document.querySelector('.out-13').textContent = arr_13.at(2);
}

document.querySelector('.b-13').addEventListener('click', t13);


// Task 14
// Создан массив arr_14. Напишите функцию t14. Функция выполняется по клику на кнопку. Функция получает число из input.i-14 и ищет данное число в массиве arr_14. Если находит совпадение, то выводит индекс данного значения в массиве (первый найденный). Если не находит - выводит -1. Результат выводится в .out-14.

const arr_14 = [666, 777, 888];

const t14 = () => {
    let i14 = +document.querySelector('input.i-14').value;
    for (let i = 0; i < arr_14.length; i++) {
        if (arr_14[i] === i14) {
            document.querySelector('.out-14').textContent = i;
            return;
        }
    }
    document.querySelector('.out-14').textContent = -1;
}

document.querySelector('.b-14').addEventListener('click', t14);


// Task 15
// Создан массив arr_15. Напишите функцию t15. Функция выполняется по клику на кнопку. Функция получает число из input.i-15 и ищет данное число в массиве arr_15. Если находит совпадение, то выводит индекс данного значения в массиве (первый найденный). Если не находит - выводит false. Результат выводится в .out-15. Кстати, в этой задаче неплохо работает тернарный оператор.

const arr_15 = [666, 777, 888];

const t15 = () => {
    let i15 = +document.querySelector('input.i-15').value;
    for (let i = 0; i < arr_15.length; i++) {
        if (arr_15[i] === i15) {
            document.querySelector('.out-15').textContent = i;
            return;
        }  
    }
    document.querySelector('.out-15').textContent = false;
}

document.querySelector('.b-15').addEventListener('click', t15);



// Task 16
// Создан массив arr_16. Напишите функцию, которая возвращает true, если в массиве пары чисел одинаковые, и false если нет. Массив всегда будет иметь четную длину.

//const arr_16 = [18, 18, 19, 19, 20, 20]; // ожидаю true
const arr_16 = [18, 18, 19, 1, 20, 20]; // а на этом примере даст false.

const t16 = () => {
 for (let i = 0; i < arr_16.length; i += 2) {
    if (arr_16[i] !== arr_16[i + 1]) return false;
  }
  return true; 
}


document.querySelector('.b-16').addEventListener('click', () => {
    document.querySelector('.out-16').textContent = t16();
});


// Task 17
// Создайте функцию, которая получает массив и значение. Функция возвращает последний индекс значения в данном массиве. Применяйте indexOf. Если значения нет то возвращает -1.

const arr_17 = [100, 200, 300, 100, 200, 300];

const t17 = (arr, n) => {
    let idx = arr.indexOf(n);
    let lastIdx = -1;
    while (idx != -1 ) {
        lastIdx = idx;
        idx = arr.indexOf(n, idx + 1);
    }
    return lastIdx;
}

document.querySelector('.b-17').addEventListener('click', () => {
    document.querySelector('.out-17').textContent = t17(arr_17, 200); // ожидаю 4
});


// Task 18
// Создан массив arr_18. Напишите функцию t18, которая применяет метод map, и функцию в методе t888. Результирующий массив выводится в .out-18, разделитель пробел. 

const arr_18 = [11, 22, 33];

const t18 = () => {
    const out_18 = arr_18.map(t888);
    document.querySelector('.out-18').textContent = out_18.join(' ');
}

const t888 = (item) => item + 10;

document.querySelector('.b-18').addEventListener('click', t18);

// Task 19
// Создан массив arr_19. Функция должна применять к массиву метод map и создать новый массив. Где четные элементы исходного массива заменены на 0. Результат должен быть помещен в res_19. Для проверки - выводите массив в консоль.

const arr_19 = [11, 22, 33];
let res_19 = [];

const t19 = () => {
    res_19 = arr_19.map(function (item, index) {
        if (index%2 === 0) return 0;
        return item;
    })
    console.log(res_19);
}

document.querySelector('.b-19').addEventListener('click', t19);


// Task 20
// Создан массив arr_20. Напишите функцию t20, которая применяет к arr_20 метод map, так, чтобы в res_20 попадали элементы из arr_20 умноженные на 2. Выводите результат в консоль.

let arr_20 = [];
arr_20[5] = 100;
arr_20[10] = 200;

let res_20 = [];

const t20 = () => {

}

document.querySelector('.b-20').addEventListener('click', t20);


// Task 21
// Создан массив arr_21. Напишите функцию t21, которая применяет к arr_21 метод map и изменяет arr_21 так, что arr_21 будут лежать строки приведенные к нижнему регистру и очищенные от пробелов по краям строк. Выведите arr_21 в консоль.

let arr_21 = ['Aa ', ' bB ', ' cC'];

const t21 = () => {

}

document.querySelector('.b-21').addEventListener('click', t21);


// Task 22
// Создан массив arr_22. Функция с помощью map должна изменить массив arr_22 так, чтобы в arr_22 лежали индексы из массива arr_22. Выведите в консоль.

let arr_22 = [101, 201, 301, 401];

const t22 = () => {

}

document.querySelector('.b-22').addEventListener('click', t22);


// Task 23
// Функция должна на основе arr_23 создавать массив res_23, который содержит числа больше 100 из массива arr_23. Примените filter. Выведите res_23 в консоль.

const arr_23 = [1, 101, 3, 102, 4, 201, 202, -9];
let res_23 = [];

const t23 = () => {

}

document.querySelector('.b-23').addEventListener('click', t23);


// Task 24
// Функция должна на основе arr_24 создавать массив res_24  который содержит четные числа из массива arr_24. Примените filter. Выведите res_24 в консоль.

const arr_24 = [1, 101, 3, 102, 4, 201, 202, -9];
let res_24 = [];

const t24 = () => {

}

document.querySelector('.b-24').addEventListener('click', t24);


// Task 25
// Функция должна на основе arr_25 создавать массив res_25  который содержит не пустые строки из arr_25. В данном задании под непустыми строками понимаем строки длиной больше 1 и не состоящие из одних пробелов. Выведите в консоль res_25.

const arr_25 = ['test', '', 'best', '  ', 'rest'];
let res_25 = [];

const t25 = () => {

}

document.querySelector('.b-25').addEventListener('click', t25);
