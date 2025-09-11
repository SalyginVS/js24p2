// iTGid.info - курс JS24/2

// В задачах, где говорится пробел - применяем символ пробела - нажатие на клавишу space.
// Там где говорится дефис - подразумевается черта на клавиатуре "минус", между символами 0 и =

// Task 01
// Создайте функцию. Функция с помощью вложенных циклов создает строку:
// 4=4 3 2 1 0 3=4 3 2 1 0 2=4 3 2 1 0 1=4 3 2 1 0 0=4 3 2 1 0
// и выводит в .out-1.
// Напоминаю. Если можно избежать, то не делайте вывод на страницу внутри цикла.

const t01 = () => {
    let out = '';
    for (let i = 4; i >= 0; i--) {
        out += i + '='; // например, 4=
        for (let j = 4; j >= 0; j--) {
            out += j + ' ';
        }
    }
    //console.log(out);
    document.querySelector('.out-1').textContent = out.trim();
};

document.querySelector('.b-1').addEventListener('click', t01);

// Task 02
// Создайте функцию. Функция с помощью вложенных циклов создает строку:
// 0****<br>1****<br>2****<br>3****<br>4****<br>
// и выводит в .out-2 с помощью innerHTML

const t02 = () => {
    let out = '';
    for (let i = 0; i <= 4; i++) {
        out += i;
        for (let j = 0; j < 4; j++) {
            out += '*';
        }
        out += '<br>';
    }
    //console.log(out);
    document.querySelector('.out-2').innerHTML = out;
};

document.querySelector('.b-2').addEventListener('click', t02);


// Task 03
// Функция должна выводить прямоугольник на страницу состоящий из символов звездочка. В горизонтали 6 звездочек, количество линий - число, которое пользователь ввел в input.i-3.
// Перенос строки делайте с помощью тега br.

const t03 = () => {
    let lines = +document.querySelector('.i-3').value;
    let out = '';
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < 6; j++) {
            out += '*';
        }
        out += '<br>';
    }
    document.querySelector('.out-3').innerHTML = out;
};

document.querySelector('.b-3').addEventListener('click', t03);


// Task 04
// Функция должна выводить прямоугольник на страницу состоящий из чисел. В горизонтали 6 чисел от 5 до нуля, количество линий - число, которое пользователь ввел в input.i-4.
// Перенос строки делайте с помощью тега br.

const t04 = () => {
    let lines = +document.querySelector('.i-4').value;
    let out = '';
    for (let i = 0; i < lines; i++) {
        for (let j = 5; j >= 0; j--) {
            out += `${j}_`;
        }
        out += '<br>';
    }
    document.querySelector('.out-4').innerHTML = out;
};

document.querySelector('.b-4').addEventListener('click', t04);


// Task 05
// Функция должна выводить прямоугольник на страницу состоящий из чисел. В горизонтали числа от введенного в input.i-51 до нуля, количество линий - число, которое пользователь ввел в input.i-52.
// Перенос строки делайте с помощью тега br.

const t05 = () => {
    let start = +document.querySelector('.i-51').value;
    let lines = +document.querySelector('.i-52').value;
    let out = '';
    for (let i = 0; i < lines; i++) {
        for (let j = start; j >= 0; j--) {
            out += `${j}_`;
        }
        out += '<br>';
    }
    document.querySelector('.out-5').innerHTML = out;
};

document.querySelector('.b-5').addEventListener('click', t05);


// Task 06
// Функция должна с помощью циклов рисовать такую фигуру:
// и выводить в .out-6

const t06 = () => {
    let out = '';
    for (let i = 0; i < 3; i++) {
        out += '|';
        for (let j = 0; j < 4; j++) {
            out += ' *';
        }
        out += ' |<br>';
    }
    //console.log(out);
    document.querySelector('.out-6').innerHTML = out;
};

document.querySelector('.b-6').addEventListener('click', t06);


// Task 07
// Функция должна с помощью циклов рисовать такую фигуру:
// и выводить в .out-7.


const t07 = () => {
    let out = '';
    for (let i = 0; i < 5; i++) {
        out += '| ';
        if (i === 0 || i === 4) {
            // первая и последняя строки: дефисы
            for (let j = 0; j < 4; j++) {
                out += '- ';
            }
        } else {
            // остальные строки: звездочки
            for (let j = 0; j < 4; j++) {
                out += '* ';
            }
        }
        out += '|<br>';
    }
    console.log(out);
    document.querySelector('.out-7').innerHTML = out;
};

document.querySelector('.b-7').addEventListener('click', t07);


// Task 08
// Функция должна рисовать такую фигуру
//10x01x%
//10x01x
//10x01x
// и выводить в .out-08

const t08 = () => {
    let out = '';
    for (let i = 0; i < 3; i++) {
        out += '10x01x';
        if (i === 0) {
            out += '%<br>';
        } else {
            out += '<br>';
        }
    }
    document.querySelector('.out-8').innerHTML = out;
};

document.querySelector('.b-8').addEventListener('click', t08);


// Task 09
// Функция должна рисовать такую фигуру
// и выводить в .out-09

const t09 = () => {
    let out = '';
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if ((i + j) % 2 === 0) {
                out += '0';
            } else {
                out += '1';
            }
        }
        out += '<br>';
    }
    document.querySelector('.out-9').innerHTML = out;
};

document.querySelector('.b-9').addEventListener('click', t09);


// Task 10
// Функция должна вывести в .out-10 такую строку:
// 5 0 4 1 3 2 2 3 1 4 0 5

const t10 = () => {
    let out = '';
    // Используем один внешний и один вложенный цикл для формирования нужной последовательности
    for (let i = 0; i < 6; i++) {
        // В первой половине пары: 5 0, 4 1, 3 2, 2 3, 1 4, 0 5
        for (let j = 0; j < 2; j++) {
            if (j === 0) {
                out += (5 - i) + ' ';
            } else {
                out += i + ' ';
            }
        }
    }
    //console.log(out);
    document.querySelector('.out-10').textContent = out.trim();
};

document.querySelector('.b-10').addEventListener('click', t10);


// Task 11
// Функция должна рисовать такую фигуру
// и выводить в .out-11

const t11 = () => {
    let out = '';
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= i; j++) {
            out += '*';
        }
        out += '<br>';
    }
    document.querySelector('.out-11').innerHTML = out;
};

document.querySelector('.b-11').addEventListener('click', t11);



// Task 12
// Функция должна рисовать такую фигуру
// и выводить в .out-12

const t12 = () => {
    let out = '';
    for (let i = 1; i <= 4; i++) {
        // Сначала звёздочки
        for (let j = 1; j <= i; j++) {
            out += '* ';
        }
        // Потом подчёркивания
        for (let k = 1; k <= 4 - i; k++) {
            out += '_ ';
        }
        out += '<br>';
    }
    document.querySelector('.out-12').innerHTML = out;
};

document.querySelector('.b-12').addEventListener('click', t12);


// Task 13
// Функция должна рисовать такую фигуру
// и выводить в .out-13


const t13 = () => {
    let out = '';
    for (let i = 0; i < 4; i++) {
        let start = i * 10;
        let end = start + 10;
        for (let j = start; j <= end; j++) {
            out += j + '_';
        }
        out += '<br>';
    }
    document.querySelector('.out-13').innerHTML = out;
};

document.querySelector('.b-13').addEventListener('click', t13);


// Task 14
// Функция должна рисовать такую фигуру
// и выводить в .out-14


const t14 = () => {
    let out = '';
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j <= 10; j++) {
            // Для первой строки добавляем ведущий 0
            if (i === 0 && j < 10) {
                out += '0' + j + '_';
            } else {
                out += (i * 10 + j) + '_';
            }
        }
        out += '<br>';
    }
    document.querySelector('.out-14').innerHTML = out;
};

document.querySelector('.b-14').addEventListener('click', t14);

// Task 15
// Функция должна рисовать такую фигуру
// и выводить в .out-15


const t15 = () => {
    let out = '';
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= i; j++) {
            out += j + '_';
        }
        out += '<br>';
    }
    document.querySelector('.out-15').innerHTML = out;
};

document.querySelector('.b-15').addEventListener('click', t15);


// Task 16
// Функция должна рисовать такую фигуру
// и выводить в .out-16


const t16 = () => {
    let out = '';
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= i; j++) {
            out += i + '_';
        }
        out += '<br>';
    }
    document.querySelector('.out-16').innerHTML = out;
};

document.querySelector('.b-16').addEventListener('click', t16);


// Task 17
// Функция должна рисовать такую фигуру
// и выводить в .out-17


const t17 = () => {
    let out = '';
    for (let i = 4; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            out += j + '_';
        }
        out += '<br>';
    }
    document.querySelector('.out-17').innerHTML = out;
};

document.querySelector('.b-17').addEventListener('click', t17);


// Task 18
// Функция должна рисовать такую фигуру
// и выводить в .out-18


const t18 = () => {
    let out = '';
    for (let i = 0; i < 5; i++) {
        // Рисуем равные знаки в начале строки
        for (let j = 0; j < 4 - i; j++) {
            out += '=_';
        }
        // Рисуем числа после равных знаков
        for (let k = 4 - i; k <= 4; k++) {
            out += k + '_';
        }
        out += '<br>';
    }
    document.querySelector('.out-18').innerHTML = out;
};

document.querySelector('.b-18').addEventListener('click', t18);



// Task 19
// Функция должна рисовать такую фигуру
// и выводить в .out-19


const t19 = () => {
    let out = '';
    for (let i = 0; i < 5; i++) {
        // Сначала равные знаки
        for (let j = 0; j < i; j++) {
            out += '=_';
        }
        // Затем числа
        for (let k = i; k < 5; k++) {
            out += k + '_';
        }
        out += '<br>';
    }
    document.querySelector('.out-19').innerHTML = out;
};

document.querySelector('.b-19').addEventListener('click', t19);


// Task 20
// Функция должна рисовать такую фигуру
// и выводить в .out-20


const t20 = () => {
    let out = '';
    for (let i = 0; i < 4; i++) {
        // Левая часть: числа от 0 до 3-i
        for (let j = 0; j < 4 - i; j++) {
            out += j + '_';
        }
        // Звёздочки: 2*(i+1) символов
        for (let k = 0; k < 2 * (i + 1); k++) {
            out += '*_';
        }
        // Правая часть: числа от 6+i до 9
        for (let m = 6 + i; m <= 9; m++) {
            out += m + '_';
        }
        out += '<br>';
    }
    document.querySelector('.out-20').innerHTML = out;
};

document.querySelector('.b-20').addEventListener('click', t20);