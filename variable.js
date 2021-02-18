
'use strict'; //에러를 볼수있게끔해준다.

//console.log('Hello World!'); //1 - 콘솔은 웹이 이해할수 있는 api이다.

//2 Variable
//let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

//var 는 쓰면안되는 이유 : block scope가 없다 + var hoisting : 어디에서 선언하든 상관없이 끌어올려주는 방식


//3 constants
//변경불가능한 데이터타입 immutable data type
// -security의 이유 -> 헤커들이 다른코드를 추가하여 변수를 바꾸는것을 막음
// -thread safety -> 스레드들이 접근하여 변수를 변경하는것을 막음
// -reduce human mistakes -> 사람들의 실수를 막을 수 있따.
const daysInWeek = 7;
const maxNumber = 5;
console.log(daysInWeek);
console.log(maxNumber);
//4. Variable types
//primitive타입 : single item : number -short-int-long-float-double-, string, boolean, null, symbol 등
//object타입 : box container
//function타입 : first-class function

const count =17;
const size =17.1;//상관없이 모두 number타입
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// 특별한 수
const infinity =1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt(최근추가된기능,크롬/사파리만가능)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// String
const char ='c';
const bredan = 'bredan';
const greeting = 'hello ' + bredan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob =`hi ${bredan}!`; //template literals(string) + `백틱과 $달러사인을 이용해서하는 방식

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;

//undefined
let x = undefined;//==let x;

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1}`);

//object, real-life object, data structure
const ellie = {name: 'ellie', age: 20}; // const형 object이라서 포인터가 다른object을 가르킬수는 없지만
ellie.age = 21;// object내부멤버는 바꿀수 있다.


// 5. Dynamic typing: dynamically typed language --> C나 Java랑 다르다 runtime동안 타입이 변경될수 있다.
let text = 'hello';
//text.charAt(0); //h
//text =1; //number형으로바뀜
//text = '7' + 5; // 75의 스트링으로바뀜
//text = '8' / '2' // 4라는 숫자로 바뀜
//text.charAt(0)을 하면 에러 // 마지막에 숫자로 바뀌었기때문