import IVehicle from './interfaces/IVehicle';

export default class Bike implements IVehicle {
    startRoute(): void {
        this.getCargo()
        console.log('Iniciando a rota de entrega')
    }
    getCargo(): void {
       console.log('Pegando a encomenda')
    }
  

}