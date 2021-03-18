/* 
    4 - Peça ao usuário para digitar 5 números em uma caixa de texto,
    separados por vírgula, Verifique qual é o maior número e exiba-o.
*/

let contador = 0;
let listNotas = [];

const inputUser = prompt("Digite as notas separadas por vírgulas");

listNotas = inputUser.split(',').map(item => Number(item));

console.log(Math.max(...listNotas));

