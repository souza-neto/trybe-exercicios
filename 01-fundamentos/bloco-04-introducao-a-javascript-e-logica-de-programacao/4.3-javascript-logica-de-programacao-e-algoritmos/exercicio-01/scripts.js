let fat = 10;
let resultado = fat;

for (let contFat = 1; contFat < fat; contFat += 1) {
    resultado = resultado * contFat;
} console.log(resultado);

let word = "tryber";
let reverse = "";

for (let index = word.length - 1; index >= 0; index -=1) {
    reverse += word[index];    
} console.log(reverse);

