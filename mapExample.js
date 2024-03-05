// Исходный массив чисел
const numbers = [1, 2, 3, 4, 5];

// Функция обратного вызова для умножения числа на 10
const multiplyByTen = (number) => number * 10;

// Применение метода map для создания нового массива
const multipliedNumbers = numbers.map(multiplyByTen);

// Вывод результата в консоль
console.log(multipliedNumbers); // [10, 20, 30, 40, 50]
