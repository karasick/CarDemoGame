import { pickRandom } from '../tools/helpers'
import Car from '../game/vehicles/Car'

export default class MainSceneController {
  constructor ({ player, map }) {
    this.player = player
    this.map = map

    this.ready = false
    this.lose = false

    this.otherVehicles = []

    this._score = 0
    this.scoreEvent = new CustomEvent('score-updated', {
      detail: {
        score: this._score
      }
    })
  }

  init () {
    this._addListeners()
    this._setInitialPositions()
  }

  update () {
    if (this.ready || this.lose) return

    this.player.move(window.timeDelta, this.map.landGeometry)

    const laps = Math.floor(Math.abs(this.player.car.angleMoved) / (Math.PI * 2))
    if (laps !== this._score) {
      this._score = laps
      this.scoreEvent.detail.score = this._score
      document.dispatchEvent(this.scoreEvent)
    }

    if (this.otherVehicles.length < (laps + 1) / 5) {
      this._addVehicles()
    }

    this.otherVehicles.forEach(vehicle => {
      vehicle.move(window.timeDelta, this.map.landGeometry)
    })

    this._hitDetection()
  }

  startGame () {
    this.ready = false
  }

  _setInitialPositions () {
    this._resetScore()
    this._resetPositions()
    this._removeOtherVehicles()

    this.ready = true
    this.lose = false
  }

  _resetScore() {
    this.score = 0
  }

  _resetPositions() {
    this.player.car.angleMoved = 0
    this.player.move(0, this.map.landGeometry)
    window.lastTimestamp = null
  }

  _removeOtherVehicles() {
    this.otherVehicles.forEach(vehicle => {
      window.currentScene.remove(vehicle.mesh)
    })
    this.otherVehicles = []
  }

  _addListeners() {
    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowUp': {
          this.startGame()
          this.player.accelerate = true
          break
        }
        case 'ArrowDown': {
          this.player.decelerate = true
          break
        }
        case 'R':
        case 'r': {
          this._setInitialPositions()
          break
        }
      }
    })

    window.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'ArrowUp': {
          this.player.accelerate = false
          break
        }
        case 'ArrowDown': {
          this.player.decelerate = false
          break
        }
      }
    })
  }

  _addVehicles() {
    const vehicleTypes = ['car']

    const type = pickRandom(vehicleTypes)
    const vehicle = this._getVehicleByType(type)
    window.currentScene.add(vehicle.mesh)

    vehicle.clockwise = false

    this.otherVehicles.push(vehicle)
  }

  _getVehicleByType (type) {
    switch (type) {
      case 'car':
      default: return new Car()
    }
  }

  _hitDetection () {
    const playerHitZone1 = this._getHitZonePosition({
      center: this.player.car.mesh.position,
      angle: this.player.car.angleInitial + this.player.car.angleMoved,
      clockwise: this.player.car.clockwise,
      distance: 15
    })
    const playerHitZone2 = this._getHitZonePosition({
      center: this.player.car.mesh.position,
      angle: this.player.car.angleInitial + this.player.car.angleMoved,
      clockwise: this.player.car.clockwise,
      distance: -15
    })

    const hit = this.otherVehicles.some(vehicle => {
      const vehicleHitZone1 = this._getHitZonePosition({
        center: vehicle.mesh.position,
        angle: vehicle.angleInitial + vehicle.angleMoved,
        clockwise: vehicle.clockwise,
        distance: 15
      })
      const vehicleHitZone2 = this._getHitZonePosition({
        center: vehicle.mesh.position,
        angle: vehicle.angleInitial + vehicle.angleMoved,
        clockwise: vehicle.clockwise,
        distance: -15
      })

      if (this._getDistance(playerHitZone1, vehicleHitZone1) < 40) return true
      if (this._getDistance(playerHitZone1, vehicleHitZone2) < 40) return true
      if (this._getDistance(playerHitZone2, vehicleHitZone1) < 40) return true
    })

    if (hit) {
      console.log('You lose.')
      this.lose = true
    }
  }

  _getHitZonePosition ({ center, angle, clockwise, distance }) {
    const directionAngle = angle + clockwise ? -Math.PI / 2 : +Math.PI / 2
    return {
      x: center.x + Math.cos(directionAngle) * distance,
      y: center.y + Math.sin(directionAngle) * distance
    }
  }

  _getDistance (coordinate1, coordinate2) {
    return Math.sqrt((coordinate2.x - coordinate1.x) ** 2 + (coordinate2.y - coordinate1.y) ** 2)
  }
}