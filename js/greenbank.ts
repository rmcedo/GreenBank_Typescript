import { Cliente } from "./Cliente.js";
import { Empresa } from "./Empresa.js";
import { Funcionario } from "./Funcionário.js";

let cliente1 = new Cliente ("Maya Yasmin Analu Fogaça", "611.770.469-03", "18.290.249-3", "17/02/1973", "Feminino", "Fernanda Nair Elisa", "Guilherme Edsonn Luiz Fogaça", "maya_yasmim_fogaca@hotmail.com", "69900-354", "Rua Marechal Deodoro", 423, "Rio Branco", "Acre", "(68) 3794-9009", "R$17.085,45","1202644-1", 7160, "16/08/2022", "Equipe super atenciosa", 422793)

console.log(cliente1);
console.log(cliente1.dadosCliente());
console.log(cliente1.dadosPrincipais());
console.log(cliente1.getSenha);

console.log("-----------------------------------");




let funcionario1 = new Funcionario("Rafael Macedo", "02977653023", "7113135251", "03/08/1994", "Masculino", "Márcia Cristina Ferreira da Silva", "Luis Mariano Cedrez Macedo", "rafael9408@gmail.com", "88351710", "Rua Leopoldo Imhof", 264, "Brusque", "SC", "(53) 981062990", "R$2", "1202789-1", 123, "18/04/2022","Contrato em Andamento", 1234)

console.log(funcionario1);
console.log(funcionario1.dadosFuncionario());
console.log(funcionario1.dadosPrincipais());
console.log(funcionario1.getSenhaAcesso);

console.log("-----------------------------------");
let empresa1 = new Empresa("Diogo Anthony Nathan Lima", "209.886.646-15","34.339.762-6", "02/04/1996", "Masculino","Maya Allana Maria", "Elias Alexandre Davi Lima", "diogo_lima@dillon.com.br", "68903-220", "Rua Agennor Ferreira Pinto", 873, "Macapa", "AP", "(96)2773-4069", "R$35.000,12", "1204688-1", 7160, "Sergio E Manoel Telecomunicações ME", "74.011.080/0001-17","503.576.361.782", "16/08/2022", 9666 )

console.log(empresa1);
console.log(empresa1.dadosEmpresa());
console.log(empresa1.dadosPrincipais());
console.log(empresa1.getSenhaEmpresa);
console.log("-----------------------------------");


