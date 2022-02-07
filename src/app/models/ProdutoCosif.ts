export class ProdutoCosif {
    codProduto: string;
    codCosif: string;
    codClassificacao: string;
    status: string;

    constructor(
        codProduto: string,
        codCosif: string,
        codClassificacao: string,
        status: string,
    ) {
        this.codProduto = codProduto;
        this.codCosif = codCosif;
        this.codClassificacao = codClassificacao;
        this.status = status;
    }
}