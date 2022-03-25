import { CanvasTexture } from 'three'

export default class MainMapTexture extends CanvasTexture {
  constructor (width, height, arcCenterX, trackRadius) {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height

    const context = canvas.getContext('2d')

    context.fillStyle = '#546E90'
    context.fillRect(0, 0, width, height)

    context.lineWidth = 2
    context.strokeStyle = '#E0FFFF'
    context.setLineDash([10, 14])

    context.beginPath()
    context.arc(
      width / 2 - arcCenterX,
      height / 2,
      trackRadius,
      0,
      Math.PI * 2
    )
    context.stroke()

    context.beginPath()
    context.arc(
      width / 2 + arcCenterX,
      height / 2,
      trackRadius,
      0,
      2 * Math.PI
    )
    context.stroke()

    super(canvas)
  }
}