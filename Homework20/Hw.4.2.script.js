//Дано целое положительное число N. Найти сумму квадратов всех натуральных чисел от 0 до N.

  let NumberString = prompt("Введите первое число");
  let N = parseInt(NumberString);

  let squareSum = 0;

  for(let count = 0; count <= N; count++) {
     if(count > 0) {
         let square = count * count;
         squareSum = squareSum + square;
     }
  }

 alert("Сумма квадратов до N=" + N + "равна = " + squareSum);