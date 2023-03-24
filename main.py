class domino_mexicano:
    def __init__(self):
        self.numero_participantes = int(input("Digite o número de jogadores: "))
        self.n=0
        self.lista = []
        while self.n <= self.numero_participantes-1:
            nome_participante = input("Digite o nome do jogador: ")
            self.lista.append({nome_participante})
            self.n += 1
        self.lista.reverse()
### INVERTER A LISTA

    def pontuacao_carrocao(self):
        numero_carrocao = int(input("Digite numero do carrocao: "))

        while self.n >= 1:
            pontuacao_jogador = input(f"Digite a pontuação de {self.lista[self.n-1]}: ")
            #self.lista.append({self.lista[self.n-1]:pontuacao_jogador[self.n-1]})
            self.n -= 1
        #print(self.lista)
            print(self.lista[self.n])


jogatina = domino_mexicano()
jogatina.pontuacao_carrocao()

