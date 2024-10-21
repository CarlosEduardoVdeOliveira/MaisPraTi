const formContact = document.getElementById("form-contact");
const spanError = document.querySelectorAll("#form-contact span")


formContact.addEventListener("submit", function(event) {
  event.preventDefault();

  clearErrors();

  let isValid = true;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const telephone = document.getElementById("telephone").value.trim();
  const message = document.getElementById("message").value.trim();

  const templateParams = {
    name: this.name.value,
    email: this.email.value,
    telephone: this.telephone.value,
    message: this.message.value,
  };

  if (name === "") {
    displayError("name-error", "Por favor, insira seu nome.");
    isValid = false;
  }

  // Validação do email
  if (email === "") {
    displayError("email-error", "Por favor, insira seu email.");
    isValid = false;
  } else if (!validateEmail(email)) {
    displayError("email-error", "Por favor, insira um email válido.");
    isValid = false;
  }

  // Validação do telefone
  if (telephone === "") {
    displayError("phone-error", "Por favor, insira seu telefone.");
    isValid = false;
  } else if (!validatePhone(telephone)) {
    displayError("phone-error", "Por favor, insira um telefone válido.");
    isValid = false;
  }

  // Validação da mensagem
  if (message === "") {
    displayError("message-error", "Por favor, insira sua mensagem.");
    isValid = false;
  }

  // Se o formulário for válido, pode enviar
  if (isValid) {
    sendMail(templateParams)
    clearInputs();
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
  return re.test(phone);
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

function clearInputs(){
  const inputs = document.querySelectorAll("form input");
  const message = document.querySelector("form textarea");
  inputs.forEach(input => input.value = "");
  message.value = "";
}

function sendMail(templateParams){
  emailjs.send('service_bpsj5kr', 'template_wosqcac', templateParams)
    .then(function(response) {
      Toastify({
        text: "Mensagem enviada.",
        className: "success",
        style: {
          background: "#20d147",
        }
      }).showToast();
      return (response.status, response.text)

    }, function(error) {
      Toastify({
        text: error,
        className: "error",
        style: {
          background: "#d93025",
        }
      }).showToast();
    });
}