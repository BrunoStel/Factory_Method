import IData from "../interface/IData";
import IPayment from "../interface/IPayment";
import Pessoa from "../interface/pessoa";



export default class Boleto implements IPayment{
    pessoa = new Pessoa()

    getData({name, sobrenome, cpf, idade}:IData): void {

        Object.assign(this.pessoa, {
            name,
            sobrenome,
            cpf,
            idade
        })
    }

    processPayment(): void {
        if(this.pessoa.cpf.length === 11){
            console.log(`${this.pessoa.name} seu pagamento foi realizado com sucesso`)
        }else{
            console.log(`${this.pessoa.name} seu pagamento foi recusado, informe um cpf válido`)
        }
    }
    
}