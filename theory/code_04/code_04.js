let out = '';
let p = 1;
let s = 16;
for (let i = 0 ; i < 4; i++){
    // out += i + '';
    for (let k = 0; k < 18; k++){
        if (k <= p || k >= s) out += '* ';
        else out += '_ ';
    }
    p = p + 2;
    s = s - 2;
    out += '<br>';
}
console.log(out);
document.querySelector('.out-1').innerHTML = out;