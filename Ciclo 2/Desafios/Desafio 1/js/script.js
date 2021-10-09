const produtos = [
  {
      produto: 'Mamão Papaia',
      precoKg: 4.99,
  },
  {
      produto: 'Laranja',
      precoKg: 2.99,
  },
  {
      produto: 'Manga',
      precoKg: 2.99,
  },
  {
      produto: 'Melão amarelo',
      precoKg: 3.99,
  },
  {
      produto: 'Melancia',
      precoKg: 1.99,
  }
];
const listaProdutos = document.getElementById('produtos');

// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
const formatador = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL'
})

window.onload = ()=>{
  // Carregar lista dinamicamente
    // Criar lista ✅
    // Carregar lista ✅
    // Mostrar no DOM ✅
  // Lista "Sua Cesta" carregada com ação do clique
    // Item já selecionado - mensagem "Este item (item) já está na sua cesta"]
    // Atualizar somatório
  produtos.forEach((produto) => {
    const liProduto = document.createElement('li');
    liProduto.classList.add('flex');

    liProduto.addEventListener('click', () => {

    });

    const divNome = document.createElement('div');
    const divPreco = document.createElement('div');
    divPreco.classList.add('preco');

    divNome.innerText = produto.produto;
    divPreco.innerText = formatador.format(produto.precoKg);
    
    listaProdutos.appendChild(liProduto);
    liProduto.appendChild(divNome);
    liProduto.appendChild(divPreco);

  });
}