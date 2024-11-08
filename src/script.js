// Змінна для зберігання поточної операції
let operation = '';

// Функція для додавання цифр до активного поля
function addDigit(digit) {
  const num1 = document.getElementById('number1');
  const num2 = document.getElementById('number2');

  // Визначаємо, в яке поле буде додаватися цифра
  if (document.activeElement === num2) {
    num2.value += digit;  // Якщо активне друге поле, додаємо цифру до нього
  } else {
    num1.value += digit;  // Інакше додаємо до першого поля
  }
}

// Функція для додавання операцій
function calculate(op) {
  const num1 = document.getElementById('number1').value.trim();
  const num2 = document.getElementById('number2').value.trim();
  
  if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
    return;
  }

  operation = op;
}

// Функція для обчислення результату
function equals() {
  const num1 = document.getElementById('number1').value.trim();
  const num2 = document.getElementById('number2').value.trim();
  const resultDiv = document.getElementById('result');

  if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Помилка: введіть коректні числа в обидва поля.";
    return;
  }

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  let result;

  // Обчислення за обраною операцією
  switch (operation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      if (number2 === 0) {
        resultDiv.textContent = "Помилка: ділення на нуль.";
        return;
      }
      result = number1 / number2;
      break;
    case '%':
      result = (number1 * number2) / 100;
      break;
    default:
      resultDiv.textContent = "Невідома операція.";
      return;
  }

  resultDiv.textContent = `Результат: ${result.toFixed(2)}`;
}

// Функція для очищення полів
function clearFields() {
  document.getElementById('number1').value = '';
  document.getElementById('number2').value = '';
  document.getElementById('result').textContent = 'Результат:';
  operation = '';
}

// Функція для видалення останнього символу
function deleteLast() {
  const num1 = document.getElementById('number1');
  const num2 = document.getElementById('number2');
  
  // Якщо друге поле активно, видаляємо з нього символ
  if (num2 === document.activeElement) {
    num2.value = num2.value.slice(0, -1);
  } 
  // Якщо перше поле активно, видаляємо з нього символ
  else if (num1 === document.activeElement) {
    num1.value = num1.value.slice(0, -1);
  }
}

// Функція для додавання дужок
function addBracket(bracket) {
  const num1 = document.getElementById('number1');
  const num2 = document.getElementById('number2');
  
  if (document.activeElement === num2) {
    num2.value += bracket;
  } else {
    num1.value += bracket;
  }
}

// Функція для додавання коми
function addComma() {
  const num1 = document.getElementById('number1');
  const num2 = document.getElementById('number2');
  
  // Перевіряємо, чи є вже кома в полі перед тим, як додати
  if (document.activeElement === num2 && !num2.value.includes('.')) {
    num2.value += '.';
  } else if (document.activeElement === num1 && !num1.value.includes('.')) {
    num1.value += '.';
  }
}
