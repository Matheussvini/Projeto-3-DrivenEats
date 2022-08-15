let prato;
let bebida;
let sobremesa;

function selecionarPrato(produto){

    const itemSelecionado = document.querySelector('.prato .selecionado')    
    
    if ( itemSelecionado !== null ){
        itemSelecionado.classList.remove('selecionado');
    }

    produto.classList.add('selecionado');


    prato = produto.innerHTML;
    habilitaFecharPedido();    

}
function selecionarBebida(produto){

    const itemSelecionado = document.querySelector('.bebida .selecionado')
    
    if ( itemSelecionado !== null ){
        itemSelecionado.classList.remove('selecionado');
    }

    produto.classList.add('selecionado');

    bebida = produto.innerHTML;
    habilitaFecharPedido();
}
function selecionarSobremesa(produto){

    const itemSelecionado = document.querySelector('.sobremesa .selecionado')
    
    if ( itemSelecionado !== null ){
        itemSelecionado.classList.remove('selecionado');
    }

    produto.classList.add('selecionado');

    sobremesa = produto.innerHTML;
    habilitaFecharPedido();
}

function habilitaFecharPedido(){
    if ( prato !== undefined && bebida !== undefined && sobremesa !== undefined){
        const botaoFecharPedido = document.querySelector('.fechar-pedido');
        botaoFecharPedido.classList.add('habilitado');

        const paragrafo = document.querySelector('.fechar-pedido p.a400-20');
        paragrafo.innerHTML = "Fechar pedido";
    }
}

function fecharPedido(){
    if ( prato !== undefined && bebida !== undefined && sobremesa !== undefined){
        const fundo = document.querySelector('.fundoFecharPedido');
        fundo.classList.add('habilitar');

        const painel = document.querySelector('.confirmarPedido');
        painel.classList.add('habilitar');
    }
}




 /*function jogar(){
    if ( jogo !== undefined ){
        // se a quantidade de jogadores estiver selecionada
        if (qtdeJogadores !== undefined){
            // pegar o painel e adicionar a classe escondido 
            const painel = document.querySelector('.selecionar-jogo');
            painel.classList.add('escondido');

            // pegar o painel com a classe loading-overlay e remover a classe escondido 
            const painelIniciarJogo = document.querySelector('.loading-overlay');
            painelIniciarJogo.classList.remove('escondido');

            // e vai definir a mensagem com o jogo selecionado e a quantidade de jogadores
            const paragrafo = document.querySelector('.mensagem-iniciando');
            paragrafo.innerHTML = `INICIANDO POKER 100 com o jogo ${jogo} e quantidade de jogadores ${qtdeJogadores}`;
        }
    }
}

function habilitaBotaoContinuar(){
    // se o jogo estiver selecionado
    if ( jogo !== undefined ){
        // se a quantidade de jogadores estiver selecionada
        if (qtdeJogadores !== undefined){
            // habilitar o botao continuar
            const botaoContinuar = document.querySelector('.botao-continuar');
            botaoContinuar.classList.add('selecionado');
        }
    }
    
} */