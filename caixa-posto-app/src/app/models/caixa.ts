import { Leitura } from "./leitura";

export class Caixa {
    id: number;

    dia: Date;

    turno: string;

    trocoInicial: number;

    moedasInicial: number;

    vendaProdutos: number;

    recebimentos: number;

    trocoFinal: number;

    moedasFinal: number;

    totalFiado: number;

    cartoesPix: number;

    dinheiro: number;

    retiradaCaixa: number;

    arla: number;

    vales: number;

    somaLeituras: number;

    somaTotalA: number;

    somaTotalB: number;

    diferenca: number;

    leituras: Leitura[];
}
