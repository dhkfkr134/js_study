"use strict";
// 1. String concatenation
console.log('my' + 'cat');
console.log('1 + 2');
console.log(`string literals: 1+2 = ${1 + 2}`);

/// 2. Numeric operators
/* 1+1
1-1
1/1
1*1
5%2
2**3 
숫자 연산*/

/// 3. Increment and decrement operators 전위연산자와 후위연산자
let counter = 2;
const preIncrement = ++counter;
//counter = counter +1;
//preIncrement = counter; 라고 볼수 있다
const postIncrement = counter++;


/// 4.Assignement operators 등위연산자

/*
x+=y;
x-=y;
x*=y;
x/=y;
*/

/// 5. Comparison operators
//초과 미만 이상 이하

/// 6. Logical operators: ||, &&, !

/// 7. Equality

// == : loose equality
//==는  '5'와 5를 같다고 한다.

//=== : strict equality, 
//===는 타입이 같은지 다른지 확인한다.

//object에서는 같은 것을 가르켜야지 ===가 true이다.

/// CHECKTIME

//0==''==null==false이다

/// 8. conaitional operators : if

///9. Ternary operator : ?
//condition ? value1 : value2;

/// 10. Switch statement
// use for multiple if checks 여러 case의 결과를 묶어서 사용가능
// enum 쓸때

/// 11. Loops
//while
//do{}while();
//for loop, for(begin; condition; step)
//+inline variable declaration -> for문안에서 지역변수 선언하는거
//nested loops 이중루프
//break, continue --> 이 레이블들은 잘 안쓰지^^
for (let i = 0; i < 11; i++) {
    if (i % 2 == 1) continue;
    if (i === 8) break;
    console.log(`${i}`);
}

//절차적언어 --function이 있을수 밖에없지

///Function
//-프로그램을 구성하는 기본적인 빌딩블럭
//-subprogramd리불리는재사용가능하다는 장점
//계산하거나 수행하는 역할

///1.Function declaration 명사 정의
// 모양 : function name(param1, param2){body... return;}
//one function === one thing
//naming: doSomething,command, verb
//e.g. createCardAndPoint -> createCard, createPoint
//function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();
//js에서는 datatype을 선언안한다

/// 2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

/// 3. Default parameters (added in ES6) --> 디폴트 인자값
function showMessage(message, from = 'unkown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

/// 4.Rest parameters (added in ES6)
function printAll(...args) {
    //방벙1
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    //방법2
    for (const arg of args) {
        console.log(arg);
    }
    //방법3
    //args.forEach(arg) => console.log(arg);
}

printAll('dream', 'coding', 'ellie');

/// 5. Local scope --- 블락으로 구분하는것
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    //+ closer 자식객체가 부모객체를 들여다 볼 수 있는것
}

/// 6. Return a value

/// 7. Early return,early exit
//값이 조건에 맞지않는 경우,언디파인드,-1등등일 영우 빨리 리턴시킨다.
function upgradeUser(user) {
    if (user.point <= 10) {
        treturn;
    }
    // long upgrade logic...
}

/// 1.정의하기전에 사용가능..?

/// Callback function using fnu

///Arrow Function -- 함수를 간결하게만드는 always annoymous

const add = (a, b) => a + b;
const add2 = (a, b) => {
    //body
    return a + b;
};

//IIFE: Immediately Invoked Function Expression : 함수 선언동시에 실행.
(function hello() {
    console.log('IIFE');
})();

//command: add, substract, divide, multiply, remainder)
function calculate(command, a, b) {

    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            return 'nothing';
    }
}
let cal = calculate('jungwon', 8, 7);
console.log(cal);
