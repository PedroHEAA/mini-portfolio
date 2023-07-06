/*

    OBJETIVO - quando clicarmos na tab temos que mostrar o conteúdo da tab que foi clicada pelo usuário e esconder o conteúdo da tab anterior

  - passo 1 - dar um jeito de pegar os elementos que representam as tabs no HTML
  - passo 2 - dar um jeito de identificar o clique no elemento da tab
     - passo 3 - quando o usuário clicar, desmarcar a tab selecionada
    - passo 4 - marcar a tab clicada como selected
    - passo 5 - esconder o conteúdo anterior
    - passo 6 - mostrar o conteúdo da tab selecionada
*/

// - passo 1 - dar um jeito de pegar os elementos que representam as tabs no HTML

const tabs = document.querySelectorAll(".tab");

//- passo 2 - dar um jeito de identificar o clique no elemento da tab
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {

    if(tab.classList.contains("selected")){
        return;
    }

    selecionartab(tab);
    mostrarConteudoDatab(tab);
  });
});

function selecionartab(tab) {
  //- passo 3 - quando o usuário clicar, desmarcar a tab selecionada
  const tabselecionada = document.querySelector(".tab.selected");
  tabselecionada.classList.remove("selected");
  // - passo 4 - marcar a tab clicada como selected
  tab.classList.add("selected");
}

//- passo 5 - esconder o conteúdo anterior
function mostrarConteudoDatab(tab) {
  const informacaoSelecionada = document.querySelector(
    ".information.selected"
  );
  informacaoSelecionada.classList.remove("selected");
  //- passo 6 - mostrar o conteúdo da tab selecionada
  const idDaInformacaoDatab = `information-${tab.id}`;
  console.log(idDaInformacaoDatab);

  const informacaoASerMostrada = document.getElementById(idDaInformacaoDatab)
  informacaoASerMostrada.classList.add("selected");
}

