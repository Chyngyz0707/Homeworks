//Дано целое число N. (Смотреть в задание).  Вычислить с точностью 2 знака после запятой. Где n!

 let n = Number(prompt());

 function factNum(n) {
     return (n != 1) ? n * factNum(n - 1) : 1;
 }
  
 console.log(factNum(n));