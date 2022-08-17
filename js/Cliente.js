import { Pessoa } from "./Pessoa.js";
export class Cliente extends Pessoa {
    constructor(nome, cpf, rg, dataNascimento, genero, nomeMae, nomePai, email, cep, endereco, numeroEnd, cidade, estado, telefone, saldo, contaCorrente, agencia, dataCadastro, reclamacao, senha) {
        super(nome, cpf, rg, dataNascimento, genero, nomeMae, nomePai, email, cep, endereco, numeroEnd, cidade, estado, telefone, saldo, contaCorrente, agencia);
        this.dataCadastro = dataCadastro;
        this.reclamacao = reclamacao;
        this.senha = senha;
    }
    dadosCliente() {
        return `Nome: ${this.nome} Abertura de Conta: ${this.dataCadastro} Reclamações: ${this.reclamacao} Senha: ${this.senha}`;
    }
    get getSenha() {
        return this.senha;
    }
    set setSenha(senha) {
        this.senha = senha;
    }
}
