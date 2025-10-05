const dados = [
  {
    id: 1,
    nome: "República Horizonte",
    descricao: "Ambiente tranquilo e organizado, próximo à UFMG.",
    preco: "R$ 700/mês",
    localizacao: "Bairro Pampulha, Belo Horizonte - MG",
    imagem: "https://picsum.photos/id/1018/600/400",
    detalhes:
      "A República Horizonte oferece quartos individuais mobiliados, cozinha compartilhada, internet de alta velocidade e área de lazer. Ideal para estudantes da UFMG, com transporte público a 2 minutos de distância."
  },
  {
    id: 2,
    nome: "República Minas Boa",
    descricao: "Casa espaçosa com clima familiar e quartos amplos.",
    preco: "R$ 650/mês",
    localizacao: "Bairro Santa Efigênia, Belo Horizonte - MG",
    imagem: "https://picsum.photos/id/1025/600/400",
    detalhes:
      "A República Minas Boa possui 5 quartos, 3 banheiros, área externa com churrasqueira e lavanderia. Próxima a bares, supermercados e transporte público."
  },
  {
    id: 3,
    nome: "República Central BH",
    descricao: "Localização privilegiada no coração de BH.",
    preco: "R$ 800/mês",
    localizacao: "Centro, Belo Horizonte - MG",
    imagem: "https://picsum.photos/id/1035/600/400",
    detalhes:
      "República moderna com quartos individuais, cozinha equipada e áreas de convivência. Próxima a faculdades particulares e pontos de ônibus."
  }
]


document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("lista-republicas");
    if (container) {
        container.innerHTML = "";

        dados.forEach(rep => {
        const col = document.createElement("div");
        col.className = "col-12 col-md-6 col-lg-6";
        col.innerHTML = `
            <div class="card h-100">
            <img src="${rep.imagem}" class="card-img-top" alt="${rep.nome}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${rep.nome}</h5>
                <p class="card-text">${rep.descricao}</p>
                <p class="mt-auto"><strong>${rep.preco}</strong></p>
                <a href="pages/detalhes.html?id=${rep.id}" class="btn btn-success w-100 mt-3">Ver detalhes</a>
            </div>
            </div>
        `;
        container.appendChild(col);
        });
    }
});


const detalheContainer = document.getElementById("detalhe-republica");
if (detalheContainer) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const republica = dados.find(r => r.id === id);

    if (republica) {
      detalheContainer.innerHTML = `
        <div class="card mb-4">
          <img src="${republica.imagem}" class="card-img-top" alt="${republica.nome}">
          <div class="card-body">
            <h2 class="card-title">${republica.nome}</h2>
            <p class="text-muted">${republica.localizacao}</p>
            <p class="mb-2"><strong>Preço:</strong> ${republica.preco}</p>
            <p>${republica.detalhes}</p>
            <a href="../index.html" class="btn btn-secondary mt-3">Voltar</a>
          </div>
        </div>
      `;
    } else {
      detalheContainer.innerHTML = `
        <div class="alert alert-danger">República não encontrada.</div>
      `;
    }
}
