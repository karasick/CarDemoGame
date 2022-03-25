import { AmbientLight, DirectionalLight, Scene } from 'three'
import Car from '../models/vehicles/car/car'
import MainMap from '../maps/main/main.map'
import MainLand from '../models/land/main/main-land'
import MainLandGeometry from '../models/land/main/main-land-geometry'

export default class MainScene extends Scene {
  constructor () {
    super()
  }

  init (camera) {
    const ambientLight = new AmbientLight(0xffffff, 0.5)
    this.add(ambientLight)

    const directionalLight = new DirectionalLight(0xffffff, 0.6)
    directionalLight.position.set(100, -300, 400)
    this.add(directionalLight)

    this._addTrack(camera)

    const car = new Car()
// car.rotateZ(115) // Rotate to see back of car
    this.add(car)
    car.position.set(-150, 225, 0)
  }

  _addTrack(camera) {
    const landGeometry = new MainLandGeometry()

    const map = new MainMap(camera.cameraWidth, camera.cameraHeight, landGeometry)
    this.add(map)

    const land = new MainLand(camera.cameraWidth, camera.cameraHeight, landGeometry)
    this.add(land)
  }
}