'use strict';

//Array

///1. Declaration
//방법1
const arr1 = new Array();
//방법2
const arr2 = [1, 2];

///2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits); // -> fruto란?
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();


///3. Looping over an array
//print all fruits
//a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//b. for of
for (let fruit of fruits) {
    console.log(fruit);
}
//c. forEach ->callbackfn
fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
})
//d. forEach (allow function)
fruits.forEach((fruit, index, array) => console.log(fruit));


///4. Addtion, deletion, copy
//push: add an iten to the end
fruits.push('딸기', '복숭아');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the benigging
fruits.unshift('딸기', '레몬');
console.log(fruits);
//shift: remove an item from the beginging
fruits.shift(fruits);
fruits.shift(fruits);
console.log(fruits);
//shift,unshift are slower than pop,push

//splice: remove an item by index position
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);

fruits.splice(1, 1); // 원하는 인덱스만 지정하고 몇개를 지울지 설정안하면 모두지움.
console.log(fruits);
fruits.splice(1, 1, '사과', '수박');//지우고 그자리에 채워 넣는다.
console.log(fruits);

//combine two arrays
const fruits2 = ['배', '코코넛'];
const newFuits = fruits.concat(fruits2);//concat : combine
console.log(newFuits);

///5. Searching
// find the index
//여기부터 다시시작