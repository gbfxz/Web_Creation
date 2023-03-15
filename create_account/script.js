const nodemailer = require('nodemailer');

// Configurações do transportador de e-mail
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'seu_email@example.com',
    pass: 'sua_senha',
  },
});

// Função para enviar o e-mail de verificação
function enviarEmailVerificacao(email) {
  const mailOptions = {
    from: 'seu_email@example.com',
    to: email,
    subject: 'Verificação de e-mail',
    html: '<p>Por favor, clique no link abaixo para verificar seu e-mail:</p><a href="https://sua_pagina_de_verificacao.com">Verificar e-mail</a>',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('E-mail de verificação enviado: ' + info.response);
    }
  });
}

// Função para redirecionar o usuário para a página de espera
function redirecionarParaEspera() {
  window.location.href = 'https://sua_pagina_de_espera.com';
}
