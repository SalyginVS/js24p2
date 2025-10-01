const arr = ['lou', 27, 'male']; // 0 фамилию 1 - возраст
console.log(arr);

// индекс = ключ = свойство

const obj = {
    lastName : 'lou',
    sex : 'male',
    "hello world" : 5,
    age : 77, 
    0 : 'qbc'
};

console.log(obj.sex);
console.log(obj['hello world']);
let m = 'lastName';
console.log(obj[m]);
console.log(obj['age']);
console.log(obj.ttttt);
delete obj.sex;
obj.height = 177;
console.log(obj);

const key = 'lastName';
// if (obj[key]) {
if (key in obj) {
    console.log('yes');
}
else console.log('no');

for (let key in obj) {
    console.log(key, obj[key]);
}

const keys = Object.keys(obj);
console.log(keys);
const values = Object.values(obj);
console.log(values);

const obj2 = {
    'a' : [22, 33, 44],
    'b' : {model: 'carera', 'prod' : 'porsche'},
    'd' : function () {
        console.log('11111');
    }
}

console.log(obj2);
console.log(obj2.a.map(item => item * 2));
console.log(obj2.b.prod);
console.log(obj2['b'].prod);
console.log(obj2.d);
