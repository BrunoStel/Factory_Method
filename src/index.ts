import { BikeTransport } from "./transport/BikeTransport";
import { CarTransport } from "./transport/CarTransport";
import { MotorcycleTransport } from "./transport/MotorcycleTransport";
import Transport from "./transport/transport";
import BoletoPayment from "./payment/BoletoPayment"
import CreditCardPayment from "./payment/CreditCardPayment"
import DebitCardPayment from "./payment/DebitCardPayment"

declare var process;

let transport: Transport;

if (process.argv.includes("--uber")) {

    transport = new CarTransport();

} else if (process.argv.includes("--log")) {

    transport = new MotorcycleTransport();

} else if (process.argv.includes("--bike")) {

    transport = new BikeTransport();

} else {

    console.log("Selecione o tipo de entrega.");
    
}

if (transport) {
    transport.startTransport();
}




let debitCardPayment = new DebitCardPayment()

let creditCardPayment = new CreditCardPayment()

let boletoPayment = new BoletoPayment()


debitCardPayment.startPayment({name:"Bruno", sobrenome:"Stelmastchuk", cpf:"09828641917", idade:18})

creditCardPayment.startPayment({name:"Bruno", sobrenome:"Stelmastchuk", cpf:"09828641917", idade:17})

boletoPayment.startPayment({name:"Bruno", sobrenome:"Stelmastchuk", cpf:"09828641917", idade:26})