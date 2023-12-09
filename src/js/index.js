const chaveDaApi = "fd26f5dc3a2d4bc9bc4122727230712";

const botaoDeBusca = document.querySelector(".btn-busca"); // pegando o elemento do html

// fazendo um evento de click
botaoDeBusca.addEventListener("click", async () => {
  const cidade = document.getElementById("input-busca").value; // pegando um elemento do html porém pegando apenas o valor

  if (!cidade) return;
  const dados = await buscarDadosDaCidade(cidade); // fazendo um fuction e guardando ela em uma variavel

  if (dados) preencherDadosNaTela(dados, cidade);
});

async function buscarDadosDaCidade(cidade) {
  // fazendo a  function fica asginar por causa da api
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`; // botando uma api em uma variavel

  const resposta = await fetch(apiUrl); // fazendo a chamada da api

  if (resposta.status !== 200) return;

  const dados = await resposta.json();

  return dados;
}

function preencherDadosNaTela(dados, cidade) {
  const temperatura = dados.current.temp_c;
  const condicao = dados.current.condition.text;
  const humidade = dados.current.humidity;
  const velocidadeDoVento = dados.current.wind_kph;
  const iconeCondicao = dados.current.condition.icon;

  document.getElementById("cidade").textContent = cidade;

  document.getElementById("temperatura").textContent = `${temperatura} ºC`;

  document.getElementById("condicao").textContent = condicao;

  document.getElementById("humidade").textContent = `${humidade} %`;

  document.getElementById(
    "velocidade-do-vento"
  ).textContent = `${velocidadeDoVento}`;

  document.getElementById("icone-condicao").setAttribute("src", iconeCondicao);

}