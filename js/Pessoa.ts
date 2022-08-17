export class Pessoa {

    public nome: string
    public cpf: string
    public rg: string
    public dataNascimento: string
    public genero: string
    public nomeMae: string
    public nomePai: string
    public email: string
    public cep: string
    public endereco: string
    public numeroEnd: number
    public cidade: string
    public estado: string
    public telefone: string
    private saldo: string
    private contaCorrente: string
    private agencia: number

    constructor(nome: string, cpf: string, rg: string, dataNascimento: string, genero: string, nomeMae: string, nomePai: string, email: string, cep: string, endereco: string, numeroEnd: number, cidade: string, estado: string, telefone: string, saldo: string, contaCorrente: string, agencia: number) {
        this.nome = nome
        this.cpf = cpf
        this.rg = rg
        this.dataNascimento = dataNascimento
        this.genero = genero
        this.nomeMae = nomeMae
        this.nomePai = nomePai
        this.email = email
        this.cep = cep
        this.endereco = endereco
        this.numeroEnd = numeroEnd
        this.cidade = cidade
        this.estado = estado
        this.telefone = telefone
        this.saldo = saldo
        this.contaCorrente = contaCorrente
        this.agencia = agencia

    }

    public dadosPrincipais(): string {

        return `Nome: ${this.nome} CPF: ${this.cpf} Conta Corrente: ${this.contaCorrente} Agencia: ${this.agencia}`
    }

}