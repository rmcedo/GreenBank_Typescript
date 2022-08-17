import { Pessoa } from "./Pessoa.js"

export class Empresa extends Pessoa {

    public razaoSocial: string
    public cnpj: string
    public inscricaoEstadual: string
    private aberturaConta: string
    private senhaEmpresa: number


    constructor(nome: string, cpf: string, rg: string, dataNascimento: string, genero: string, nomeMae: string, nomePai: string, email: string, cep: string, endereco: string, numeroEnd: number, cidade: string, estado: string, telefone: string, saldo: string, contaCorrente: string, agencia: number, razaoSocial: string, cnpj: string, inscricaoEstadual: string, aberturaConta: string, senhaEmpresa: number) {

        super(nome, cpf, rg, dataNascimento, genero, nomeMae, nomePai, email, cep, endereco, numeroEnd, cidade, estado, telefone, saldo, contaCorrente, agencia)

        this.razaoSocial = razaoSocial
        this.cnpj = cnpj
        this.inscricaoEstadual = inscricaoEstadual
        this.aberturaConta = aberturaConta
        this.senhaEmpresa = senhaEmpresa

    }

    public dadosEmpresa():string{

        return ` Nome: ${this.razaoSocial} CNPJ: ${this.cnpj} Inscrição Estadual: ${this.inscricaoEstadual} Data Abertura de Conta: ${this.aberturaConta} Senha Empresarial ${this.senhaEmpresa}`
    }

    
    public get getSenhaEmpresa() : number {
        return this.senhaEmpresa
    }

    
    public set setSenhaEmpresa(senhaEmpresa : number) {
        this.senhaEmpresa = senhaEmpresa;
    }
    
    
}