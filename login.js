
var mensagens = {
    "mensagem_sucesso": "My full name is Raphaela Guimarães de Araújo dos Santos. I want this job!",
    "mensagem_falha": "Wrong credentials."
}
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    window.location.href = "dashcommercetest.html";
    if (username == "dashcommerce" && password == "chooseMe") {
        output.innerHTML = mensagens.mensagem_sucesso;
    }
    else {
        output.innerHTML = mensagens.mensagem_falha;
    }
}