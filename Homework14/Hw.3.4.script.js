//Дано целое число. Верно ли, что оно делится на 5 и на 7? 

let num = Number(prompt());
 let i = 0; 
 while (i != 210) {
     i++;
     if (num % 5 === 0 && num % 7 === 0 ) {
         alert(num + " Данное число делится на 5 и 7");
         num = Number(prompt());
         if(num == String("s")) {
             break;
         }        
     } 
     else {
        alert(num + " Данное число НЕ делится на 5 и 7");
         num = Number(prompt());
         if(num == String("s")) {
             break;
        }
     }
 };
