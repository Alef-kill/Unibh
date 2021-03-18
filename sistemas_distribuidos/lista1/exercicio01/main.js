/* 
    1 - Crie um array de notas e calcule a média de todas essas notas e 
    exiba no console.
*/

const array = [
    {name: 'Alef', nota: 10},
    {name: 'Luana', nota: 10},
    {name: 'Catarina', nota: 10},
]

function media(array) {
    let totalSomaNotas = 0;

    array.forEach(item => {
        totalSomaNotas = totalSomaNotas + item.nota;
    })

    let result = totalSomaNotas / array.length;

    console.log("A media entre os(as) alunos(as) é: " +result)
};

media(array);
