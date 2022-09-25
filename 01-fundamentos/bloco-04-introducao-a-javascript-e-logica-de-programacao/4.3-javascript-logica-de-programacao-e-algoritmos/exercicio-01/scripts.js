let fat = 10;
let resultado = fat;

for (let contFat = 1; contFat < fat; contFat += 1) {
    resultado = resultado * contFat;
} console.log(resultado);

//-----------------------------------------------------------

let word = "tryber";
let reverse = "";

for (let index = word.length - 1; index >= 0; index -=1) {
    reverse += word[index];    
} console.log(reverse);

//------------------------------------------------------------

let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = array[0];
let maiorPalavra = array[0];

for (let index = 0; index < array.length; index += 1){

    for (let indexDentro = 0; indexDentro < array[index].length - 1; indexDentro += 1){ if (menorPalavra.length > array[index].length){
        menorPalavra = array[index];
    }
    if (maiorPalavra.length < array[index].length){
        maiorPalavra = array[index];
    }
    }
}
console.log(menorPalavra);
console.log(maiorPalavra); 

//-------------------------------------------------------------

let maiorPrimo = 0

for (let index = 2; index <= 50 ; index += 1) {
    if (index % 2 != 0){
        maiorPrimo = index
    }
    
} console.log(maiorPrimo);
