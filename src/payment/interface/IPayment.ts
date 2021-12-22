import Pessoa from "./pessoa";
import IData from "./IData";

export default interface IPayment {
    getData({}:IData):void
    processPayment():void

}