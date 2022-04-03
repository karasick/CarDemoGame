import Vehicle from './Vehicle'
import CarModel from '../../models/vehicles/car/car.model'

export default class Car extends Vehicle {
  constructor () {
    super()

    this.type = 'car'
    this.mesh = new CarModel()
  }
}