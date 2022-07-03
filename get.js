const params = new URLSearchParams(window.location.search)
var user = params.get('user')
var password = params.get('password')
var mensagens = {
    "mensagem_sucesso": "My full name is Raphaela Guimarães de Araújo dos Santos. I want this job!",
    "mensagem_falha": "Wrong credentials."
}
function valida() {
    var output = document.getElementById('output');
    if (user == 'dashcommerce' && password == 'chooseMe') {
        output.innerHTML = mensagens.mensagem_sucesso;
    }
    else {
        output.innerHTML = mensagens.mensagem_falha;
    }
}