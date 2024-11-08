function calculate(operation) {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  const resultField = document.getElementById('result');

  if (isNaN(number1) || isNaN(number2)) {
      alert("Помилка: Введіть коректні числа.");
      return;
  }

  let result;
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
              alert("Помилка: Ділення на нуль неможливе.");
              return;
          }
          result = number1 / number2;
          break;
  }

  resultField.value = Math.round(result * 100) / 100;
}

function clearAll() {
  document.getElementById('number1').value = '';
  document.getElementById('number2').value = '';
  document.getElementById('result').value = '';
}

function clearLast() {
  const number1 = document.getElementById('number1');
  const number2 = document.getElementById('number2');
  const resultField = document.getElementById('result');

  if (resultField.value) {
      resultField.value = '';
  } else if (number2.value) {
      number2.value = number2.value.slice(0, -1);
  } else if (number1.value) {
      number1.value = number1.value.slice(0, -1);
  }
}
