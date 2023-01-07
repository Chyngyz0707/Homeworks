//Пользователь вводит произвольное число N. Далее программа просит ввести N раз числа на каждый ввод, выводится alert с сообщением что число четное (если делится на 2 без остатка) или нечетное.

 let msn = "Число четное" ;
 let msn1 = "Число нечетное" ;

 function ifLoop() {

     let howMany = Number(prompt());
     if (howMany > 0) {
         for (let i = 0; i < howMany; i++) { 
             let num = Number(prompt());           
             if (num%2 == 0) alert(msn);
             else if (num%2 != 0) alert(msn1);
         }
     }
     else { 
         alert("Введите число больше чем ноль");
     }    
 }

 console.log(ifLoop());


