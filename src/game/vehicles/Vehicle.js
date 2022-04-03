export default class Vehicle {
  constructor () {
    this._speedMin = 1
    this._speedMax = 2
    this._speedMultiplayer = 0.0017

    this.mesh = null
    this.type = null
    this.clockwise = true
    this.angleMoved = 0
    this.angleInitial = 0
  }

  get speed () {
    return (this._speedMin + Math.random() * (this._speedMax - this._speedMin)) * this._speedMultiplayer
  }

  get angelTotal () {
    return this.angleInitial + this.angleMoved
  }

  move (timeDelta, landGeometry) {
    if (this.clockwise) {
      this.angleMoved -= this.speed * timeDelta
    }
    else {
      this.angleMoved += this.speed * timeDelta
    }

    const vehicleX = Math.cos(this.angelTotal) * landGeometry.trackRadius + this._getArcCenter(landGeometry.arcCenterX)
    const vehicleY = Math.sin(this.angelTotal) * landGeometry.trackRadius

    this.mesh.position.x = vehicleX
    this.mesh.position.y = vehicleY

    const vehicleRotationZ = this.angelTotal + (this.clockwise ? - Math.PI / 2 : Math.PI / 2)

    this.mesh.rotation.z = vehicleRotationZ
  }

  _getArcCenter (center) {
    if (this.clockwise) {
      return -1 * center
    }

    return center
  }
}