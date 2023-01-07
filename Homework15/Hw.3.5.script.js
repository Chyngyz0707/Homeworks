//Даны два целых числа. Верно ли, что они заканчиваются на одну и ту же цифру? 

const aString = prompt();
 const bString = prompt();

 function theSameLater() {
     if(aString[aString.length-1] === bString[bString.length-1]) {
         alert("Yes")
     } else {
         alert("No")
     }
 }

 theSameLater();

