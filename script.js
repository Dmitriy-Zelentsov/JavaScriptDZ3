// Задание 1 Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const cubingNumber = (number) => number ** 3;
const number1 = 2;
const number2 = 3;
console.log(
  `Сумма чисел ${number1} в кубе и ${number2} в кубе равна ${
    cubingNumber(number1) + cubingNumber(number2)
  }`
);
