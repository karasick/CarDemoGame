import { Shape } from 'three'

export default class MainMiddleLand extends Shape {
  constructor (geometry) {
    super()

    this.absarc(
      -geometry.arcCenterX,
      0,
      geometry.innerTrackRadius,
      geometry.arcAngle3,
      -geometry.arcAngle3,
      true
    )

    this.absarc(
      geometry.arcCenterX,
      0,
      geometry.innerTrackRadius,
      Math.PI + geometry.arcAngle3,
      Math.PI - geometry.arcAngle3,
      true
    )
  }
}