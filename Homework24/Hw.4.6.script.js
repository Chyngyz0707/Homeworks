//НОВОЕ! Убрать лишние повторяющиеся символы в предложении
// Вводится предложение с лишними символами 
// “Write  a program   that asks the user to enter a number….”
// Вывод: “Write a program that asks the user to enter a number.”
// Подсказка 1: можно открыть цикл где надо смотреть текущий символ string[i] и следующий string[i+1]. 
//  Но можно попасть в ошибку при string[i+1] что пытается посмотреть символ которого уже нет в предложении
// (вне размера предложения, out of index), тогда можно сократить рост счетчика
//  с i<string.length на i<string.length-1 for (let i=0; i<string.length-1; i++){}


 let string = "Write  a program   that asks the user to enter a number…." 
 let string2 = "Write  a program   that asks the user to enter a number…."
 let arr = [];
 let newArray =[];
 let prev = arr[i-1];
 let current = arr[i];


 for (let i=0; i<string.length-1; i++) {
     arr.push(string);
     let prev = arr[i-1];
     let current = arr[i];
    
    
    if (current === prev) {
        newArray = arr.slice(prev);
     }

     newArray = arr.slice(current);
     arr = newArray;
 }
 console.log(arr);