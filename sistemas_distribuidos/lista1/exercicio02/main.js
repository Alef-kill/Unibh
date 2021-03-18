/* 
    2)Solicite o usuário a inserção de notas via prompt e 
    calcule amédia de diversas notas digitadas em um input, 
    separados porvírgula, pelo usuário
*/

const inputUser = prompt("Digite as notas separadas por vírgulas");

const arrayWithNumberUser = inputUser.split(',');

let contador = 0;

arrayWithNumberUser.forEach(item => {
    contador = contador + parseInt(item);
    return contador;
});

const result = contador / arrayWithNumberUser.length;
console.log(result);