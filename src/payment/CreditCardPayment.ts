import IPayment from "./interface/IPayment";
import CreditCard from "./methods/creditCard";
import Payment from "./Payment";



export default class CreditCardPayment extends Payment{

    protected getPessoa(): IPayment {
        return new CreditCard()
    }
    
}