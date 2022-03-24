function fazPost(url, body) {

  let request = new XMLHttpRequest();
  request.open("POST", url, true)
  request.setRequestHeader("Content-type", "application/json")
  request.send(JSON.stringify(body))

  request.onload = function() {
      console.log(this.responseText)
  }

  alert("Salvo no banco de dados");
  return request.responseText
}


function cadastraUsuario() {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;
  let endereco = document.getElementById("endereco").value;
  let cpf = document.getElementById("cpf").value;

  if (nome === '' || telefone === '' || endereco === '' || cpf === '') {
    alert("Preencha todos os campos!");
    return;
  }

  console.log(nome, telefone, endereco, cpf);

  let url = `http://localhost:8080/user/cadastro/${nome}/${telefone}/${endereco}/${cpf}`;

  let body = {};

  fazPost(url, body);
}