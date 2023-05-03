class domino_mexicano:

## gera as variaveis com a quantidade de jogadores e nome dos jogadores
    def __init__(self):
        self.carrocao = []
        self.pontuacao_jogador = []
        self.numero_participantes = int(input("Digite o número de jogadores: "))
        self.n=0
        self.lista = []
        while self.n <= self.numero_participantes-1:
            nome_participante = input("Digite o nome do jogador: ")
            self.lista.append(nome_participante)
            self.n += 1
        self.lista.reverse()
        
#faz um loop com a quantidade de carroção do dominó (fazer validação para 13 e não permitir repetidos)

    def pontuacao_carrocao(self):
        while len(self.carrocao) <= 1:
            numero_carrocao = int(input("Digite numero do carrocao: "))
            self.carrocao.append(numero_carrocao)

            #traz o resultado como dict dentreo de uma lista

            while self.n >= 1:
                pontos = input(f"Digite a pontuação de {self.lista[self.n-1]}: ")
                self.pontuacao_jogador.append({self.lista[self.n-1]:pontos})
                self.n -= 1
            self.n = self.numero_participantes



        print(self.pontuacao_jogador)



jogatina = domino_mexicano()
jogatina.pontuacao_carrocao()
###

