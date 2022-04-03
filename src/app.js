import { WebGLRenderer } from 'three'
import MainCamera from './cameras/main.camera'
import MainScene from './scenes/main.scene'
import AnimationLoop from './game/AnimationLoop'

export default class App {
  constructor () {
    const rendererCanvas = this._createNewGlobalCanvas()

    window.renderer = new WebGLRenderer({
      canvas: rendererCanvas,
      antialias: true
    })

    window.camera = new MainCamera()

    window.currentScene = new MainScene()
  }

  init () {
    window.renderer.setPixelRatio(window.devicePixelRatio)
    window.renderer.setSize(window.innerWidth, window.innerHeight)

    window.camera.setInitialPosition()

    window.currentScene.init()
  }

  start () {
    window.renderer.render(window.currentScene, window.camera)

    const animationLoop = new AnimationLoop()
    window.renderer.setAnimationLoop(timestamp => {
      animationLoop.updateLoop(timestamp, () => window.currentScene.update())
    })
  }

  _createNewGlobalCanvas (canvasName = 'game-canvas') {
    const canvasTag = 'canvas'

    const canvas = document.createElement(canvasTag)
    canvas.id = canvasName
    document.body.prepend(canvas)

    return canvas
  }
}

