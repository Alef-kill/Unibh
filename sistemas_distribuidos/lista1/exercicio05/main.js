/* 
    5) Peça ao usuário para digitar várias idades separadas por vírgulaem 
    um input e exiba quantas pessoas são maior de idade (18anos) e 
    quantas são menores.
*/

let contador = 0;
let listIdades = [];
let listIdadesMenor = [];
let listIdadesMaior = [];

const inputUser = prompt("Digite as notas separadas por vírgulas");

listIdades = inputUser.split(',').map(item => {
    if (item > 18){
        listIdadesMaior.push(item);
    }else {
        listIdadesMenor.push(item);
    }
});

alert("Maior de idade: " + listIdadesMaior.length);
alert("Menor de idade: " + listIdadesMenor.length);

