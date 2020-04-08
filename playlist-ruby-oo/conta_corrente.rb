#Executa este arquivo
require_relative 'conta_bancaria'

class ContaCorrente < Conta 

	#Temos que definir pois não foi herdado de Conta
	attr_accessor :limite

	def initialize(numero, titular, saldo, limite)
		super(numero, titular, saldo)
		@limite = limite
	end

	#Mudando a regra
	def sacar(valor) 

		#Sacando a partir de um limite
		if (saldo + limite ) >= valor
			self.saldo -=valor

			puts 'Voce realizou um saque de', valor
			puts  'reais com sucesso!'
		else
			puts 'Não foi possível realizar o saque, limite exedido'
		end
	end
end

cliente = Cliente.new("Diana", "Regina")

puts 'Criando cliente:', cliente.nome, cliente.sobrenome

conta = ContaCorrente.new(1, cliente, 1000, 2000)
outra_conta = Conta.new(2, "Henrique Morato", 600)