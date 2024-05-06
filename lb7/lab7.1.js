function checkNumber(num) {
    // Перевірка, чи є аргумент числом
    if (typeof num !== 'number' || isNaN(num)) {
        return ''; // Повертаємо пусту строку, якщо аргумент не є числом
    } else {
        // Перевірка, чи є число парним чи не парним
        if (num % 2 === 0) {
            return 'Парне число';
        } else {
            return 'Непарне число';
        }
    }
}

// Приклад використання функції
console.log(checkNumber(5));  // Виведе: "Непарне число"
console.log(checkNumber(10)); // Виведе: "Парне число"
console.log(checkNumber('abc')); // Виведе: ""
