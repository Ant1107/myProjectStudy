"use strict";

let number = 5;
const leftBorderWight = 1;

number = 10;
console.log(number);

const obj = {
    name: "John", 
    age: "25",
    isMarried: false
};

obj.name = 10;

console.log(obj);

const answers = [];
console.log(answers.length);

while (answers.length < 10) {
    answers.push(prompt("Введите ваш вопрос"));    
};
alert(answers);
console.log(answers);

