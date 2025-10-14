// создаем коллекцию
const m = new Map();

// добавляем элементы
m.set('k', 33);
m.set(1, 'hello');
// m['bbb'] = 99;

console.log(m);
console.log(m.size);

// Проверяем ключ в коллекции
console.log(m.has(12));

// Геттер
console.log(m.get('k'));

// Удалить по ключу
m.delete('k');
console.log(m);

// очищаем коллекцию
m.clear();
console.log(m);

// Перебор map
const m_01 = new Map();
m_01.set('name', 'Pupkin');
m_01.set('do', 'action');
m_01.set(33, 'action');
m_01.set(true, false);
console.log(m_01);

for (let k of m_01.keys()) {
    console.log(k);
}

for (let v of m_01.values()) {
    console.log(v);
}

for (let entry of m_01) {
    console.log(entry);
}