const formContact = document.getElementById("form-contact");
const errorFormSpan = document.querySelectorAll("#form-contact span")

formContact.addEventListener("submit", function(event) {
  event.preventDefault();

  clearErrors();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const telephone = document.getElementById("telephone").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  if (name === "") {
    displayError("nameError", "Por favor, insira seu nome.");
    isValid = false;
  }

  // Validação do email
  if (email === "") {
    displayError("emailError", "Por favor, insira seu email.");
    isValid = false;
  } else if (!validateEmail(email)) {
    displayError("emailError", "Por favor, insira um email válido.");
    isValid = false;
  }

  // Validação do telefone
  if (telephone === "") {
    displayError("phoneError", "Por favor, insira seu telefone.");
    isValid = false;
  } else if (!validatePhone(telephone)) {
    displayError("phoneError", "Por favor, insira um telefone válido.");
    isValid = false;
  }

  // Validação da mensagem
  if (message === "") {
    displayError("messageError", "Por favor, insira sua mensagem.");
    isValid = false;
  }

  // Se o formulário for válido, pode enviar
  if (isValid) {
    // Aqui você pode adicionar a lógica para enviar o formulário
    alert("Formulário enviado com sucesso!");
    // this.submit(); // Descomente esta linha para enviar o formulário
  }
});

// Função para validar email
function validateEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}

// Função para validar telefone (apenas números)
function validatePhone(phone) {
  const re = /^\d{10,15}$/;
  return re.test(telephone);
}

// Funções para mostrar e limpar mensagens de erro
function displayError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach(el => el.textContent = "");
}
