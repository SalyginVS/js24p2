document.querySelector('.b-1').addEventListener('click', function(){
    console.log(this);
    this.style.backgroundColor = 'pink';
});

document.querySelector('.b-2').addEventListener('click', f2);

function f2() {
    console.log(this);
    this.style.backgroundColor = '#33ff44';
}

document.querySelector('.b-3').addEventListener('click', () => {
    console.log(this);
});

const f4 = () => {
    console.log(this);
}

document.querySelector('.b-4').addEventListener('click', f4);


document.querySelector('.block-5').onclick = function() {
    this.textContent = 'hello';
}

let obj6 = {
    "one" : 11,
    "two" : function () {
        return 22;
    }, 
    "three" : function () {
        return 33;
    },
    "four" : () => {
        return 44;
    },
    "five" : function () {
        console.log(this.one);
    },
    "six" : () => {
        console.log(this.one);
    },
    "seven" :  function () {
        console.log(this.three());
    }
};

console.log(obj6);
console.log(obj6.two());
console.log(obj6.three());
console.log(obj6.four());
obj6.five();
obj6.six();
obj6.seven();


const LoginForm = {
    username : "Pupkin ",
    password : "iamgod",
    normalizeUsername : function () {
        this.username = this.username.trim().toLowerCase();
    },
    normalizePassword : function () {
        this.password = this.password.trim();
    }
}

LoginForm.normalizeUsername();
console.log(LoginForm);