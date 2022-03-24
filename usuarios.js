
function getUsuarios(url) {
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

let usuarios = getUsuarios('http://localhost:8080/user/list');

let divUsuarios = document.getElementById("usuarios");

divUsuarios.innerHTML = JSON.stringify(usuarios);

