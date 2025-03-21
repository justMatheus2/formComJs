document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");
  const mensagem = document.getElementById("mensagem");

  validarCampo(nome);
  validarCampo(email);
  validarCampo(telefone);
  validarCampo(mensagem);
});

function validarCampo(input) {
  const valor = input.value.trim();
  const parent = input.parentElement;

  if (valor === "") {
    parent.classList.remove("success");
    parent.classList.add("error");
  } else {
    parent.classList.remove("error");
    parent.classList.add("success");
  }
}
