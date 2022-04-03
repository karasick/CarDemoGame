import { Group, Mesh, MeshLambertMaterial, PlaneBufferGeometry } from 'three'
import MainMapTexture from './main-map.texture'
import MainLand from '../../models/land/main/main-land'
import MainLandGeometry from '../../models/land/main/main-land-geometry'

export default class MainMap extends Group {
  constructor({ width, height }) {
    super()

    this.width = width
    this.height = height
    this.landGeometry = new MainLandGeometry()
  }

  init () {
    const lineMarkingsTexture = new MainMapTexture(this.width, this.height, this.landGeometry.arcCenterX, this.landGeometry.trackRadius)

    const planeGeometry = new PlaneBufferGeometry(this.width, this.height)
    const planeMaterial = new MeshLambertMaterial({
      map: lineMarkingsTexture
    })

    const main = new Mesh(planeGeometry, planeMaterial)
    this.add(main)

    const land = new MainLand(this.width, this.height, this.landGeometry)
    this.add(land)
  }
}