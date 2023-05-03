class domino_mexicano:

    def __init__(self):
        #self.carrocao = [[],[],[],[],[],[],[],[],[],[],[],[],[]] #dado_original - uma lista para cada numero de carrocao dentro de outra lista
        self.carrocao = [[],[],[]]  #dado_teste
        self.numero_participantes_original = int(input("Digite o número de jogadores: "))
        self.numero_participantes = self.numero_participantes_original #retorno ao valor do input original (utilizado após a alteração da variavel)
        self.n=0  #outra variavel para a quantidade de participantes
        self.lista = [] #lista com os nomes dos participantes
        while self.n <= self.numero_participantes_original-1: #aqui é feito um loop solicitando um input para cada participante - validação com a quantidade de participantes)
            nome_participante = input("Digite o nome do jogador: ")
            self.lista.append(nome_participante)
            self.n += 1
        #self.lista.reverse()

 
    
        
        
#faz um loop com a quantidade de carroção do dominó (fazer validação para 13 e não permitir repetidos)

    def pontuacao_carrocao(self):
        qtd_carrocao = 3 #quanidade de carrocoes do jogo = 13
        while qtd_carrocao >= 1: #numero final apos todas as iteracoes
            numero_carrocao = int(input("Digite numero do carrocao: "))


            while self.numero_participantes_original >= 1: #iteração para cada participante dentro do numero do carrocao escolhido
                pontos = input(f"Digite a pontuação de {self.lista[self.n-1]}: ") #solicita a pontuação de cada participante dentro do carrocao - iteração com a self.lista
                self.carrocao[numero_carrocao].append(pontos) #introdução da pontuação de cada participante dentro da lista (escolhida pelo indice)
                self.numero_participantes_original-=1 #modificação da variavel para a segunda iteração
                self.n-=1 #modificação da variavel para a segunda iteração
            self.n=0    #transforação da variavel no valor inicial para a nova iteração
            self.numero_participantes_original = self.numero_participantes   #transforação da variavel no valor inicial para a nova iteração  
            qtd_carrocao -=1 #transforação da variavel no valor inicial para a nova iteração

        print(self.lista)
        print(self.carrocao)



jogatina = domino_mexicano()
jogatina.pontuacao_carrocao()
###

