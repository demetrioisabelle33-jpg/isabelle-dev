// BOTÃO DE MODO CLARO E ESCURO

const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        botaoTema.textContent = "☀";
    } else {
        botaoTema.textContent = "☾";
    }

});

// ATUALIZAR O ANO AUTOMATICAMENTE

const anoAtual = document.getElementById("ano");

anoAtual.textContent = new Date().getFullYear();