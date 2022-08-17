import { Pessoa } from "./Pessoa.js";
export class Empresa extends Pessoa {
    constructor(nome, cpf, rg, dataNascimento, genero, nomeMae, nomePai, email, cep, endereco, numeroEnd, cidade, estado, telefone, saldo, contaCorrente, agencia, razaoSocial, cnpj, inscricaoEstadual, aberturaConta, senhaEmpresa) {
        super(nome, cpf, rg, dataNascimento, genero, nomeMae, nomePai, email, cep, endereco, numeroEnd, cidade, estado, telefone, saldo, contaCorrente, agencia);
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
        this.aberturaConta = aberturaConta;
        this.senhaEmpresa = senhaEmpresa;
    }
    dadosEmpresa() {
        return ` Nome: ${this.razaoSocial} CNPJ: ${this.cnpj} Inscrição Estadual: ${this.inscricaoEstadual} Data Abertura de Conta: ${this.aberturaConta} Senha Empresarial ${this.senhaEmpresa}`;
    }
    get getSenhaEmpresa() {
        return this.senhaEmpresa;
    }
    set setSenhaEmpresa(senhaEmpresa) {
        this.senhaEmpresa = senhaEmpresa;
    }
}
