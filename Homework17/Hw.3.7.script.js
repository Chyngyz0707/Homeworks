//Дано 5 целых чисел. Вывести наибольшее из них.

 let nums = [7,77,87,99, 199];
 let maxNum = nums[0];
 for(let i = 1; i < nums.length; i++){
    if (maxNum < nums[i]) {
         maxNum = nums[i];
     }
 }
 alert(maxNum)