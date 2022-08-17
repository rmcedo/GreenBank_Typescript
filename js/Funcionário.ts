import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa {

    public dataAdmissao: string
    public dataDemissao: string
    private senhaAcesso: number

    constructor(nome: string, cpf: string, rg: string, dataNascimento: string, genero: string, nomeMae: string, nomePai: string, email: string, cep: string, endereco: string, numeroEnd: number, cidade: string, estado: string, telefone: string, saldo: string, contaCorrente: string, agencia: number, dataAdmissao: string, dataDemissao: string, senhaAcesso: number) {

        super(nome, cpf, rg, dataNascimento, genero, nomeMae, nomePai, email, cep, endereco, numeroEnd, cidade, estado, telefone, saldo, contaCorrente, agencia)

        this.dataAdmissao = dataAdmissao
        this.dataDemissao = dataDemissao
        this.senhaAcesso = senhaAcesso
    }

    public dadosFuncionario():string{

        return ` Nome: ${this.nome} CPF: ${this.cpf} Data Admissão: ${this.dataAdmissao} Senha de Acesso: ${this.senhaAcesso}`
    }

    
    public get getSenhaAcesso() : number {
        return this.senhaAcesso
    }

    
    public set setSenhaAcesso(senhaAcesso : number) {
        this.senhaAcesso = senhaAcesso;
    }
    
    
}

