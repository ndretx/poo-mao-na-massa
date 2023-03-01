export default class CarroModel{

    id: number;
    ano: number;
    placa: string;
    renavam: string;
    valorFipe: number;
    marca: string;
    model: string;


    constructor(id: number, ano: number, placa: string, renavam: string, valorFipe: number, marca: string, model: string){

        this.id= id;
        this.ano= ano;
        this.placa= placa;
        this.renavam= renavam;
        this.valorFipe= valorFipe;
        this.marca = marca;
        this.model = model;
    }

    dirigir(): void{
        console.log(`Voce esta dirigindo um ${this.marca} ${this.model}`)

    }
   vender (): void{
        console.log (`Voce esta vendendo um ${this.marca} ${this.model}`)
    }
}


