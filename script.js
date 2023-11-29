const form = document.getElementById("form");
const username = document.getElementById("username");
const telefone = document.getElementById("telefone");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
var x = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  if (x == 0) {
    window.location.replace("return.html");
  }
});

function checkInputs() {
  const usernameValue = username.value;
  const telefoneValue = telefone.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
    x += 1
  } else {
    setSuccessFor(username);
  }

  if (telefoneValue === "") {
    setErrorFor(telefone, "O telefone é obrigatório.");
    x += 1
  } else {
    setSuccessFor(telefone);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
    x += 1
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    x += 1
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
    x += 1
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
    x += 1
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

