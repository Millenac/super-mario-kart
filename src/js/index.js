const listaPersonagem = document.querySelectorAll(".super-mario");

listaPersonagem.forEach(personagem => {
    personagem.addEventListener("click", () => {
        escondeCartao();

        const idNPersonagemSelecionado = mostraCartao(personagem);

        desativaPersonagem();
        ativaPersonagemSelecionado(idNPersonagemSelecionado);

    })
})

function ativaPersonagemSelecionado (idNPersonagemSelecionado){
    const ninjaSelecionado = document.getElementById(idNPersonagemSelecionado);
    ninjaSelecionado.classList.add("ativo");
}

function desativaPersonagem(){
    const PersonagemAtivo = document.querySelector(".ativo");
    PersonagemAtivo.classList.remove("ativo");
}

function mostraCartao(personagem){
    const idNPersonagemSelecionado = personagem.attributes.id.value;
    const idCartao = "cartao-" + idNPersonagemSelecionado;
    const cartaoAbrir = document.getElementById(idCartao);
    cartaoAbrir.classList.add("aberto");
    return idNPersonagemSelecionado;
}
function escondeCartao(){
    const cartaoPersonagemAberto = document.querySelector(".aberto");
    cartaoPersonagemAberto.classList.remove("aberto");
}