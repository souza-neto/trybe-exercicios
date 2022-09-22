let a = 10;

let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

const c = 15;
const d = 25;
if (c > d) {
    console.log("C é maior que D");
} else {
    console.log("D é maior que C");
}

const e = 36;
const f = 8;
const g = 50;
if (e > f && e > g) {
    console.log("E é maior que todos!!");
} else if (f > e && f > g) {
    console.log("F é maior que todos!!");
} else if (g > e && g > f) {
    console.log("G é maior que todos!!")
}

let parametro = -50;
if (parametro > 0) {
    console.log("positive");
} else if (parametro < 0) {
    console.log("negative");
} else if (parametro === 0) {
    console.log("zero");
}

const ang1 = 40;
const ang2 = 40;
const ang3 = 100;
let soma = ang1 + ang2 + ang3;

if(ang1 > 0 && ang2 > 0 && ang3 > 0){
    if (soma === 180) {
        console.log("true")
    } else {
        console.log("false")
    }
} else {
    console.log("angulo invalido")
};

let peça = "Cavalo";
let result = peça.toLowerCase();

switch (result){
    case "rei":
        console.log("1 casa para qualquer direção")
    break;

    case "dama":
        console.log("Quantas casa quiser para qualquer direção")
    break;

    case "torre":
        console.log("Quantas casa quiser na horizontal e vertical")
    break;

    case "bispo":
        console.log("Quantas casa quiser na diagonal")
    break;

    case "cavalo":
        console.log("Movimento em L e unica peça que pode saltar sobre outras peças no tabuleiro")
    break;

    case "peao":
        console.log("Move sempre uma casa para a frente")
    break

    default:
        console.log("peça invalida!")
}

let nota = 10;
const porcentagem = nota + "%";

if (nota >= 90) {
    console.log("Parabéns,você atingiu" + " " + porcentagem + " e sua nota é A")
} else if (nota >= 80 && nota < 90) {
    console.log("Parabéns,você atingiu" + " " + porcentagem + " e sua nota é B")
} else if (nota >= 70 && nota < 80) {
    console.log("Você acertou" + " " + porcentagem + " e sua nota é C")
} else if (nota >= 60 && nota < 70) {
    console.log("Você acertou" + " " + porcentagem + " e sua nota é D")
} else if (nota >= 50 && nota < 60) {
    console.log("Você acertou" + " " + porcentagem + " e sua nota é E")
} else if (nota < 50 && nota > 0) {
    console.log("Você acertou" + " " + porcentagem + " e sua nota é F")
} else if (nota < 0 || nota > 100) {
    console.log("Nota invalida")
}

const num1 = 32;
const num2 = 15;
const num3 = 20;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    console.log("True")
} else {
    console.log("False")
}

const num4 = 32;
const num5 = 15;
const num6 = 20;

if (num4 % 2 != 0 || num5 % 2 != 0 || num6 % 2 != 0){
    console.log("True")
} else {
    console.log("False")
}

const custoDoProduto = 1
const valorDeVenda = 3

if (custoDoProduto >= 0 && valorDeVenda >=0) {
    const totalCustoDoProduto = custoDoProduto * 1.2;
    const totalLucro = (valorDeVenda - totalCustoDoProduto) * 1000;
    console.log(totalLucro);
} else {
    console.log("ERRO, os valores não podem ser negativos");
};


let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));
