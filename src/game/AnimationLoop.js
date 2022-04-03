export default class AnimationLoop {
  constructor () {
    window.lastTimestamp = null
    window.timeDelta = null
  }

  updateLoop (timestamp, updateFunc) {
    if(!window.lastTimestamp) {
      window.lastTimestamp = timestamp
      return
    }

    window.timeDelta = timestamp - window.lastTimestamp

    updateFunc()

    window.renderer.render(window.currentScene, window.camera)
    window.lastTimestamp = timestamp
  }
}