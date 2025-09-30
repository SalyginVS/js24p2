const arr = Array(9).fill(0);
console.log(arr);
let step = 1;

// рисую игровое поле
arr.forEach((item, index) => {
    const div = document.createElement('div');
    div.setAttribute('data-n', index);
    ttt.append(div);
});

function click(event) {
    // получаю номер элемента по кот. кликнул
    const n = +event.target.getAttribute('data-n');
    console.log(n);
    // поле пустое?
    if (arr[n] !== 0) return;
    // Поле не занято - ставлю ход
    arr[n] = step;

    // визуализируем
    draw();

    // проверяем победу

    checkWinner(step);

    // меняем крестик-нолик
    step = (step === 1) ? 2 : 1;
}

const tttDiv = document.querySelectorAll('#ttt>div');

function draw() {
    arr.forEach((item, index) => {
        switch (item) {
            case 1:
                tttDiv[index].textContent = 'X';
                break
            case 2:
                tttDiv[index].textContent = '0';
                break
        }
    });
}

function checkWinner(step) {
    console.log(arr);
    const winnerArr = ['012', '345', '678', '036', '147', '258', '048', '246'];
    // массив индексов
    let indexStep = [];
    arr.forEach((item, index) => {
        if (item === step) indexStep.push(index);
    });
    console.log(indexStep);
    // if (winnerArr.includes(indexStep.join(''))) console.log('win');
    for (let i = 0; i < winnerArr.length; i++) {
        const winPattern = winnerArr[i];
        let count = 0;
        winPattern.split('').forEach(item => {
            if (indexStep.includes(+item)) count++;
        });
        if (count === 3) {
            showWin(step);
            return;
        }
    }
    if (!arr.includes(0)) showDraw();
}

function showWin(step) {
    console.log('Победил '+(step === 1 ? 'X' : '0'));
    ttt.removeEventListener('click', click);
    ttt.style.opacity = .5;
    document.querySelector('.out').textContent = 'Победил: '+(step === 1 ? 'X' : '0');
}

function showDraw() {
    console.log('Draw');
    ttt.removeEventListener('click', click);
    ttt.style.opacity = .5;
    document.querySelector('.out').textContent = 'Draw';
}

ttt.addEventListener('click', click);
document.querySelector('.button-start-new-game').onclick = function() {
    location.reload();
}