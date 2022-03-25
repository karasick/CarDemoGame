import { ExtrudeBufferGeometry, Mesh, MeshLambertMaterial } from 'three'
import MainLeftLand from './main-left-land'
import MainMiddleLand from './main-middle-land'
import MainRightLand from './main-right-land'
import MainOuterLand from './main-outer-land'

export default class MainLand extends Mesh {
  constructor (mapWidth, mapHeight, geometry) {
    const leftLand = new MainLeftLand(geometry)
    const middleLand = new MainMiddleLand(geometry)
    const rightLand = new MainRightLand(geometry)
    const outerLand = new MainOuterLand(geometry, mapWidth, mapHeight)

    const fieldGeometry = new ExtrudeBufferGeometry(
      [leftLand, middleLand, rightLand, outerLand],
      { depth: 6, bevelEnabled: false }
    )

    super(fieldGeometry, [
      new MeshLambertMaterial({ color: '#67C240' }),
      new MeshLambertMaterial({ color: '#23311C' })
    ])
  }
}