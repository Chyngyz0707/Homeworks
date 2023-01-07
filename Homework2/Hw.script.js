// /*1 Задачки математические

// Дано значение (пользователь вводит) в Фаренгейтах, вывести это же значение в Цельсии.


function result(){
    let x,y,z
  x = document.getElementById('grad').value
  x = parseInt(x);
  y = ((x-32)*5)/9;
  z =( x  + "фаренгейт"   +   y   +   "градусы" );
  document.getElementById('out').innerHTML = z;
   
  }





