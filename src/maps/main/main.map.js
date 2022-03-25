import { Mesh, MeshLambertMaterial, PlaneBufferGeometry } from 'three'
import MainMapTexture from './main-map.texture'

export default class MainMap extends Mesh {
  constructor(width, height, geometry) {
    const lineMarkingsTexture = new MainMapTexture(width, height, geometry.arcCenterX, geometry.trackRadius)

    const planeGeometry = new PlaneBufferGeometry(width, height)
    const planeMaterial = new MeshLambertMaterial({
      map: lineMarkingsTexture
    })

    super(planeGeometry, planeMaterial)
  }
}