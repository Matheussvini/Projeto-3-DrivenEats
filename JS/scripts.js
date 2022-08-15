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

        conferirPedido();
    }
}

function conferirPedido(){
    
    let n= 3

    //link das comidas para confirmação
    const prato = document.querySelector('.prato .item.selecionado p.a700-16');
    const Rprato = document.querySelector('.Rprato');
    Rprato.innerHTML = prato.innerHTML;

    const bebida = document.querySelector('.bebida .item.selecionado p.a700-16');
    const Rbebida = document.querySelector('.Rbebida');
    Rbebida.innerHTML = bebida.innerHTML;

    const sobremesa = document.querySelector('.sobremesa .item.selecionado p.a700-16');
    const Rsobremesa = document.querySelector('.Rsobremesa');
    Rsobremesa.innerHTML = sobremesa.innerHTML;

    //Link dos preços para confirmação
    const Pprato = document.querySelector('.prato .item.selecionado p.a400-16');
    const precoPrato = document.querySelector('.precoPrato');
    precoPrato.innerHTML = Pprato.innerHTML.substring(n);

    const Pbebida = document.querySelector('.bebida .item.selecionado p.a400-16');
    const precobebida = document.querySelector('.precoBebida');
    precobebida.innerHTML = Pbebida.innerHTML.substring(n);

    const Psobremesa = document.querySelector('.sobremesa .item.selecionado p.a400-16');
    const precosobremesa = document.querySelector('.precoSobremesa');
    precosobremesa.innerHTML = Psobremesa.innerHTML.substring(n);  

    //Soma para valor Total

    let Vprato = Pprato.innerHTML.substring(n);
    Vprato = Number(Vprato.replace(",","."));

    let Vbebida = Pbebida.innerHTML.substring(n);
    Vbebida = Number(Vbebida.replace(",","."));

    let Vsobremesa = Psobremesa.innerHTML.substring(n);
    Vsobremesa = Number(Vsobremesa.replace(",","."));

    const Ptotal = document.querySelector('.precoTotal');

    let total = Vprato + Vbebida + Vsobremesa;
    total = total.toFixed(2);
    let total2
    total2 = "R$ " + total.toString().replace(".",",");  
    Ptotal.innerHTML = total2; 

    // Adiciona valores à mensagem do pedido para enviar no whatsapp

    const Mprato = document.querySelector('p.Mprato');
    Mprato.innerHTML = "- Prato: " + prato.innerHTML

    const Mbebida = document.querySelector('p.Mbebida');
    Mbebida.innerHTML = "- Bebida: " + bebida.innerHTML

    const Msobremesa = document.querySelector('p.Msobremesa');
    Msobremesa.innerHTML = "- Sobremesa: " + sobremesa.innerHTML

    const Mtotal = document.querySelector('p.Mtotal');
    Mtotal.innerHTML = "- Total: " + total
}   



function botaoCancelar(){
    const fundo = document.querySelector('.fundoFecharPedido');
        fundo.classList.remove('habilitar');

        const painel = document.querySelector('.confirmarPedido');
        painel.classList.remove('habilitar');
}