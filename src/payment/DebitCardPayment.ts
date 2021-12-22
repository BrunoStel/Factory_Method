import IPayment from "./interface/IPayment";
import DebitCard from "./methods/debitCard";
import Payment from "./Payment";



export default class DebitCardPayment extends Payment{

    protected getPessoa(): IPayment {
        return new DebitCard()
    }
    
}