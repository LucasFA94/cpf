console.log("javascript carregado");

function validaCPF(cpf) {

    return true;

}

function validacao() {

    console.log("iniciando validacao CPF");
    var cpf = document.getElementById("cpf_digitado").value;//pegar o valor do cpf
    console.log(cpf);

    var resultadovalidacao = validaCPF(cpf);

    if (resultadovalidacao) {

        document.getElementById('success').style.display = "block";//caso seja verdadeiro, mostra a barra de sucesso.

    } else {
        document.getElementById('error').style.display = "block";//caso seja verdadeiro, mostra a barra de erro.
    }

}