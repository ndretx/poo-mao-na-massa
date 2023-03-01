import CarroModel from "./carro-model";

export default class PasseioModel extends CarroModel{
    tipo: string;
    qtdLugares: number;

    constructor(id: number, ano: number, placa: string, renavam: string, valorFipe: number, marca: string, model: string, tipo: string, qtdLugares: number){
        super(id, ano, placa, renavam, valorFipe, marca, model);
        this.tipo = tipo;
        this.qtdLugares = qtdLugares;
    }

    comprar(): void{
        console.log(`Voce esta comprando o ${this.marca} ${this.model} por ${this.valorFipe}`);

    }

}
