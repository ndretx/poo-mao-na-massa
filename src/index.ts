import PasseioModel from "./model/passeio-model";
import CarroModel from "./model/carro-model";

var chevette = new PasseioModel(1, 1986, 'KPM-9898', '3235986587998', 5000, 'GM', 'Chevette 1.6 à Alcool', 'Sedan', 5 );

// Aqui estou comprando um chevette
chevette.comprar();
// Aqui estou dirigindo um chevette
// Metodo da classe CarroModel
chevette.dirigir();
// Aqui estou vendendo um chevette
// Metedo herdando da classe CarroMOdel 
chevette.vender();


var carro: CarroModel;
carro = chevette; 

// Polimorfismo
carro.model = 'Corvette'
carro.dirigir();


// ==================================================
// Abstração

