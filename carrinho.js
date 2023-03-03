export class Carrinho {
    #produtos = [];

    imprime() {
        this.#produtos.forEach((produto, index) => {
            console.log(`Produto ${index+1}: `);
            produto.imprime();
        });
    }

    insereProduto(produto) {
        this.#produtos.push(produto);
    }

    removeProduto(codigoDeBarras) {
        this.#produtos = this.#produtos.filter(produto => produto.codigoDeBarras !== codigoDeBarras);
    }
}