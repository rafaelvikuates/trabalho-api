let listaPersonagens;
let personagemAtual = 0;

function obterPersonagens() {
    fetch("https://rickandmortyapi.com/api/character?page=19", {
        method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
        listaPersonagens = data.results;
        exibirPersonagens(listaPersonagens);
    })
    .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
    });
}
obterPersonagens();

function exibirPersonagens(personagens) {
    let lugar = document.querySelector("#lista-personagens");
    let saida = "";

    for (let personagem of personagens) {
        saida += `
            <div class="cartao-personagem">
                <img src="${personagem.image}" alt="${personagem.name}">
                <h2>${personagem.name}</h2>
                <p><strong>Status:</strong> ${personagem.status}</p>
                <p><strong>Espécie:</strong> ${personagem.species}</p>
                <p><strong>Tipo:</strong> ${personagem.type || 'Desconhecido'}</p>
                <p><strong>Origem:</strong> ${personagem.origin.name}</p>
                <p><strong>Localização:</strong> ${personagem.location.name}</p>
            </div>
        `;
    }
    lugar.innerHTML = saida;
}
