let totalGeral;
limpar();

function adicionar() {
    // Obter o elemento select do produto e o valor selecionado
    let produto = document.getElementById('produto');
    let produtoSelecionado = produto.options[produto.selectedIndex].text;
    
    // Obter o elemento de input da quantidade e o valor digitado
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // Validar se a quantidade é válida
    if (quantidade <= 0 || isNaN(quantidade)) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

    // Extrair o nome e o preço do produto selecionado
    let nomeProduto = produtoSelecionado.split(" - ")[0];
    let precoProduto = parseFloat(produtoSelecionado.split(" - ")[1].replace("R$", "").trim());

    // Calcular o preço total do produto (preço unitário * quantidade)
    let precoTotal = precoProduto * quantidade;

    // Criar uma string para exibir o produto no carrinho
    let produtoHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoTotal.toFixed(2)}</span>`;

    // Adicionar o produto ao carrinho
    let carrinhoProdutos = document.getElementById("lista-produtos");
    let novoProduto = document.createElement("section");
    novoProduto.classList.add("carrinho__produtos__produto");
    novoProduto.innerHTML = produtoHTML;
    carrinhoProdutos.appendChild(novoProduto);

    // Atualizar o valor total do carrinho
    let valorTotalElement = document.getElementById("valor-total");
    let valorTotalAtual = parseFloat(valorTotalElement.textContent.replace("R$", "").trim());
    let novoValorTotal = valorTotalAtual + precoTotal;
    valorTotalElement.textContent = `R$${novoValorTotal.toFixed(2)}`;

    document.getElementById("quantidade").value = "";
}

// Função para limpar
function limpar() {
    totalGeral = 0;
    let carrinhoProdutos = document.getElementById("lista-produtos");
    carrinhoProdutos.innerHTML = ""; // Remove todos os produtos do carrinho
    let valorTotalElement = document.getElementById("valor-total");
    valorTotalElement.textContent = "R$0.00"; // Reseta o valor total do carrinho
}

