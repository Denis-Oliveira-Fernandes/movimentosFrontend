export class MovimentosLanding {
    dataMes: number;
    dataAno: number;
    codProduto: string;
    descricaoProduto: string;
    numeroLancamento: number;
    descricao: string;
    valor: number;

    constructor(
        dataMes: number,
        dataAno: number,
        codProduto: string,
        descricaoProduto: string,
        numeroLancamento: number,
        descricao: string,
        valor: number
    ) {
        this.dataMes = dataMes;
        this.dataAno = dataAno;
        this.codProduto = codProduto;
        this.descricaoProduto = descricaoProduto;
        this.numeroLancamento = numeroLancamento;
        this.descricao = descricao;
        this.valor = valor
    }
}