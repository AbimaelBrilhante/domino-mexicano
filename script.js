//document.getElementById('carrocao').style.display = "block";

/*var carrocao = [[],[],[],[],[],[]] 
var numero_participantes_original = 2 //alterar para input do HTML
var numero_participantes = numero_participantes_original 
var  n = 0  
lista = [] 
while (n <= numero_participantes_original-1){ 
            //var nome_participante = prompt("Digite o nome do Participante: ");
            lista.push(nome_participante)
            n += 1
        }    

*/
lista = []
function nome_participante(){
    lista = []
    nome_participante = (document.getElementById('nome_participante'))
    lista.push(nome_participante.value)
    console.log(lista)
}

function tela_cadastro(){
    document.getElementById('cadastrar_while').onClick = nome_participante;
}  



function pontuacao_carrocao(){
    var qtd_carrocao = 2 //quanidade de carrocoes do jogo = 13
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
//nome_participante()


//console.log(lista)
//console.log(carrocao)