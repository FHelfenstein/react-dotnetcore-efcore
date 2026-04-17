export enum Prioridade {
    NaoDefinido = 0,
    Baixa = 1,
    Normal= 2,
    Alta = 3
}

export interface IAtividade {
    id:  number;
    prioridade: Prioridade;
    titulo: string;
    descricao: string;
}