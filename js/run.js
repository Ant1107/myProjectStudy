const arr = [1, 2, 3, 54, 55, 66, 77, 21, 34, 56, 67];
//console.log(arr.sort((a, b) => b - a));
//метод forEach - метод перебора,
//метод map, reduce, filter, map - методы модификаторы,
//методы pop, push, shift, unshift, split, join
//псевдомассивы - массивы не имеющие методов.

const arr2 = [1, 2, 3, 54, 55, 66, 77, 21, 34, 56, 67];

// const ob = new Object();

// for (let i = 0; i < arr.length; i++) {
//     ob[arr[i]] = arr2[i];
// }

const obj = {
    weigth: '1024px',
    height: '768px',
    color: 'black',
    background: 'red',
    border: 'green'
}
// const obj2 = new Object();

// Object.assign(obj2, obj)
// console.log(obj2)

// const obj3 = JSON.parse(JSON.stringify(obj));

// console.log(obj3)

// const obj4 = {...obj};
// console.log(obj4);

// const obj5 = new Object();
// for (let key in obj) {
//     obj5[key] = obj[key];
// }

// console.log(obj5)

const objCopy = {
    weigth1: '1024px',
    height2: '768px',
    color3: 'black',
    background4: 'red',
    border5: 'green'
}

const newObj = {...obj, ...objCopy};
console.log(newObj)

