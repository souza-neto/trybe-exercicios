let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
// let media = soma / 10;

for (let contador = 0; contador < numbers.length; contador += 1) {
    soma = soma + numbers[contador];    
} 
let media = soma / numbers.length;

if (media > 20) {
    console.log("Valor maior que 20");    
} else if (media <= 20) {
    console.log("Valor menor ou igual a 20");
}

const max = Math.max(...numbers);
console.log(max);

let impar = 0;

for (let i = 0; i < numbers.length; i += 1) {
   if (numbers[i] % 2 != 0){
    impar += 1
   } else if (impar === 0){
    console.log("Nenhum valor impar encontrado.");
   }
} console.log(impar);

const min = Math.min(...numbers);
console.log(min);

let arrayDiv = [];

for (let s = 1; s <= 25; s += 1) {
    arrayDiv.push(s);
} console.log(arrayDiv);


let div = [];
for (let b = 0; b < arrayDiv.length; b++) {
    div.push(arrayDiv[b] / 2);    
} console.log(div);