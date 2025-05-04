function alterarQtd(produto, acao){
    const qtd = document.getElementById('qtd_' + produto);
    const valor = document.getElementById('valor_' + produto);
    const total = document.getElementById('total_' + produto);

        if(acao == '-' && qtd.innerHTML == 0){
            alert('Atenção! A quantidade não pode ser menos que 0.');
        } else{
            acao =='+' ? qtd.innerHTML++ : qtd.innerHTML--;
            const valorTotal = qtd.innerHTML * somenteNumeros(valor.innerHTML);
            total.innerHTML =  formatarValor(valorTotal)
            soma()
        }
  
}

function soma(){
    let soma = 0;

    for(let i = 1; i < 4; i++){
        let numero = somenteNumeros(document.getElementById('total_' + i).innerHTML);
        soma += Number(numero);

    }

    document.getElementById('subtotal').innerHTML = formatarValor(soma);
}

function somenteNumeros(n){
    return n.replace(/\D/g, '');
}

function formatarValor(n){
    return 'R$ ' + n.toLocaleString('pt-BR')
}
function limparCarrinho() {
    for (let i = 1; i < 4; i++) {
        document.getElementById('qtd_' + i).innerHTML = 0;
        document.getElementById('total_' + i).innerHTML = formatarValor(0);
    }
    document.getElementById('subtotal').innerHTML = formatarValor(0);
    alert("Carrinho limpo com sucesso!");
}



function finalizarCompra() {
    const nome = document.getElementById('nomeCliente').value.trim();

    if (nome === "") {
        alert("Por favor, digite seu nome antes de finalizar a compra.");
        return;
    }

    let totalProdutos = 0;
    let resumo = `Resumo da compra de ${nome}:\n\n`;

    for (let i = 1; i < 3; i++) {
        const qtd = parseInt(document.getElementById('qtd_' + i).innerHTML);
        const nomeProduto = document.querySelectorAll("table tbody tr")[i - 1].querySelector("td:nth-child(2) div").textContent;

        if (qtd > 0) {
            resumo += `• ${nomeProduto} - Quantidade: ${qtd}\n`;
            totalProdutos += qtd;
        }
    }

    if (totalProdutos === 0) {
        alert("Você precisa adicionar pelo menos 1 produto ao carrinho antes de finalizar.");
    } else {
        const subtotal = document.getElementById('subtotal').innerHTML;
        resumo += `\nSubtotal: ${subtotal}`;
        alert(resumo);
        for (let i = 1; i < 3; i++) {
            document.getElementById('qtd_' + i).innerHTML = 0;
            document.getElementById('total_' + i).innerHTML = formatarValor(0);
        }
        document.getElementById('nomeCliente').value = ""; // Limpa o campo de nome
        document.getElementById('subtotal').innerHTML = formatarValor(0); // Limpa o subtotal
    }
       
        function limparCarrinho() {
            for (let i = 1; i <= 3; i++) {
                document.getElementById('qtd_' + i).innerHTML = 0;
                document.getElementById('total_' + i).innerHTML = 'R$ 0,00';
            }
            document.getElementById('subtotal').innerHTML = 'R$ 0,00';
            alert("Carrinho limpo com sucesso!");
        }
        
}
