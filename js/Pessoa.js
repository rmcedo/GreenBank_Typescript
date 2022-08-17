export class Pessoa {
    constructor(nome, cpf, rg, dataNascimento, genero, nomeMae, nomePai, email, cep, endereco, numeroEnd, cidade, estado, telefone, saldo, contaCorrente, agencia) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.dataNascimento = dataNascimento;
        this.genero = genero;
        this.nomeMae = nomeMae;
        this.nomePai = nomePai;
        this.email = email;
        this.cep = cep;
        this.endereco = endereco;
        this.numeroEnd = numeroEnd;
        this.cidade = cidade;
        this.estado = estado;
        this.telefone = telefone;
        this.saldo = saldo;
        this.contaCorrente = contaCorrente;
        this.agencia = agencia;
    }
    dadosPrincipais() {
        return `Nome: ${this.nome} CPF: ${this.cpf} Conta Corrente: ${this.contaCorrente} Agencia: ${this.agencia}`;
    }
}
