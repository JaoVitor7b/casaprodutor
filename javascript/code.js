document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Impedir o envio padrão do formulário

  // Capturar os valores dos campos
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("mensagem").value;

  // Montar a mensagem que será enviada no WhatsApp
  var mensagemWhatsApp = "Novo Feedback\n\n" +
                         "Nome: " + nome + "\n" +
                         "Email: " + email + "\n" +
                         "Mensagem: " + mensagem;

  // Codificar a mensagem para a URL
  var mensagemCodificada = encodeURIComponent(mensagemWhatsApp);

  // Número do WhatsApp da loja (substitua pelo seu número)
  var numeroWhatsApp = "5513997567000";  // Exemplo de número, use o seu

  // Criar o link de redirecionamento para o WhatsApp
  var urlWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + mensagemCodificada;

  // Redirecionar para o WhatsApp com a mensagem
  window.open(urlWhatsApp, "_blank");
});
