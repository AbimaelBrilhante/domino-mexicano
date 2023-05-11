lista = []
function nome_participante(){
    nome_participante = (document.getElementById('nome_participante'))
    lista.push(nome_participante.value)
    numero_participantes_original = lista.length //alterar para input do HTML
    numero_participantes = numero_participantes_original 
    console.log(lista)
    console.log(numero_participantes)
}

function tela_cadastro(){
    document.getElementById('cadastrar_while').onclick = nome_participante;
} 

function submit_1(){
    document.getElementById('cadastrar').onclick = none_primeira_tela;
    numero_carrocao()
}

function none_primeira_tela(){
    document.getElementById('cadastro').style.display = "none";
    document.getElementById('carrocao').style.display = "block"    
}

function numero_carrocao(){
    qtd_carrocao = 13 //quanidade de carrocoes do jogo = 13
    numero_carrocao_digitado = (document.getElementById('numero_carrocao'))
    document.getElementById('submit_numero_carrocao').onclick = pontuacao_carrocao
    console.log(numero_carrocao_digitado.value)
}

carrocao = [[],[],[],[],[],[]] 
function pontuacao_carrocao(){
    document.getElementById('jogatina').style.display = "block";
    document.getElementById('carrocao').style.display = "none"  
    pontos = document.getElementById('pontuacao_carrocao_jogador')
    document.getElementById('cadastrar_pontos_do_carrocao_jogador').onclick = pontuacao_jogador  

}  
// EDITAR - ESTÁ SENDO SOLICITADO UM DADO A MAIS
function pontuacao_jogador(){
    if(numero_participantes_original>0){
        carrocao[numero_carrocao_digitado.value].push(pontos.value)
        console.log(carrocao)
        numero_participantes_original-=1 
    }      
    else {
        document.getElementById('jogatina').style.display = "none";
        document.getElementById('carrocao').style.display = "block"  
        numero_carrocao()
        numero_participantes_original = numero_participantes 
    }       
}

tela_cadastro()
submit_1()
