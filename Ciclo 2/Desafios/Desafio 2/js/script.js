import { dadosCep } from './consultaViaCep.js';
import { estadosBrasileiros } from './estados.js';

const cep = document.getElementById('Cep');
const rua = document.getElementById('Rua')
const bairro = document.getElementById('Bairro');
const cidade = document.getElementById('Cidade')
const estado = document.getElementById('Estado');

const botaSubmit = document.getElementById('Buscar')

const limparFormulario = () => {
    cep.value = '';
    rua.value = '';
    bairro.value='';
    cidade.value='';
    estado.value = '';
}

window.onload = () => {
    
    botaSubmit.addEventListener('click', async (event) => {
        event.preventDefault();
        // https://viacep.com.br/exemplo/javascript/
        const cepPesquisar = cep.value;
        cepPesquisar.replace(/\D/g, '');
        if (cepPesquisar !== '') {
            const validarCep = /^[0-9]{8}$/;

            if(validarCep.test(cepPesquisar)) {
                const resultadoBuscaCep = await dadosCep(cepPesquisar);
                const cepNaoEncontrado = 'CEP não encontrado';
        
                rua.value = (resultadoBuscaCep.logradouro) ? resultadoBuscaCep.logradouro : cepNaoEncontrado ;
                bairro.value = (resultadoBuscaCep.bairro) ? resultadoBuscaCep.bairro : cepNaoEncontrado;
                cidade.value = (resultadoBuscaCep.localidade) ? resultadoBuscaCep.localidade : cepNaoEncontrado;
                const UF = (resultadoBuscaCep.uf) ? resultadoBuscaCep.uf : cepNaoEncontrado;
        
                const filtraEstado = (estadosBrasileiros
                    .filter((estado) => estado.sigla === UF)[0]);
                estado.value = filtraEstado ? filtraEstado.nome : cepNaoEncontrado; 
            } else {
                limparFormulario();
                alert("Insira um CEP válido!")
            }
        } else {
            limparFormulario();
        }  
    })
}
