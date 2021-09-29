var nomeAluno = "Robson";

var n1 = 10;
var n2 = 8;
var n3 = 5;
var n4 = 6;
// *Colocar a conta inteira da média em apenas uma linha
var mediaFinal = (n1 + n2 + n3 + n4) / 4;

console.log(
  `A média final do aluno ${nomeAluno} foi: ${mediaFinal.toFixed(2)}`
);
// *Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não
var resultado = document.getElementById("resultado");
if (mediaFinal >= 6) {
  // *Imprimir na própria página o resultado, ao invés do console

  resultado.innerHTML = `A média do aluno ${nomeAluno} foi: ${mediaFinal.toFixed(
    2
  )}`;
} else {
  resultado.innerHTML = `Você precisa estudar mais pois sua nota foi : ${mediaFinal}`;
}

// Alterar o fundo da tela da maneira que achar mais legal
//ok

// *Criar um conversor de temperaturas entre farenheit e celcius
