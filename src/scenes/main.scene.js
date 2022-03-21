import { AmbientLight, DirectionalLight, Scene } from 'three'
import Car from '../models/vehicles/car/car'

export default class MainScene extends Scene {
  constructor () {
    super()
  }

  init () {
    const ambientLight = new AmbientLight(0xffffff, 0.5)
    this.add(ambientLight)

    const directionalLight = new DirectionalLight(0xffffff, 0.6)
    directionalLight.position.set(100, -300, 400)
    this.add(directionalLight)

    const car = new Car()
// car.rotateZ(115) // Rotate to see back of car
    this.add(car)
  }
}