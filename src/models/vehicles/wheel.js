import { Mesh, BoxBufferGeometry, MeshLambertMaterial } from 'three'

export default class Wheel extends Mesh {
  constructor () {
    const width = 12
    const height = 33
    const depth = 12

    super(
      new BoxBufferGeometry(width, height, depth),
      new MeshLambertMaterial({
        color: '#333333'
      })
    )

    this.position.set(0, 0, depth / 2)
  }
}
