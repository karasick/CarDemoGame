import { AmbientLight, DirectionalLight, Scene } from 'three'
import MainMap from '../maps/main/main.map'
import ScorePanel from '../ui/score-panel'
import MainSceneController from './main-scene.controller'
import Player from '../game/Player'
import MainLandGeometry from '../models/land/main/main-land-geometry'
import Car from '../game/vehicles/Car'
import PlayerCar from '../game/vehicles/PlayerCar'

export default class MainScene extends Scene {
  constructor () {
    super()

    this.controller = null

    this.player = null

    this.map = null
  }

  init () {
    this._setUpMap()
    this.map.init()

    this._setUpObjects()

    this.player = new Player()
    this.player.car = new PlayerCar({
      player: this.player
    })
    this.add(this.player.car.mesh)

    this.controller = new MainSceneController({
      player: this.player,
      map: this.map
    })
    this.controller.init()

    this._setUpUI()
  }

  update () {
    this.controller.update()
  }

  _setUpMap () {
    this.map = new MainMap({
      width: window.camera.cameraWidth,
      height: window.camera.cameraHeight
    })
    this.add(this.map)
  }

  _setUpObjects () {
    const ambientLight = new AmbientLight(0xffffff, 0.5)
    this.add(ambientLight)

    const directionalLight = new DirectionalLight(0xffffff, 0.6)
    directionalLight.position.set(100, -300, 400)
    this.add(directionalLight)
  }

  _setUpUI() {
    const scorePanel = new ScorePanel()
    scorePanel.init()
  }
}