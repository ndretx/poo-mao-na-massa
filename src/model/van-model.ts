import CarroModel from "./carro-model";

export default class VanModel extends CarroModel{

    categoria: string;

    constructor(id: number, ano: number, placa: string, renavam: string, valorFipe: number, marca: string, model: string, categoria: string ){
        super(id, ano, placa, renavam, valorFipe, marca, model);
        this.categoria = categoria;


    }
    trasportar(): void{
        console.log (`Voce esta transportando em uma van de categoria ${this.categoria}`)
    }
}    