//Пользователь вводит свое имя и число (место буквы). Надо вывести какая буква находится под этим номером (числом).

/*let polzovatel = "Tomas";
let Symbol = polzovatel;
let keyName = [2];
for(let i = 0; i > polzovatel.length; i++) {
         keyName.push(polzovatel);
         if(keyName == i) {
             alert(polzovatel[i]);
         }
     }*/



     var nameString = prompt("Введите имя");
     var indexString = prompt("Введите число");
     var index = parseInt(indexString);

     //var indexForNormalPeople = index -1;
     //var bukva = nameString[indexForNormalPeople];

     var bukva = nameString[index ];
     //alert("Вае имя" + nameString + "число которое вы ввели" + index + "ваша буква = " + буква);

     alert( "ваша буква = " + bukva);


