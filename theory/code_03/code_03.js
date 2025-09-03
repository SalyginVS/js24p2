const t = [22, 33, 22, 55, 33, 55, 66, 33];

// contains
// indexOf

// Task. Найти элемент массива, который совпадает с m, и вернуть все его индексы.

const m = 33;
console.log(t.indexOf(33));

const result = [];
// for (let index = 0; index < t.length; index++) {
//     if (t[index] === m) result.push(index);
// }
t.forEach((item, index) => {
    if (item == m) result.push(index);
});
console.log(result);

function f (item, index) {
    if (item === m) result.push(index);
}

let count = 0;
for (let item of t) {
    if (item === m) count++;
}
console.log(count);

// ==============================
//[22, 33, 22, 55, 33, 55, 66, 33];

function containsEmul() {
    for (let item of t) {
        if (item === m) return true;
    }
    return false;
}

console.log(containsEmul());

// find()

const r1 = t.findIndex(item => (item > 34 && item < 60));

console.log(t.indexOf(55));


console.log(r1);

for (let i = t.length - 1; i>= 0; i--) {
    if (t[i] === 55) console.log(i);
}