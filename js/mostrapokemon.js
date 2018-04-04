function mostraPokemon(url) {
  //TO-DO:
  //  1. FAZER CONSUMO DA URL RECEBIDA COMO PARAMETRO
  //  2. TRATAR DADOS RECEBIDOS PELA URL
  //  3. CHAMAR FUNÇÃO POPULA MODAL PARA ELA ADICIONAR
  //     OS COMPONENTES HTML NO MODAL
  //  4. ABRIR MODAL (.modal) COM JAVASCRIPT
  //     (http://getbootstrap.com/docs/4.0/components/modal/#via-javascript)

  const header = new Headers();
  const init = {
    method: 'GET',
    headers: header,
    mode: 'cors'
  };

  fetch(url, init)
    .then(res => {
      return res.json();
    })
    .then(resp => {
      console.log(resp);
      const pokemon = {
        nome: resp.name,
        image: resp.sprites.back_default,
        tipo: resp.types.map(t => t.type.name),
        peso: resp.weight,
        altura: resp.height,
        id: resp.id        
      }

      populaModal(pokemon)

    })
}


// Mostrar o nome, imagem do pokemon, tipo (todos os tipos), peso, altura e id

function populaModal(pokemon) {
  console.log(pokemon);

  //TO-DO:
  //  1. CRIAR COMPONENTES PARA MOSTRAR NO MODAL 
  //     SEGUINDO O PADRÃO DO BOOTSTRAP
  //     (http://getbootstrap.com/docs/4.0/components/modal/#modal-components)
  //  2. LINKAR TODOS OS COMPONENTES COM O MODAL .modal
  //  3. SEMPRE QUE FECHAR O MODAL LIMPAR O CONTEUDO ADICIONADO

  document.querySelector('.modal').innerHTML = modal(pokemon);
  $('.modal').modal('show')

}


function modal(pokemon)  {
  return  `
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal Pokemon</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>
        <img src="${pokemon.image}">
        </p>
        <p> id: ${pokemon.id}
        <p> nome: ${pokemon.nome}
        <p> tipo: ${pokemon.tipo.join()}
        <p> peso: ${pokemon.peso}
        <p> altura: ${pokemon.altura}
      </div>
    </div>
  </div>
</div>
  `
}