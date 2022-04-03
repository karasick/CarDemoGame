import Car from './Car'

export default class PlayerCar extends Car {
  constructor ({ player }) {
    super()

    this.player = player

    this._speedMax = 2
    this._speedMin = 0.5

    this.angleInitial = Math.PI
  }

  get speed () {
    if (this.player.accelerate) return this._speedMultiplayer * this._speedMax

    if (this.player.decelerate) return this._speedMultiplayer * this._speedMin

    return this._speedMultiplayer
  }
}