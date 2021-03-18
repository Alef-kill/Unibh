/* 
    19) Substitua o valor do meio por “Axé”. Seu código para encontrar 
    o valor do meio devefuncionar para qualquer array de tamanho par, 
    faça a verificação com um IF.
*/

const array = ["Rock", "Pagode"];

array.push("Funk");

if (array.length % 2 === 0) {
    const index = array.length / 2;
    array[index] = "Axé";
    console.log(array);
} else {
    console.log('o array não tem um meio exato!')
}