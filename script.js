// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Verificar os itens selecionados previamente no localStorage
  const itens = [
    "vassoura", "rodo", "pazinha", "panos-de-chao", "panos-de-limpeza",
    "baldes", "bacia", "varal", "pregadores", "maquina-de-lavar", "vaporizador",
    "aspirador-de-po", "tabua-de-passar", "balde-de-lixo", "extensao-eletrica", "escadinha",
    "cama", "edredom", "jogo-de-cama", "ar-condicionado", "protetor-de-colchao", "travesseiros",
    "fronha-de-travesseiro", "coberta", "cabides",
    "cooktop", "coifa", "mesa", "geladeira", "microondas", "liquidificador", "sanduicheira",
    "forno", "panela-eletrica", "air-fray", "churrasqueira-eletrica", "maquina-de-cafe", "bebedouro",
    "jogo-de-copo", "jogo-de-talheres", "jogo-de-pratos", "panos-de-prato", "panos-de-chao-cozinha",
    "jogo-de-xicara", "conchas", "jogo-de-panelas", "panela-de-pressao", "jogo-de-doces", "jarras",
    "triturador-de-alho", "lixeira-cozinha", "tabua-para-cortar", "pegador-de-macarrao", "pegador-de-salada",
    "porta-talas", "Jogo de peças para doces", "Jarras"
  ];

  itens.forEach(item => {
    const checkbox = document.getElementById(item);
    if (checkbox) {
      // Verifica se o item já foi escolhido anteriormente
      if (localStorage.getItem(item) === "true") {
        checkbox.checked = true;
        checkbox.disabled = true;
      }

      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          localStorage.setItem(item, "true");
          checkbox.disabled = true;
        } else {
          localStorage.removeItem(item);
          checkbox.disabled = false;
        }
      });
    }
  });
});
