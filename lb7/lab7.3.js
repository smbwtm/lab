function sumOfSeries(n) {
    let sum = 0;
    let term = 0;

    for (let i = 1; i <= n; i++) {
        term = term * 10 + 1; // Генеруємо наступний термін ряду
        sum += term; // Додаємо термін до суми
    }

    return sum;
}

// Приклад використання функції
console.log(sumOfSeries(8));