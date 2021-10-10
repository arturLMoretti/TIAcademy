const dadosCep = async(cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    return dados.json();
}

export { dadosCep }