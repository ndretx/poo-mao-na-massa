import CarroModel from "./carro-model"

export default class CaminhoneteModel extends CarroModel{

    capacidade: number;
    constructor(id: number, ano: number, placa: string, renavam: string, valorFipe: number, marca: string, model: string, tipo: string, qtdLugares: number, capacidade: number){
        super(id, ano, placa, renavam, valorFipe, marca, model);
        this.capacidade = capacidade;
    }
    comprar(): void{
        console.log(`Voce esta alugando uma caminhonete ${this.marca} ${this.model} `);
    }
}