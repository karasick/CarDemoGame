import { Shape } from 'three'

export default class MainRightLand extends Shape {
  constructor (geometry) {
    super()

    this.absarc(
      geometry.arcCenterX,
      0,
      geometry.innerTrackRadius,
      Math.PI - geometry.arcAngle1,
      Math.PI + geometry.arcAngle1,
      true
    )

    this.absarc(
      -geometry.arcCenterX,
      0,
      geometry.outerTrackRadius,
      -geometry.arcAngle2,
      geometry.arcAngle2,
      false
    )
  }
}