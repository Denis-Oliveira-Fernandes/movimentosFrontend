export class Produtos {
    codProduto: string;
    desProduto: string;
    status: string;

    constructor(
        codProduto: string,
        desProduto: string,
        status: string,
    ) {
        this.codProduto = codProduto;
        this.desProduto = desProduto;
        this.status = status;
    }
}