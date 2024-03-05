// Исходный массив чисел
const numbers = [5, 12, 8, 130, 44];

// Функция обратного вызова для фильтрации чисел больше 10
const greaterThanTen = (number) => number > 10;

// Применение метода filter для создания нового массива
const filteredNumbers = numbers.filter(greaterThanTen);

// Вывод результата в консоль
console.log(filteredNumbers); // [12, 130, 44]
