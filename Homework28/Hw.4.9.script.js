/*let stih = [
    "Бывает так",
    "Не ладится работа,",
    "И дома усидеть невмоготу.",
    "Творится рядом где-то что-то,",
    "И будто крови вкус во рту.",
]

// for (let i=0; i < stih.length; i++){
//     console.log(stih[i]);
//     for(let j=0; j< stih[i].length; j++){
//         console.log(stih[i][j]);
//     }
// }

// Считает буквы а в каждой строке
let charATotalCounter = 0;
for (let i=0; i < stih.length; i++){
    console.log(stih[i]);
     let charACounter = 0; // счетчик букв обнуляется

    for(let j=0; j< stih[i].length; j++){    // j- буквы; i- строчки;
        // console.log(stih[i][j]);
        if(stih[i][j].toLowerCase() == "б"){
            charACounter++;
            charATotalCounter++;
        }
    }

    // Результат на каждую букву
console.log("Букв 'б' всего: " + charACounter);


}
*/
//Посчитать количество артиклей в тексте. Где артикли это 'a', 'an', 'the'.
//Текст для работы:



let symbols = ['a', 'an', 'the'];

let String =`If the stars should appear one night in
a thousand years,  how would  men  believe
and  adore,  and  preserve  for  many  generations
the remembrance of the city of God?'
EMERSON


     Aton 77, director of Saro  University, thrust  out a  belligerent lower
lip and glared at the young newspaperman in a hot fury.
     Theremon 762 took that  fury in his  stride. In his earlier  days, when
his  now widely syndicated column was  only a mad idea  in a cub  reporter's
mind,  he  had  specialized  in 'impossible'  interviews.  It  had  cost him
bruises, black  eyes, and broken bones; but it had given him an ample supply
of coolness and self-confidence. So he  lowered the outthrust  hand that had
been so pointedly ignored  and calmly  waited  for the aged director to  get
over the  worst. Astronomers were queer ducks, anyway, and if Aton's actions
of the last two months meant anything; this same Aton was the queer-duckiest
of the lot.

`

let charATotalCounter = 0;


for (let i=0; i < String.length; i++){
    console.log(String[i]);
     let charACounter = 0; // счетчик букв обнуляется

    for(let j=0; j< String[i].length; j++){    // j- буквы; i- строчки;
        // console.log(stih[i][j]);
        if(String[i][j].toLowerCase() == "a","an","the"){
            charACounter++;
            charATotalCounter++;
        }
    }

     //Результат на каждую букву
//console.log("Артиклей 'a','an','the' всего: " + charACounter);

function isFound(target, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (target == arr[i]) {
            return true;
        }
    }
    return false;
}
function symbolsCount(symbols, String) {
    let arr = String.split('');
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isFound(arr[i], symbols)) {
            count++;
        }
    }
    return count;
}
}



console.log(symbolsCount(symbols, String));
