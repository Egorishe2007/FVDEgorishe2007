// Исходный массив продаж
const sales = [
    { product: 'Телефон', price: 50000, quantity: 1 },
    { product: 'Чехол', price: 1500, quantity: 2 },
    { product: 'Зарядное устройство', price: 2500, quantity: 1 }
  ];
  
  // Функция для вычисления общей стоимости продаж
  const calculateTotalSales = (total, sale) => total + (sale.price * sale.quantity);
  
  // Применение метода reduce для вычисления общей стоимости продаж
  const totalSales = sales.reduce(calculateTotalSales, 0);
  
  // Вывод результата в консоль
  console.log(`Общая стоимость продаж: ${totalSales}`);
  