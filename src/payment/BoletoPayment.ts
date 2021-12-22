import IPayment from "./interface/IPayment";
import Boleto from "./methods/boleto";
import Payment from "./Payment";



export default class BoletoPayment extends Payment{

    protected getPessoa(): IPayment {
        return new Boleto()
    }
    
}