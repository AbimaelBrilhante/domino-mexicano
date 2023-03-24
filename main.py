class domino_mexicano:
    def __init__(self):
        numero_participantes = int(input("Digite o número de participantes: "))
        n=1
        self.lista = []
        while n <= numero_participantes:
            nome_participante = input("Digite o nome do participante: ")
            self.lista.append({nome_participante})
            n += 1

    def pontuacao_carrocao(self):
        numero_carrocao = int(input("Digite numero do carrocao: "))
        pontos_carrocao = int(input(f'digite a pontuacao de {self.lista[0]}'))
        print(pontos_carrocao)

jogatina = domino_mexicano()

