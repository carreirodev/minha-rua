const inputCep = document.querySelector("#cep");

const BASE_URL = "https://brasilapi.com.br/api";

inputCep.onkeyup = async (evento) => {
	//verificando se o cep cumpriu os digitos
	if (inputCep.value.length < 8) {
		return;
	}
	//fazendo uma requisição api BRASILAPI para buscar as informações com o cep digitado
	const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, { method: "GET" });
	console.log(resposta);

	alert("cep completo");
};
