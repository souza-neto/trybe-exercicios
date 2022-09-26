let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// console.log("bem vinda, " + (info.personagem));

info.recorrente = "sim";

// for (let key in info) {
//    console.log(key);
// }

// for (let key in info) {
//     console.log(info[key]);
//  }

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'hristmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: "sim",
}


for (let key in info && info2) {
    if (info.recorrente === info2.recorrente) {
        info.recorrente = "ambos recorrentes"
    }
    // console.log(info[key] + " e " + info2[key]);
}

//--------------------------------------------------------------------------

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama: " , leitor.livrosFavoritos[0].titulo);