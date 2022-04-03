export default class Player {
  constructor () {
    this.car = null

    this.accelerate = false
    this.decelerate = false
  }

  move (timeDelta, landGeometry) {
    this.car.move(timeDelta, landGeometry)
  }
}