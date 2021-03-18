/* 
    3 -Faça um programa que entre com cinco números e imprima o 
    quadrado de cada número (Looping).
*/

let contador = 0;
let listNotas = [];

do {
    const inputUser = prompt("Digite uma nota");
    listNotas.push(inputUser);
    contador++;
}
while(contador < 5);

if (contador >= 5){
    let somarNotas = 0;
    listNotas.forEach(item => {
        somarNotas = Number(item) + somarNotas;
    });

let resultado = somarNotas / listNotas.length;

console.log(resultado);
}
