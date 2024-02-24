// Este código lista automaticamente personagens de Star Wars ao carregar a página

// Aguarda o carregamento completo da página antes de executar o código
document.addEventListener('DOMContentLoaded', ()=>{

    // Define o URL base da API que será utilizada
    const baseURL = "https://swapi.dev/api/people/" 

    // Função assíncrona para buscar dados da API
    fetch(baseURL)
    .then((response)=>{
        // Verifica se a resposta da requisição está OK (200)
        if(!response.ok){
            throw new Error('Erro de rede! Código:' +response.status)
        }
        // Transforma a resposta em formato JSON
        return response.json()
    })
    .then((data)=>{
        // Chama a função para renderizar (exibir) os personagens na página
        renderizarPersonagens(data)
    })
    .catch((err)=>console.log(err)) // Exibe um erro caso algo não funcione

})

// Função para renderizar (exibir) os personagens na página
function renderizarPersonagens(items){
    // Obtém o elemento HTML onde os personagens serão exibidos
    const container = document.getElementById('personagemContainer')

    // Itera sobre cada personagem e cria um bloco HTML para cada um
    items.results.forEach((item, index)=>{
        const divPersonagens = document.createElement('div')
        // Define a estrutura HTML para cada bloco de personagem
        divPersonagens.innerHTML = `
            <div class="personagem-caixa">
                <img src="./image/perso${index}.png">
                <div>
                    <h3>${item.name}</h3>
                </div>
            </div>
        `;
        divPersonagens.addEventListener('click', ()=>{
            detalhesPersonagem(index)
        })
        // Adiciona uma classe ao bloco para aplicar estilos
        divPersonagens.classList.add('personagem')
        // Adiciona o bloco de personagem ao container principal
        container.appendChild(divPersonagens)
    })
}

function detalhesPersonagem(index){
    window.location.href = `./pages/person.html?index=${index}`
}
