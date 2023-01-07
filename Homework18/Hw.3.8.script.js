//Расширение задачи “Пользователь вводит свое имя и число (место буквы). Надо вывести какая буква находится под этим номером (числом).”
 //Если пользователь вводит число больше чем количество букв в имени или вводит отрицательное число, выводить ссобщение что буквы под таким числом в имени нет.



 let nameText = prompt("Enter your name: ");
 let numOfkey = prompt("Enter number of key: "); // 4
 let keyOfName = []; // P e n t i u m
                     // 1 2 3 4 5 6 7 -  nm
                     // 0 1 2 3 4 5 6 -  i

 for(let i = 0; i < nameText.length; i++) {
     keyOfName.push(nameText);
     if(numOfkey == i ) {
         alert(nameText[i]);
     }
     else if (numOfkey > nameText.length-1){
         alert("Буквы под таким числом в имени нет.") 
         break;   
     }
 };

