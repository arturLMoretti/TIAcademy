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
const suaCesta = document.getElementById('cestaDoCliente');
const totalCompra = document.getElementById('mostraTotalCompra');

// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
const formatador = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL'
})

let precoTotal = 0;

const adicionarCesta = (event) => {
  const produtosNaLista = document.querySelectorAll('.produtoNaLista')

    produtosNaLista.forEach( (element) => {
      element.addEventListener('click', (event) => {       
        const textoProduto = element.firstChild.innerText;
        if (element.classList.contains('produtoJaEstaNaCesta')) {
          window.alert(`Este item (${textoProduto}) já está na sua cesta!`)
        } else {
          precoTotal += produtos.filter((produto) => (
          produto.produto === textoProduto
          ))[0].precoKg;
          totalCompra.value = formatador.format(precoTotal)
          const produtoCesta = document.createElement('li');
          const cloneProduto =element.cloneNode(true)
          produtoCesta.appendChild(cloneProduto);
          suaCesta.appendChild(produtoCesta)
          element.classList.add('produtoJaEstaNaCesta')
        }
        
  })
})
}
const carrregaListaDinamicamente = () => {
  produtos.forEach((produto) => {
  const liProduto = document.createElement('li');
  liProduto.classList.add('flex');
  liProduto.classList.add('produtoNaLista')

  const divNome = document.createElement('div');
  divNome.classList.add('Nome');
  const divPreco = document.createElement('div');
  divPreco.classList.add('preco');

  divNome.innerText = produto.produto;
  divPreco.innerText = formatador.format(produto.precoKg);

  listaProdutos.appendChild(liProduto);
  liProduto.appendChild(divNome);
  liProduto.appendChild(divPreco);
});}

window.onload = ()=>{
  // Carregar lista dinamicamente
    // Criar lista ✅
    // Carregar lista ✅
    // Mostrar no DOM ✅
  carrregaListaDinamicamente();
  // Lista "Sua Cesta" carregada com ação do clique
    // Item já selecionado - mensagem "Este item (item) já está na sua cesta"]
    // Atualizar somatório
  adicionarCesta();
  
}