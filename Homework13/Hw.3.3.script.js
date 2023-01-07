//Дано 3 целых числа. Вывести их в порядке возрастания. 

let arr = [];
 for(let i = 0; i < 3; i++ ){
    let nm = Number(prompt());
     arr.push(nm);
 }
 alert(arr.sort());