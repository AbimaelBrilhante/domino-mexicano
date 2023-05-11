//document.getElementById('carrocao').style.display = "block";

/*var carrocao = [[],[],[],[],[],[]] 
*/
n = 0 
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
}

function none_primeira_tela(){
    document.getElementById('cadastro').style.display = "none";
    document.getElementById('carrocao').style.display = "block"    
}

function numero_carrocao(){
    qtd_carrocao = 13 //quanidade de carrocoes do jogo = 13
    numero_carrocao = (document.getElementById('numero_carrocao'))

}

function pontuacao_carrocao(){
    var qtd_carrocao = 13 //quanidade de carrocoes do jogo = 13
    while (qtd_carrocao >= 1){ 
    //numero_carrocao = prompt("Digite o numero do Carroção: ")
    Number(numero_carrocao)
    

        while (numero_participantes_original >= 1){ 
            //pontos = prompt(`'Digite a pontuação de ${lista[n-1]}: `) 
            carrocao[numero_carrocao].push(pontos) 
            numero_participantes_original-=1 
            n-=1 
        }

    n=0    
    numero_participantes_original = numero_participantes   
    qtd_carrocao -=1 
        
    }
}  

tela_cadastro()
submit_1()
