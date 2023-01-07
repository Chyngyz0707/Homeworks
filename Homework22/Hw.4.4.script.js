//Последовательность Фибоначчи определяется следующим образом: первые два члена последовательности равны 1, а каждый следующий равен сумме двух предыдущих. Т.е. числами Фибоначчи являются 1,1,2,3,5,8,13,… . Вводится номер N. Определить N-е по порядку число Фибоначчи.


 function fibonacci(num) {
    const result = [0, 1];
  
    for(let i = 2; i <= num; i++) {
    
      const prevNum1 = result[i - 1];
      const prevNum2 = result[i - 2];
      result.push(prevNum1 + prevNum2);
      
    }
    
    return result[num];
    
  }
  console.log(fibonacci(10));

  