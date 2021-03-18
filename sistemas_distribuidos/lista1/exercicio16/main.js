/* 
  16)Escreva um bloco de código que irá perguntar através do prompt 
  a identificação dovisitante:
  a)Se o visitante digitar “Admin” abra um prompt perguntando a senha. 
  Se oinput for vazio ou apertar Esc exiba um alerta com “Cancelado”, 
  se for umaoutra string exiba um alerta com a mensagem “Não conheço você”.
  
  b)A senha deverá ser checada da seguinte maneira:
    i)Se for igual a “UniBH” - exiba um alerta “Bem vindo”,
    ii)Se for uma outra string - exiba um alerta “Senha incorreta!”)
    iii)Se for vazio ou cancelado - exiba “Cancelado”
*/

const typeUser = prompt("Qual a sua identificação?");

if (typeUser === "Admin") {

  const userSenha = prompt("Agora digite a sua senha");
  
  if (userSenha === "UniBH") {
    alert('bem vindo');
  } else if(userSenha !== "UniBH") {
    alert('senha incorreta');
  } else {
    alert('cancelado');
  }

} else if (typeUser === "" || typeUser === null || typeUser === undefined) {
  alert("cancelado");
} else {
  alert("eu não conheço você");
}
