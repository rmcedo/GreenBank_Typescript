import { Pessoa } from "./Pessoa.js";
export class Funcionario extends Pessoa {
    constructor(nome, cpf, rg, dataNascimento, genero, nomeMae, nomePai, email, cep, endereco, numeroEnd, cidade, estado, telefone, saldo, contaCorrente, agencia, dataAdmissao, dataDemissao, senhaAcesso) {
        super(nome, cpf, rg, dataNascimento, genero, nomeMae, nomePai, email, cep, endereco, numeroEnd, cidade, estado, telefone, saldo, contaCorrente, agencia);
        this.dataAdmissao = dataAdmissao;
        this.dataDemissao = dataDemissao;
        this.senhaAcesso = senhaAcesso;
    }
    dadosFuncionario() {
        return ` Nome: ${this.nome} CPF: ${this.cpf} Data Admissão: ${this.dataAdmissao} Senha de Acesso: ${this.senhaAcesso}`;
    }
    get getSenhaAcesso() {
        return this.senhaAcesso;
    }
    set setSenhaAcesso(senhaAcesso) {
        this.senhaAcesso = senhaAcesso;
    }
}
