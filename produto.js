export class Produto {
    nome;
    preco;
    imagem;
    codigoDeBarras;

    imprime() {
        console.log({
            codigoDeBarras: this.codigoDeBarras
        });
    }
};