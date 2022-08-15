let item;

function selecionarPrato(produto){

    const itemSelecionado = document.querySelector('.prato .selecionado')    
    
    if ( itemSelecionado !== null ){
        itemSelecionado.classList.remove('selecionado');
    }

    produto.classList.add('selecionado');

    // item = produto.innerHTML;
}
function selecionarBebida(produto){

    const itemSelecionado = document.querySelector('.bebida .selecionado')
    
    if ( itemSelecionado !== null ){
        itemSelecionado.classList.remove('selecionado');
    }

    produto.classList.add('selecionado');

    // item = produto.innerHTML;
}
function selecionarSobremesa(produto){

    const itemSelecionado = document.querySelector('.sobremesa .selecionado')
    
    if ( itemSelecionado !== null ){
        itemSelecionado.classList.remove('selecionado');
    }

    produto.classList.add('selecionado');

    // item = produto.innerHTML;
}
