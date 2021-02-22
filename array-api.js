'use strict'
// Q1. make a string out of an array
//'join' : array to string
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(','); //token 인자를 받을수도 안받을 수도 있다.
    console.log(result);
}
// Q2. make a array out of a string
//'split' : string to array(with 구분자)
{
    const fruits = '사과,키위,바나나,체리';
    const result = fruits.split(','); //구분자 스트링, 리미트 사이즈 정할수 있다.
    console.log(result);
}
// Q3. make this array look like this: [5, 4, 3, 2, 1]
//'reverse' : 거꾸로 정렬
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse(); //array에 바로 저장됨
    console.log(result);
}
// Q4. make new array without the first two elemts
//'slice' : 연속배열 분리
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); //시작배열,끝 배열
    console.log(array); //array자체에 저장안됌
    console.log(result);
}
console.clear();
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];
// Q5. find a strudent with the score 90
//'find API' : 조건에 맞는 처음 원소 추출  : 콜백함수 만들어야함 : 모든 인자를  순서대로 돌려서 있으면 true 없으면 false리턴 : false받으면 멈춤
{
    //arrow fn 안쓰는 모양

    // const result = students.find(function (student) {
    //     return student.score === 90;
    // });

    //arrow fn 쓴는 모양
    const result = students.find((student) => student.score === 90);
    console.log(result);

}

// Q6. make an array of enrolled students
//'filter' : 조건에 맞는 여러가지 원소 추출
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
//'map' : 콜백함수에서 배열에서의 인자를 이용해서 새로운 배열값을 만든다.(기본적으로 모든 인자를)
{
    const result = students.map((student) => student.score);
    console.log(result);
}
// Q8. check if there is a student with the score lower than 50
//'some, every' : some - 콜백함수 리턴이 하나라도 true라면 true리던 every - 모든 콜백함수가 true라면 true
{
    //console.clear();
    const result = students.some((student) => student.score < 50)
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50)
    console.log(result2);
}

// Q9. compute students' average score
//'reduce' : tmp를 사용하는 느낌. prev는 이전 콜백함수의 리턴값, curr는 다음순서의 배열값
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0); //reduceRight()은 배열뒤에서부터 돌리는 함수
    console.log(result / students.length);
}

// Q10. make a string containing 50이상점수
// result should be: ' 80, 90, 66, 88'
//1.배열에서 score부분만 mapping한다.
//2.스코어배열을 50이상의 조건을 맞춘다.
//3.배열을 스트링으로 바꾼다.
{
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b) // a-b : 오름차순, b-a : 내림차순
        .join();
    console.log(result);
}

