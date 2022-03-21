import { OrthographicCamera } from 'three'

export default class MainCamera extends OrthographicCamera {
  constructor () {
    const aspectRatio = window.innerWidth / window.innerHeight
    const cameraWidth = 150
    const cameraHeight = cameraWidth / aspectRatio

    super(
      cameraWidth / -2,
      cameraWidth / 2,
      cameraHeight / 2,
      cameraHeight / -2,
      0,
      1000
    )
  }

  setInitialPosition () {
    this.position.set(200, -200, 300)
    this.up.set(0, 0, 1)
    this.lookAt(0, 0, 0)
  }
}