// Задание 1: Использование forEach для вывода элементов массива
// Дан массив с именами: ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна']. 
// Используя метод forEach, выведите каждое имя в консоль с префиксом "Привет, ".

const names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];

names.forEach(name => console.log(`Привет, ${name}`));