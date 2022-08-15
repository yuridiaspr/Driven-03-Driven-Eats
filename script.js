
let selecionado_prato = 0;
let selecionado_bebida = 0;
let selecionado_sobremesa = 0;

let refeicao
let refeicao_preco

let bebida
let bebida_preco

let sobremesa
let sobremesa_preco


function selecionarPrato(Botao){

    const BotaoSelecionado =  document.querySelector('.refeicoes .selecionado')
    const check =  document.querySelector('.refeicoes .selecionado .imagem_check')
    const check2 = Botao.querySelector('.imagem_check')

    if ( BotaoSelecionado !== null ){
        BotaoSelecionado.classList.toggle('selecionado');
        check.classList.toggle('escondido')
        selecionado_prato = 0;
    }

    if (BotaoSelecionado !== Botao){
        Botao.classList.toggle('selecionado');
        check2.classList.toggle('escondido');
        selecionado_prato = 1;


        const refeicao_nome = Botao.querySelector('.nome')
        const preço_refeicao = Botao.querySelector('.preco')
        refeicao = refeicao_nome.innerHTML
        refeicao_preco = preço_refeicao.innerHTML.replace('R$ ','')
    }
    habilitaBotaoComprar();
}

function selecionarBebida(Botao){

    const BotaoSelecionado =  document.querySelector('.bebidas .selecionado')
    const check =  document.querySelector('.bebidas .selecionado .imagem_check')
    const check2 = Botao.querySelector('.imagem_check')

    if ( BotaoSelecionado !== null ){
        BotaoSelecionado.classList.toggle('selecionado');
        check.classList.toggle('escondido')
        selecionado_bebida = 0;
    }

    if (BotaoSelecionado !== Botao){
        Botao.classList.toggle('selecionado');
        check2.classList.toggle('escondido');
        selecionado_bebida = 1;

        const bebida_nome = Botao.querySelector('.nome')
        const preço_bebida = Botao.querySelector('.preco')
        bebida = bebida_nome.innerHTML
        bebida_preco = preço_bebida.innerHTML.replace('R$ ','')
    }
    habilitaBotaoComprar();
}

function selecionarSobremesa(Botao){

    const BotaoSelecionado =  document.querySelector('.sobremesas .selecionado')
    const check =  document.querySelector('.sobremesas .selecionado .imagem_check')
    const check2 = Botao.querySelector('.imagem_check')

    if ( BotaoSelecionado !== null ){
        BotaoSelecionado.classList.toggle('selecionado');
        check.classList.toggle('escondido')
        selecionado_sobremesa = 0;
    }

    if (BotaoSelecionado !== Botao){
        Botao.classList.toggle('selecionado');
        check2.classList.toggle('escondido');
        selecionado_sobremesa = 1;

        const sobremesa_nome = Botao.querySelector('.nome')
        const preço_sobremesa = Botao.querySelector('.preco')
        sobremesa = sobremesa_nome.innerHTML
        sobremesa_preco = preço_sobremesa.innerHTML.replace('R$ ','')
    }
    habilitaBotaoComprar();
}



function habilitaBotaoComprar(){
    const painel = document.querySelector('.pedido');
    const texto = document.querySelector('.texto_do_pedido');
    
    if (selecionado_prato + selecionado_bebida + selecionado_sobremesa === 3){
        painel.classList.add('compra-selecionada')
        texto.innerHTML = "Fechar pedido"
    } else if(painel.classList.contains('compra-selecionada')) {
        painel.classList.remove('compra-selecionada')
        texto.innerHTML = 'Selecione os 3 itens para fechar o pedido'
    }
}

function finalizarPedido(){
    
    if (selecionado_prato + selecionado_bebida + selecionado_sobremesa === 3){
        const telabranca = document.querySelector('.telabranca');
        telabranca.classList.remove('escondido')
        const painel_verde = document.querySelector('.pedidofinal');
        painel_verde.classList.remove('escondido')

        const refeicao_local = document.querySelector('.refeicao');
        refeicao_local.innerHTML = refeicao
        const refeicao_preco_local = document.querySelector('.refeicao_preco');
        refeicao_preco_local.innerHTML = refeicao_preco

        const bebida_local = document.querySelector('.bebida');
        bebida_local.innerHTML = bebida
        const bebida_preco_local = document.querySelector('.bebida_preco');
        bebida_preco_local.innerHTML = bebida_preco

        const sobremesa_local = document.querySelector('.sobremesa');
        sobremesa_local.innerHTML = sobremesa
        const sobremesa_preco_local = document.querySelector('.sobremesa_preco');
        sobremesa_preco_local.innerHTML = sobremesa_preco

        refeicao_preco = refeicao_preco.replace(',','.')
        bebida_preco = bebida_preco.replace(',','.')
        sobremesa_preco = sobremesa_preco.replace(',','.')


        const total_local = document.querySelector('.pedidofinal-total-final')
        total_local.innerHTML = 'R$ ' + Number(Number(refeicao_preco)+Number(bebida_preco)+Number(sobremesa_preco)).toFixed(2)}

}

function cancelarpedido(){
    const telabranca = document.querySelector('.telabranca');
    telabranca.classList.add('escondido')
    const painel_verde = document.querySelector('.pedidofinal');
    painel_verde.classList.add('escondido')
}

function TudoCertoPodePedir(){
    let Nome = prompt('Digite Seu Nome');
    if(Nome == null){
        Nome = 'Prefiro não informar meu nome'
    }
    let Endereco = prompt('Digite Seu Endereço');
    if(Endereco == null){
        Endereco = 'Prefiro não informar meu endereço'
    }

    const mensagem = 'Olá, gostaria de fazer o pedido:\n' +
    '- Prato: '+refeicao+'\n' +
    '- Bebida: '+bebida+'\n' +
    '- Sobremesa: '+sobremesa+'\n' +
    'Total: R$ '+ Number(Number(refeicao_preco)+Number(bebida_preco)+Number(sobremesa_preco)).toFixed(2) + '\n' +
    '\n' +
    'Nome: '+Nome+'\n'+
    'Endereço: '+Endereco

    const numerowpp = '+5519989022072'

    const mensagem_link = encodeURIComponent(mensagem)

    let link = 'https://api.whatsapp.com/send?phone='+numerowpp+'&text=%20'+mensagem_link
    window.open(link, 'Driven Eats - Yuru');
}