function converterReal() {
  const valorElemento = document.getElementById("valor"); // getElementById = pegar o elemento pelo seu determinado ID
  const valor = valorElemento.value; // pegar exatamente o valor que foi entrado no input
  const valorEmDolarNumerico = parseFloat(valor); // parseFloat = transformar o valor em ponto flutuante ex 23.02568

  const valorEmReal = valorEmDolarNumerico * 5;

  const elementoValorConvertido = document.getElementById("valorConvertido");
  const valorConvertido = `O resultado em Real é R$   ${valorEmReal.toFixed(
    2
  )}`;
  elementoValorConvertido.innerHTML = valorConvertido;
}
function converterDollar() {
  const valorElemento = document.getElementById("valor"); // getElementById = pegar o elemento pelo seu determinado ID
  const valor = valorElemento.value; // pegar exatamente o valor que foi entrado no input
  const valorEmRealNumerico = parseFloat(valor); // parseFloat = transformar o valor em ponto flutuante ex 23.02568

  const valorEmDollar = valorEmRealNumerico / 5;

  const elementoValorConvertido = document.getElementById("valorConvertido");
  const valorConvertido = `O resultado em Dollar é U$   ${valorEmDollar.toFixed(
    2
  )}`;
  elementoValorConvertido.innerHTML = valorConvertido;
}
