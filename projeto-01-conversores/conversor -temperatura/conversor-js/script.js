var data = new Date();
var cidade = "São Caetano do Sul";
var temperaturaCelsius = 10;
var temperaturaFarenheit = temperaturaCelsius * 1.8 + 32;
var dataAtual = `${data.getDate()}/${
  data.getMonth() + 1
}/${data.getFullYear()}`;
var resultado = document.getElementById("resultado");
resultado.innerHTML = `A temperatura em ${cidade} no dia ${dataAtual}  é de ${temperaturaCelsius}ºC ou ${temperaturaFarenheit}ºF`;
