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
    console.log(nome_participante.numero_participantes)
    console.log(nome_participante.numero_participantes_original)
} 

function submit_1(){
    document.getElementById('cadastrar').onclick = numero_carrocao;
}

function numero_carrocao(){
    document.getElementById('cadastro').style.display = "none";
    document.getElementById('carrocao').style.display = "block"   
    document.getElementById('jogatina').style.display = "none"
    
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

    document.getElementById('jogatina').style.display = "block"
    document.getElementById('carrocao').style.display = "none" 
    console.log(numero_participantes_original) 
    n=2
    while (numero_participantes_original>0){
        pontos = document.getElementById('pontuacao_carrocao_jogador')
        carrocao[numero_carrocao_digitado.value].push(pontos.value)
        document.getElementById('cadastrar_pontos_do_carrocao_jogador').onclick = pontuacao_jogador 

    }
    numero_carrocao    
    //numero_participantes_original = nome_participante.numero_participantes



}  
// EDITAR - ESTÁ SENDO SOLICITADO UM DADO A MAIS
function pontuacao_jogador(){
    numero_participantes_original-=1   
    pontuacao_carrocao  
}

tela_cadastro()
submit_1()



/*function pontuacao_jogador(){
    while(numero_participantes_original>0){
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
}*/
