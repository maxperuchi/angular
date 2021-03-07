import { Combustivel } from "./combustivel";
import { Leitura } from "./leitura";

export class Bomba {
    id: number;

    combustivel: Combustivel;

    numero: number;

    leituras: Leitura[];
}
