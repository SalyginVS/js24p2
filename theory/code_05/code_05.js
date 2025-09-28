const arr = [
    [11, 22, 33, 44],
    [55, 66, 77, 88],
];

arr.push([111, 222, 333, 444]);

console.log(arr);
console.log(arr[2][2]);

const arr_02 = [
    [],
    []
];
console.log(arr_02);

let out = '';
for (let i = 0; i < arr.length; i++) {
    // arr[i]
    const item = arr[i];
    for (let k = 0; k < item.length; k++) {
        out += item[k] + '_';
    }
    out += '<br>';
}
console.log(arr.flat());
document.querySelector('.out-1').innerHTML = out;

let t = [];
let p = 11;
for (let i = 0; i < 3; i++) {
    let temp = [];
    for (let k = 0; k < 3; k++) {
        temp.push(p);
        p++;
    }
    t.push(temp);
}
console.log(t);

// 1 - дерево
// 100, 101 монстр
// 200 лошадь
// 500 герой

const field = [
    [0, 1, 0, 1, 100],
    [200, 0, 1, 0, 0],
    [101, 0, 0, 1, 0],
    [1, 0, 0, 100, 0],
    [500, 0, 1, 1, 0],
];

console.log(field);

let out2 = '';
for (let i = 0; i < field.length; i++) {
    for (let k = 0; k < field[i].length; k++) {
        if (field[i][k] === 0) out2 += '<div class="empty"></div>';
        if (field[i][k] === 1) out2 += '<div><img src="/images/tree.png"></div>';
        if (field[i][k] === 100) out2 += '<div><img src="/images/monster_1.png"></div>';
        if (field[i][k] === 101) out2 += '<div><img src="/images/bat.png"></div>';
        if (field[i][k] === 200) out2 += '<div><img src="/images/horse.png"></div>';
        if (field[i][k] === 500) out2 += '<div><img src="/images/hero.png"></div>';
    }
    // out += 
}
document.querySelector('.field').innerHTML = out2;