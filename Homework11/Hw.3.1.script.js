//Даны 3 целых числа. Вывести наибольшее из них

/*let a = Number(prompt());
 let b = Number(prompt());
 let c = Number(prompt());

if(a > b && a > c ) {
     alert("a > b & c"); // 77 - 8 - 33
 }
 else if(b > a && b > c ) {
     alert("b > a & c"); // 8 - 77 - 33
 }
 else if(c > a && c > b ) {   
    
    alert("c > a & b"); // 8 - 33 - 77
 }*/

 var firstNumberString = prompt(" Введите первое число "); 
 var secondNumberString = prompt(" Введите второе число ");
 var thirdNumberString = prompt(" Введите третье число ");

 var firstNumber = parseInt(firstNumberString);
 var secondNumber = parseInt(secondNumberString);
 var thirdNumber = parseInt(thirdNumberString);

 var maxNumber =  firstNumber;

  if (maxNumber < secondNumber ){
    maxNumber = secondNumber 
  }
  if(maxNumber < thirdNumber ){
    maxNumber = thirdNumber 
  }
  alert ("Максимальное число = " + maxNumber);
 
 