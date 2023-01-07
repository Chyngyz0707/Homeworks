//Даны 3 вещественных числа a,b,c. Существует ли треугольник со сторонами a,b,c.

var firstNumberString = prompt(" Введите первое число "); 
 var secondNumberString = prompt(" Введите второе число ");
 var thirdNumberString = prompt(" Введите третье число ");

 var firstNumber = parseInt(firstNumberString);
 var secondNumber = parseInt(secondNumberString);
 var thirdNumber = parseInt(thirdNumberString);
 
 var triangleExist = false;

  if (firstNumber > 0 && secondNumber > 0 && thirdNumber > 0){
     if(  firstNumber + secondNumber > thirdNumber
       && firstNumber + thirdNumber > secondNumber
       && secondNumber + thirdNumber > firstNumber)
       {
        triangleExist = true;
       }
  }
  if (triangleExist) {
    alert("Треугольник существует");
  } else {
    alert("Треугольник не существует");
  }

 