// Adiciona evento de envio ao formulário
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mensagem = document.querySelector('textarea').value;
    console.log(`Nome: ${nome}, E-mail: ${email}, Mensagem: ${mensagem}`);
});
