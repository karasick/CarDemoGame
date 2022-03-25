export default class MainLandGeometry {
  constructor () {
    this.trackRadius = 225
    this.trackWidth = 70
    this.innerTrackRadius = this.trackRadius - (this.trackWidth / 2)
    this.outerTrackRadius = this.trackRadius + (this.trackWidth / 2)

    this.arcAngle1 = (1 / 3) * Math.PI
    this.deltaY = Math.sin(this.arcAngle1) * this.innerTrackRadius
    this.arcAngle2 = Math.asin(this.deltaY / this.outerTrackRadius)

    this.arcCenterX = (
      Math.cos(this.arcAngle1) * this.innerTrackRadius +
      Math.cos(this.arcAngle2) * this.outerTrackRadius
    ) / 2

    this.arcAngle3 = Math.acos(this.arcCenterX / this.innerTrackRadius)
    this.arcAngle4 = Math.acos(this.arcCenterX / this.outerTrackRadius)
  }
}