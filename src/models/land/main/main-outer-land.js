import { Shape } from 'three'

export default class MainOuterLand extends Shape {
  constructor (geometry, mapWidth, mapHeight) {
    super()

    this.moveTo(-mapWidth / 2, -mapHeight / 2)
    this.lineTo(0, -mapHeight / 2)

    this.absarc(
      -geometry.arcCenterX,
      0,
      geometry.outerTrackRadius,
      -geometry.arcAngle4,
      geometry.arcAngle4,
      true
    )

    this.absarc(
      geometry.arcCenterX,
      0,
      geometry.outerTrackRadius,
      Math.PI - geometry.arcAngle4,
      Math.PI + geometry.arcAngle4,
      true
    )

    this.lineTo(0, -mapHeight / 2)
    this.lineTo(mapWidth / 2, -mapHeight / 2)
    this.lineTo(mapWidth / 2, mapHeight / 2)
    this.lineTo(-mapWidth / 2, mapHeight / 2)
  }
}