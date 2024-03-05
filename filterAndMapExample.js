// Исходный массив объектов
const people = [
    { name: 'Иван', age: 23 },
    { name: 'Мария', age: 18 },
    { name: 'Алексей', age: 32 },
    { name: 'Ольга', age: 24 },
    { name: 'Сергей', age: 17 },
    { name: 'Анна', age: 21 }
  ];
  
  // Функция для фильтрации людей старше 18 лет
  const overEighteen = (person) => person.age > 18;
  
  // Функция для преобразования объекта в строку в формате "Имя (возраст лет)"
  const formatPerson = (person) => `${person.name} (${person.age} лет)`;
  
  // Применение метода filter для фильтрации людей старше 18 лет
  const adults = people.filter(overEighteen);
  
  // Применение метода map для преобразования каждого объекта в строку
  const formattedAdults = adults.map(formatPerson);
  
  // Вывод результата в консоль
  console.log(formattedAdults); // ['Иван (23 лет)', 'Алексей (32 лет)', 'Ольга (24 лет)', 'Анна (21 лет)']
  