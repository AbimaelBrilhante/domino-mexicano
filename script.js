lista = []
function nome_participante(){
    nome_participante = (document.getElementById('nome_participante'))
    lista.push(nome_participante.value)
    numero_participantes_original = lista.length //alterar para input do HTML
    numero_participantes = numero_participantes_original 
    console.log(lista)
    document.getElementById('cadastrar').onclick = numero_carrocao;
    //console.log(numero_participantes)
}

function tela_cadastro(){
    document.getElementById('cadastrar_while').onclick = nome_participante;
} 

function numero_carrocao(){
    document.getElementById('cadastro').style.display = "none";
    document.getElementById('carrocao').style.display = "block"   
    //document.getElementById('jogatina').style.display = "none"
    carrocao_repetido = []
    numero_carrocao_digitado = (document.getElementById('numero_carrocao'))
    carrocao_repetido.push(numero_carrocao_digitado.value) 
    document.getElementById('submit_numero_carrocao').onclick = pontuacao_carrocao 
     
   
/*    if(carrocao_repetido.indexOf(numero_carrocao_digitado.value)==-1){
        document.getElementById('submit_numero_carrocao').onclick = pontuacao_carrocao 
        numero_participantes_original = nome_participante.numero_participantes
    }    
    else{
        //alert('Carroção já foi utilizado')
        document.getElementById('submit_numero_carrocao').onclick = pontuacao_carrocao 
        numero_participantes_original = nome_participante.numero_participantes
    } 
*/
     
}

carrocao = [[],[],[],[],[],[]] 
function pontuacao_carrocao(){
    carrocao = [[],[],[],[],[],[]] 

    document.getElementById('jogatina').style.display = "block"
    document.getElementById('carrocao').style.display = "none" 
    console.log(numero_participantes_original) 
    while (numero_participantes_original>0){
        pontos = document.getElementById('pontuacao_carrocao_jogador')
        //carrocao[numero_carrocao_digitado.value].push(pontos.value)
        document.getElementById('cadastrar_pontos_do_carrocao_jogador').onclick = pontuacao_jogador 
        numero_participantes_original-=1
        
    }    
    numero_carrocao()   
}  
// EDITAR - ESTÁ SENDO SOLICITADO UM DADO A MAIS
function pontuacao_jogador(){
    if(numero_participantes>0){
        carrocao[numero_carrocao_digitado.value].push(pontos.value)
        console.log(carrocao)
        numero_participantes-=1
    }    
    else{
        numero_carrocao()
    }
}


tela_cadastro()