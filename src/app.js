import { WebGLRenderer } from 'three'
import CanvasFactory from './tools/canvas.factory'
import MainCamera from './cameras/main.camera'
import MainScene from './scenes/main.scene'

export default class App {
  constructor () {
    const canvasFactory = new CanvasFactory()
    const rendererCanvas = canvasFactory.createNewCanvas()

    this.renderer = new WebGLRenderer({
      canvas: rendererCanvas,
      antialias: true
    })

    this.camera = new MainCamera()

    this.scene = new MainScene()
  }

  init () {
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    this.camera.setInitialPosition()

    this.scene.init()
  }

  start () {
    this.renderer.render(this.scene, this.camera)
  }
}

