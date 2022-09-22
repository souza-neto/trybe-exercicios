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
