const arr = [1,2,3,54,55,66,77,21,34,56,67];
console.log(arr.sort((a,b) => b-a));
//метод forEach - метод перебора,
//метод map, reduce, filter, map - методы модификаторы,
//методы pop, push, shift, unshift, split, join
//псевдомассивы - массивы не имеющие методов.

const arr2 = [1,2,3,54,55,66,77,21,34,56,67];

const obj = new Object();

for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr2[i];
}

