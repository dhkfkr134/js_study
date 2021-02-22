'use strict';
//Object-oriented programming : 객체지향언어
//class : template 클래스는 템플릿
//object: instance of a class : 객체는 클레스의 인스턴스
//JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance(나중에 정리)

///1. Class declarations 클래스 정의
class Person {
    //constructor 생성자
    constructor(name, age) {
        //fields 필드
        this.name = name;
        this.age = age;

    }

    //methods 함수
    speak() {
        console.log(`${this.name}: hello`);
    }
}
// class use
const jungwon = new Person('jungwon', 25);
console.log(jungwon.name);
console.log(jungwon.age);
jungwon.speak();

///2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //js의 getter,setter는 java의 gettersetter랑 좀 다름.
    //get, set 키워드가 있다.

    get age() {
        return this._age;
    }
    set age(value) {
        //if(value<0){
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value; //유저나이를 음수로 지정하면 0으로 바꿔줌

    }
}

const user1 = new User('jungwon', 'Kim', -1);
console.log(user1.age);

///3. Fields (public, private)
class Experiment {
    publicField = 2; // 그냥필드는 그냥 쓰면되고
    #privateField = 0; // privateField는 헤시테그를 붙임
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

///4. Static properties and methods
//클래스자체에 달린 필드, 객체로 접근할 수 없다.
class Article {
    static publisher = 'je ne suis pas etudier!';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher)
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

///Inheritance 상
//a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`그려 ${this.color} 색`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw(); //부모꺼를 기본적으로쓰고
        console.log('draw overriding'); //overriding해서 추가하는거
    }
    getArea() {
        return (this.width * this.height / 2);
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

///6. Class checking: instanceOf
//rectangle instanceof Rectangle -> T
//triangle instanceOf Shape -> T
//triangle instanceOf Rectangle -> F
//triangle instanceOf Object -> T