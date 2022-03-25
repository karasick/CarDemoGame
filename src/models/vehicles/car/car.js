import { Group, Mesh, BoxBufferGeometry, MeshLambertMaterial, Vector2 } from 'three'
import Wheel from '../wheel'
import { getRandomColor } from '../../../tools/helpers'
import CarFrontTexture from './car-front.texture'
import CarSideTexture from './car-side.texture'

export default class Car extends Group {
  constructor () {
    super()

    const backWheel = new Wheel()
    backWheel.position.x = -18
    this.add(backWheel)

    const frontWheel = new Wheel()
    frontWheel.position.x = 18
    this.add(frontWheel)

    const main = new Mesh(
      new BoxBufferGeometry(60, 30, 15),
      new MeshLambertMaterial({
        color: getRandomColor()
      })
    )
    main.position.z = 12
    this.add(main)

    const carFrontTexture = new CarFrontTexture()
    carFrontTexture.center = new Vector2(0.5, 0.5)
    carFrontTexture.rotation = Math.PI / 2

    const carBackTexture = new CarFrontTexture()
    carBackTexture.center = new Vector2(0.5, 0.5)
    carBackTexture.rotation = -1 * Math.PI / 2

    const carRightSideTexture = new CarSideTexture()

    const carLeftSideTexture = new CarSideTexture()
    carLeftSideTexture.flipY = false

    const cabin = new Mesh(
      new BoxBufferGeometry(33, 24, 12),
      [
        new MeshLambertMaterial({ map: carFrontTexture }),
        new MeshLambertMaterial({ map: carBackTexture }),
        new MeshLambertMaterial({ map: carLeftSideTexture }),
        new MeshLambertMaterial({ map: carRightSideTexture }),
        new MeshLambertMaterial({ color: '#ffffff' }),
        new MeshLambertMaterial({ color: '#ffffff' }),
      ]
    )
    cabin.position.set(-6, 0, 25.5)
    this.add(cabin)
  }
}
