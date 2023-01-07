//Дано четырехзначное число. Верно ли, что сумма двух крайних цифр равна сумме двух средних?

 let Num = prompt("Enter number: ");

 if((parseInt (Num[1]) + parseInt (Num[2])) === (parseInt (Num[2]) + parseInt (Num[3]))) {

     alert(true);

 } else {

     alert(false);
     
 };