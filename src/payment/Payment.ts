import IData from "./interface/IData";
import IPayment from "./interface/IPayment";



export default abstract class Payment {

    startPayment({name, sobrenome, cpf, idade}:IData){
        let pagamento = this.getPessoa()
        pagamento.getData({name, sobrenome, cpf, idade})
        pagamento.processPayment()
    }

    protected abstract getPessoa():IPayment

}