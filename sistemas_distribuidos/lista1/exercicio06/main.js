/* 
    6) Peça ao usuário para digitar vários nomes. Exiba na tela todos os 
    nomes digitados, porém de maneira invertida (do último para oprimeiro).
*/


let listNames = [];
let sair = "";

do {
    const inputNames = prompt('Digite varios nomes (digite 0 para sair)');
    
    if(inputNames === "0"){
        sair = inputNames;
    } else {
        listNames.push(inputNames);
    } 
    
} while (sair !== "0");

console.log(listNames.reverse());


