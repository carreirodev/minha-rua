const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputCidade = document.querySelector("#cidade");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF");

const BASE_URL = "https://brasilapi.com.br/api";

inputCep.onkeyup = async (evento) => {
	//verificando se o cep cumpriu os digitos
	if (inputCep.value.length < 8) {
		return;
	}

	//fazendo uma requisição api BRASILAPI para buscar as informações com o cep digitado
	const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, { method: "GET" });

	//extraindo json da resposta
	const conteudoResposta = await resposta.json();

	//prenchendo o HTML
	inputRua.value = conteudoResposta.street;
	inputBairro.value = conteudoResposta.neighborhood;
	inputUF.value = conteudoResposta.state;
	inputCidade.value = conteudoResposta.city;

	console.log(conteudoResposta);

	// alert("cep completo " + inputCep.value);
};
