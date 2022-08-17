import { Pessoa } from "./Pessoa.js"

export class Cliente extends Pessoa {


    public dataCadastro: string
    public reclamacao: string
    private senha: number

    constructor(nome: string, cpf: string, rg: string, dataNascimento: string, genero: string, nomeMae: string, nomePai: string, email: string, cep: string, endereco: string, numeroEnd: number, cidade: string, estado: string, telefone: string, saldo: string, contaCorrente: string, agencia: number, dataCadastro: string, reclamacao: string, senha: number) {

        super(nome, cpf, rg, dataNascimento, genero, nomeMae, nomePai, email, cep, endereco, numeroEnd, cidade, estado, telefone, saldo, contaCorrente, agencia)

        this.dataCadastro = dataCadastro
        this.reclamacao = reclamacao
        this.senha = senha

    }

    public dadosCliente ():string{

        return `Nome: ${this.nome} Abertura de Conta: ${this.dataCadastro} Reclamações: ${this.reclamacao} Senha: ${this.senha}`
    }

    
    public get getSenha() : number {
        return this.senha
    }

    
    public set setSenha(senha : number) {
        this.senha = senha;
    }
    
    
}