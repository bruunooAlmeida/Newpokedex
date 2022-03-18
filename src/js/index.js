/*
quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão do pokémon

precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
-remover a classe ativo que marca o pokémon selecionado
-adicionar a classe ativo no item da lista selecionado 
*/


// precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

    pokemon.addEventListener('click', () => {
        //remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')        
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado 
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})

//const  fetchPokemon = () =>{

    async function fetchPokemon(){
    let string;
    
    for (let i = 1; i <= 151; i++) {
    
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + i + '/' , {
            method: 'GET',
            headers :{
                'Accept': 'application/json text/plain',
                'Content-type':'appplication/json'
            }
        });
       

        if (response.ok) { // if HTTP-status is 200-299            
            let pokemon = await response.json(); // read response body and parse as JSON
            //console.log(pokemon);
            //console.log(pokemon.types[0].type.name);
            gerarCard(pokemon.id , pokemon.name, pokemon.types[0].type.name, pokemon.sprites.front_default);
            //console.log(pokemon.name,pokemon.id,);
            //gerarDiv(pokemon.id , pokemon.name, 'plant', pokemon.sprites.front_default);
            //gerarLista(pokemon.id ,pokemon.name ,pokemon.sprites.front_default);
        
        } else {
            alert("HTTP-Error: " + response.status);    
        }   
        
        }
    
}

fetchPokemon()

const gerarLista = (id,name,sprites) =>{    
    
    var nav = document.getElementById("navegador");
    
    
    var linode = document.createElement("li");
    linode.className = (id == 1 ?"pokemon ativo":"pokemon");
    
    var img = document.createElement('img');
    x.setAttribute("width", "100%");
    img.setAttribute("src", sprites);

    newSpan    = document.createElement('p');  
    newSpanTxt = document.createTextNode('teste');

    newSpan.appendChild(newSpanTxt)
    linode.appendChild(img)
    linode.appendChild(newSpan)
    nav.appendChild(linode);
           
}

const gerarCard = (id ,name,type,sprites) =>{
/*<div class="card">
    <img src="src/imagens/cabeca-bulbasaur.png" alt="Avatar" style="width:100%">
    <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
    </div>
    </div>
*/ 
    const bodyEl = document.querySelector('body')
    const node = document.createElement('div');  

    newcardpokemon  = document.createElement('div');      
    newcardpokemon.className = 'card'

    var img = document.createElement('img');
    img.setAttribute("width", "100%");
    img.setAttribute("src", sprites);         
    
    container  = document.createElement('div');      
    container.className = 'container';

    newh2 = document.createElement('h2');  
    newb = document.createElement('b');  
    newbtxt = document.createTextNode('#' + id + ' ' +  name);
    newb.appendChild(newbtxt)

    newh2.appendChild(newb)
    
    newp    = document.createElement('p');  
    newTxt = document.createTextNode(type);

    newp.appendChild(newTxt);
    container.appendChild(newh2);
    container.appendChild(newp);
    
    newcardpokemon.appendChild(img);  
    newcardpokemon.appendChild(container);  
    
    document.getElementById("cardIni1").appendChild(newcardpokemon);
    //document.getElementsByTagName('body')[0].appendChild(newcardpokemon);

    //bodyEl.appendChild(newcardpokemon);
    //document.getElementById(bodyEl).appendChild(newcardpokemon);


}
const gerarDiv = (id ,name,type,sprites) =>{
    
    const bodyEl = document.querySelector('body')
    const node = document.createElement('div');  
    console.log(type);
    const pokedexEl = document.querySelector('pokedex');

    /*
              <div class="cartao-pokemon tipo-agua" id="cartao-gyarados">
               <div class="cartao-topo">
                    <div class="detalhes">
                         <h2 class="nome">Gyarados</h2>
                         <span>#022</span>
                    </div>

                    <span class="tipo">água</span>

                    <div class="cartao-imagem">
                         <img src="src/imagens/gyarados.png" alt="gyarados" />
                    </div>
                </div>                          
          </div>
    */

    newcardpokemon  = document.createElement('div');      
    newcardpokemon.className = (id == 1 ?"cartao-pokemon tipo-" + type + ' aberto':"cartao-pokemon tipo-" + type ); 
    newcardpokemon.id = 'cartao-' + name;   
    newcardTopo     = document.createElement('div');  
    newcardTopo.className = "cartao-topo";
    
    newcarddetalhes = document.createElement('div');  
    newcarddetalhes.className = "detalhes";
    
    newh2 = document.createElement('h2');  
    newh2.className = "nome";
    newh2Txt = document.createTextNode(name);
    newh2.appendChild(newh2Txt)

    newSpan    = document.createElement('span');  
    newSpanTxt = document.createTextNode(type);

    newSpan.appendChild(newSpanTxt);
    
    newcarddetalhes.appendChild(newh2);
    newcarddetalhes.appendChild(newSpan);

    newTipo         = document.createElement('div');  
    newTipo.className = 'tipo';
    
    var img = document.createElement('img');
    img.setAttribute("src", sprites);         

    newImagem            = document.createElement('div');  
    newImagem.className  = "cartao-imagem";
    
    newImagem.appendChild(img);

    newTipo.appendChild(newImagem);
    newcarddetalhes.appendChild(newTipo);

    newcardTopo.appendChild(newcarddetalhes);
    newcardpokemon.appendChild(newcardTopo);

    document.getElementById("cardIni").appendChild(newcardpokemon);
    //divAtual = document.getElementById("cartoes-pokemon");


    //newCardPokemonS.appendChild(newcardpokemon);             
    
    //var divAtual = document.getElementById("cartao-pikachu");
    //document.body.insertBefore(newCardPokemonS,divAtual);
}

