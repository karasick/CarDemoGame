import { Shape } from 'three'

export default class MainLeftLand extends Shape {
  constructor (geometry) {
    super()

    this.absarc(
      -geometry.arcCenterX,
      0,
      geometry.innerTrackRadius,
      geometry.arcAngle1,
      -geometry.arcAngle1,
      false
    )

    this.absarc(
      geometry.arcCenterX,
      0,
      geometry.outerTrackRadius,
      Math.PI + geometry.arcAngle2,
      Math.PI - geometry.arcAngle2,
      true
    )
  }
}